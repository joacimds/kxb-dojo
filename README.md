# KXB Dojo

Velkommen til KXB Faggruppens hjemmeside - din digitale hub for alt relatert til faggruppen, fagkveld og dojo.

## Oppsett

Nettsiden er satt opp med:

- Next.js (v.13.4.12)
- TypeScript (v. 5.1.6)
- Sanity
- Tailwind CSS
- Vercel

Den er deployet med Vercel og ligger under -> https://kxb-dojo.vercel.app/

Sanity Studio er embedded i løsningen, slik at Next og Sanity Studio ligger under én URL.
Det vil med andre ord si at man har tilgang til Sanity Studio for prosjektet ved å gå inn på https://kxb-dojo.vercel.app/admin

## Starte å jobbe på prosjektet

Fra root-mappen **..\kxb-dojo**

1. Starte med å installere pakker og dependencies for frontenden.

```bash
cd kxb-dojo-frontend
npm install
```

2. Tilbake til root-mappen

```bash
cd ..
```

3. Gjør det samme for Sanity-biten av prosjektet.

```bash
cd kxb-dojo-studio
npm install
```

4. Tilbake til root-mappen

```bash
cd ..
```

5. Kjøre prosjektet lokalt

```bash
cd kxb-dojo-frontend
npm run dev
```

### Embedded Sanity Studio

Ettersom at Sanity Studio er embedded i løsningen, vil arbeidet stort sett gjøres i **..\kxb-dojo\kxb-dojo-frontend**, som f. eks:

- Schemas
- Funksjoner for å hente ut data fra Sanity.

For å få tilgang til Sanity Studio for prosjektet må du legges inn av admin under _Members_ på prosjektet med en e-mail.

## Lisens

[MIT](https://choosealicense.com/licenses/mit/)
