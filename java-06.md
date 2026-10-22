# RideShare — Java 6 · PWA dhe puna offline

Ruaje si java-06.md pranë README të repository-t, jashtë aplikacioni/.
Hiqi . Mos vendos sekrete, email ose fotografi kredencialesh.

## Çfarë ndërtova
[Ne kete detyre e pergatita aplikacionin RideShare per lexim offline. Shtova manifestin per emrin dhe ikonat e aplikacionit, si dhe Service Worker per ruajtjen e disa te dhenave ne cache.
Komponenti Pwa.tsx e regjistron Service Worker-in, ndersa layout.tsx e perfshin komponentin ne aplikacion. Lista publike e udhetimeve ruhet ne cache, ne menyre qe te mund te lexohet edhe kur nuk ka internet. Kopja offline mund te jete e vjeter dhe nuk konfirmon rezervime.] Shpjego çfarë bëjnë manifesti, service worker dhe kopja publike në pajisje.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
[E hapa aplikacionin ne http://localhost:3000. Te Chrome DevTools → Application → Service Workers kontrollova qe sw.js ishte aktiv.

Te Cache Storage kontrollova cache-n rideshare-public-v1. Aty u shfaqen keto skedare:

/offline.html

/icons/icon-192.png

/icons/icon-512.png

/api/udhetimet

Kjo tregoi se lista publike dhe skedaret per lexim offline ishin ruajtur. Instalimin ne telefon nuk e testova.] Shkruaj URL-në që hape, emrin dhe përmasat e ikonave që pe, si dhe nëse u ruajt lista. Nëse shfletuesi nuk ofroi instalim, shënoje.

### Prova 2: Pa internet dhe pas rifreskimit
[Te Chrome DevTools → Network aktivizova opsionin Offline. E hapa offline.html dhe e rifreskova faqen. U shfaqen tri udhetimet:

Prishtine → AAB, ora 08:00

Fushe Kosove → AAB, ora 08:15

Lipjan → AAB, ora 07:45

Kjo prove tregoi se faqja offline mund te hapet dhe te shfaqe listen e ruajtur. Kopja offline mund te jete e vjeter, prandaj nuk perdoret si konfirmim rezervimi.] Si e simulove ndërprerjen? A u hapën tri kartat pas rifreskimit? Çfarë kohe ruajtjeje dhe mesazhi pe? Pse nuk ishte konfirmim rezervimi?

### Prova 3: Lidhja rikthehet
[Ne Neon SQL Editor e ndryshova perkohesisht oren e udhetimit me ID 2 nga 08:15 ne 08:25. Komanda u ekzekutua pa gabime.
Pastaj e ktheva RideShare ne gjendjen online dhe e rifreskova faqen. Udhetimi me ID 2 u shfaq me oren 08:25, duke treguar se ndryshimi ishte marre nga serveri.
Ne fund, oren fillestare 08:15 e riktheva ne Neon dhe te kontrollova perseri ne aplikacion.] Shëno orën e vjetër dhe të renë të ID 2 në Neon, çfarë shfaqej offline dhe çfarë ndodhi pas Rifresko listën. Rikthe orën fillestare.

## Ku gjendet puna
[Repository i projektit:
https://github.com/diellazogjani/rideshare-mobile

Skedaret e perdorur per Java 6:
public/manifest.webmanifest
public/sw.js
public/offline.html
public/icons/icon-192.png
public/icons/icon-512.png
src/components/Pwa.tsx
src/app/layout.tsx

Aplikacionin e testova lokalisht ne http://localhost:3000.] Linku i repository-t, skedarët e shtuar dhe demo në Vercel nëse e ke publikuar.

## Çfarë mbetet për përmirësim
[Nese aplikacioni hapet pa internet dhe nuk ka kopje te ruajtur, lista nuk mund te merret nga serveri. Prandaj, aplikacioni duhet te hapet te pakten nje here me internet.
Lista offline mund te mos i kete ndryshimet me te fundit. Per rezervime duhet te perdoret serveri, sepse kopja lokale nuk garanton qe nje vend eshte ende i lire.] Çfarë ndodh në vizitën e parë pa kopje? Cili është kufizimi i leximit offline?

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Gjate punes e perdora AI-ne si ndihme per disa paqartesi dhe per kontrollimin e rezultateve. Pjeset e projektit i provova ne kompjuter dhe kontrollova qe funksionojne si duhet.] Çfarë ndihme more dhe çfarë provove vetë, ose: Nuk përdora AI.
