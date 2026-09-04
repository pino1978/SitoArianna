# Console contenuti

La console privata è disponibile su `/admin` e non modifica i componenti o gli stili del frontend pubblico.

## Configurazione Netlify Identity

1. Abilitare Identity dal progetto Netlify.
2. Impostare la registrazione su **Invite only**.
3. Invitare soltanto gli account nominativi autorizzati.

## Variabili protette

Configurare nelle variabili d'ambiente di Netlify:

- `GITHUB_CONTENT_TOKEN`: fine-grained token con accesso in scrittura ai contenuti del solo repository.
- `GITHUB_OWNER`: `pino1978` (opzionale, è il valore predefinito).
- `GITHUB_REPO`: `SitoArianna` (opzionale, è il valore predefinito).
- `GITHUB_BRANCH`: `main` (opzionale, è il valore predefinito).
- `R2_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET`
- `R2_PUBLIC_URL`: dominio pubblico del bucket, senza slash finale.

Le credenziali non devono essere inserite nel repository o nel browser.

## Sicurezza

Le funzioni accettano esclusivamente utenti autenticati da Netlify Identity. I file modificabili sono limitati lato server a `profile.json`, `results.json` e `media.json`. Le immagini vengono convertite nel browser in WebP, ridimensionate a massimo 2560 px e quindi caricate mediante URL temporaneo firmato.
