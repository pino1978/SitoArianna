import media from "../data/media.json";
import heroImage from "../assets/images/hero-ary14.png";
import profileImage from "../assets/images/Ying_profile.png";
import profileHero from "../assets/images/profile-hero-arrival-desktop-v1.webp";
import profileJourney from "../assets/images/profile-journey-context-v1.webp";
import profileGuide from "../assets/images/profile-guide-real-v1.webp";
import profileTraining from "../assets/images/profile-training-context-v1.webp";
import profileObjective from "../assets/images/profile-objective-context-v1.webp";
import yingHero from "../assets/images/ying-hero-wide.png";
import yingPortrait from "../assets/images/Ying_profile.png";
import yingPanorama from "../assets/images/ying_panoramica.png";

const SITE = "https://www.ariannamilano.it";

const xml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

const assetPath = (asset) => typeof asset === "string" ? asset : asset?.src || "";
const absolute = (value) => {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value, SITE).href;
};

const youtubeId = (url = "") => url.match(/(?:shorts\/|youtu\.be\/|[?&]v=)([A-Za-z0-9_-]{11})/)?.[1] || "";

const imageNode = ({ loc, title, caption }) => loc ? `
    <image:image>
      <image:loc>${xml(absolute(loc))}</image:loc>
      ${title ? `<image:title>${xml(title)}</image:title>` : ""}
      ${caption ? `<image:caption>${xml(caption)}</image:caption>` : ""}
    </image:image>` : "";

const videoNode = (item) => {
  const id = youtubeId(item.urlYouTube);
  if (!id) return "";
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const player = `https://www.youtube.com/embed/${id}`;
  const description = [item.titolo, item.dettaglio, "Video del percorso agonistico di Arianna Milano nel Sanda."].filter(Boolean).join(" · ");
  return `
    <video:video>
      <video:thumbnail_loc>${xml(thumbnail)}</video:thumbnail_loc>
      <video:title>${xml(item.titolo || "Video Sanda di Arianna Milano")}</video:title>
      <video:description>${xml(description)}</video:description>
      <video:player_loc allow_embed="yes">${xml(player)}</video:player_loc>
      ${item.data ? `<video:publication_date>${xml(item.data)}</video:publication_date>` : ""}
      <video:family_friendly>yes</video:family_friendly>
    </video:video>`;
};

const visiblePhotos = media.filter((item) => item.tipo === "foto" && item.visibile && !item.isPlaceholder && item.url);
const visibleVideos = media.filter((item) => item.tipo === "video" && item.visibile && youtubeId(item.urlYouTube));
const lastmod = new Date().toISOString().slice(0, 10);

const entries = [
  {
    loc: `${SITE}/`,
    images: [
      { loc: assetPath(heroImage), title: "Arianna Milano · atleta di Sanda e Kung Fu", caption: "Hero del sito ufficiale di Arianna Milano, giovane atleta agonista di Sanda." },
      { loc: assetPath(profileImage), title: "Arianna Milano", caption: "Ritratto sportivo di Arianna Milano." }
    ],
    videos: visibleVideos.filter((item) => item.inEvidenza)
  },
  {
    loc: `${SITE}/profilo/`,
    images: [
      { loc: assetPath(profileHero), title: "Profilo atleta · Arianna Milano", caption: "Il percorso sportivo di Arianna Milano nel Sanda." },
      { loc: assetPath(profileJourney), title: "Percorso sportivo", caption: "Preparazione e crescita sportiva di Arianna Milano." },
      { loc: assetPath(profileGuide), title: "Maestro Eduardo Mazzara e Arianna Milano", caption: "La guida tecnica nel percorso agonistico di Arianna Milano." },
      { loc: assetPath(profileTraining), title: "Allenamento Sanda", caption: "Allenamento tecnico di Sanda." },
      { loc: assetPath(profileObjective), title: "Obiettivi agonistici", caption: "Preparazione alle competizioni di Sanda." }
    ]
  },
  {
    loc: `${SITE}/risultati/`,
    images: [
      { loc: "/images/file_0000000018808210aee456d67f26cba1.png?v=8", title: "Risultati agonistici di Arianna Milano", caption: "Medaglie e risultati delle competizioni di Sanda di Arianna Milano." }
    ]
  },
  {
    loc: `${SITE}/media/`,
    images: visiblePhotos.map((item) => ({
      loc: item.url,
      title: item.titolo || "Foto Sanda di Arianna Milano",
      caption: item.testoAlternativo || [item.titolo, item.dettaglio, "Arianna Milano"].filter(Boolean).join(" · ")
    })),
    videos: visibleVideos
  },
  {
    loc: `${SITE}/ying/`,
    images: [
      { loc: assetPath(yingHero), title: "Yīng · Aquila", caption: "Yīng, il nome sportivo scelto da Arianna Milano." },
      { loc: assetPath(yingPortrait), title: "Arianna Milano · Yīng", caption: "Arianna Milano osserva il tatami prima dell'allenamento di Sanda." },
      { loc: assetPath(yingPanorama), title: "Essere Yīng", caption: "L'aquila come simbolo di attenzione, crescita e determinazione." }
    ]
  }
];

export async function GET() {
  const body = entries.map((entry) => `
  <url>
    <loc>${xml(entry.loc)}</loc>
    <lastmod>${lastmod}</lastmod>${(entry.images || []).map(imageNode).join("")}${(entry.videos || []).map(videoNode).join("")}
  </url>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${body}
</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
