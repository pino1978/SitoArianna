import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";

const response=(statusCode,body)=>({statusCode,headers:{"Content-Type":"application/json","Cache-Control":"no-store"},body:JSON.stringify(body)});
const allowedCategories=new Set(["gara","allenamento","podio","ritratto","evento"]);
function authorized(context){return Boolean(context?.clientContext?.user)}
function safeSegment(value,fallback="media"){return String(value||fallback).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||fallback}

export async function handler(event,context){
  if(event.httpMethod!=="POST")return response(405,{error:"Metodo non consentito"});
  if(!authorized(context))return response(401,{error:"Accesso non autorizzato"});
  const required=["R2_ACCOUNT_ID","R2_ACCESS_KEY_ID","R2_SECRET_ACCESS_KEY","R2_BUCKET","R2_PUBLIC_URL"];
  if(required.some(key=>!process.env[key]))return response(503,{error:"Archivio foto non ancora configurato"});
  try{
    const {fileName,contentType,size,year,category}=JSON.parse(event.body||"{}");
    if(contentType!=="image/webp"||!fileName?.endsWith(".webp"))return response(400,{error:"Formato foto non consentito"});
    if(!Number.isFinite(size)||size<=0||size>12*1024*1024)return response(400,{error:"Dimensione foto non consentita"});
    const currentYear=new Date().getUTCFullYear();
    const safeYear=Number.isInteger(Number(year))&&Number(year)>=2000&&Number(year)<=currentYear+1?String(Number(year)):String(currentYear);
    const safeCategory=allowedCategories.has(category)?category:"altro";
    const cleanName=safeSegment(fileName.replace(/\.webp$/i,""),"foto")+".webp";
    const key=`media/${safeYear}/${safeCategory}/${cleanName}`;
    const client=new S3Client({region:"auto",endpoint:`https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,credentials:{accessKeyId:process.env.R2_ACCESS_KEY_ID,secretAccessKey:process.env.R2_SECRET_ACCESS_KEY}});
    const uploadUrl=await getSignedUrl(client,new PutObjectCommand({Bucket:process.env.R2_BUCKET,Key:key,ContentType:"image/webp",ContentLength:size,CacheControl:"public, max-age=31536000, immutable"}),{expiresIn:300});
    return response(200,{uploadUrl,publicUrl:`${process.env.R2_PUBLIC_URL.replace(/\/$/,"")}/${key}`,key});
  }catch(error){
    return response(500,{error:"Impossibile preparare il caricamento della foto"});
  }
}
