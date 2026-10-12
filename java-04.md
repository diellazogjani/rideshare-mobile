# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat [PLOTËSO].
Mos vendos DATABASE_URL, pamje të kredencialeve ose të dhëna reale.

## Çfarë ndërtova
[Ne kete projekt e kam zhvilluar aplikacionin RideShare me Next.js dhe TypeScript. E kam lidhur aplikacionin me databazen Neon, ku ruhen te dhenat e udhetimeve. Ne faqen kryesore shfaqen tri udhetime qe lexohen nga databaza. Kur klikohet Shiko detajet, hapet faqja ku shfaqen te dhenat e atij udhetimi. E kam shtuar edhe faqen per kerkesen e vendit, e cila per momentin eshte vetem simulim.] Shpjego si lista dhe detajet i lexojnë udhëtimet nga Neon.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
[Ne Neon SQL Editor e ndryshova oren e udhetimit me ID 2 nga 08:15 ne 08:25. Pasi e rifreskova faqen, ora 08:25 u shfaq te lista dhe te detajet e udhetimit. Pastaj e ktheva oren ne 08:15 dhe e rifreskova faqen perseri. Ora u kthye ne vleren e meparshme.] Ndryshova orën e ID 2 nga 08:15 në 08:25 në SQL Editor.
Shkruaj çfarë tregoi lista dhe çfarë treguan detajet pas rifreskimit.
Ktheje orën në 08:15 dhe provo përsëri.

### Prova 2: Lista bosh dhe rikthimi
[Te skedari udhetimet.ts e shtova perkohesisht WHERE false ne pyetjen SQL. Pas rifreskimit u shfaq mesazhi "Nuk ka udhetime per momentin.". Pastaj e hoqa WHERE false, e ruajta skedarin dhe i rifreskova faqen. Tri kartat u shfaqen perseri.] Shtova WHERE false vetëm te pyetja e lexoUdhetimet.
Shkruaj mesazhin që u shfaq. Hoqe WHERE false dhe u kthyen tri kartat?

### Prova 3: Lidhja mungon, rikthimi dhe siguria
[Ne skedarin .env.local e ndryshova perkohesisht emrin e DATABASE_URL ne DATABASE_URL_PA_TEST. Pas rinisjes se aplikacionit, u shfaq mesazhi "Nuk u lidhëm me databazën. Provo përsëri.". Pastaj e ktheva emrin ne DATABASE_URL, e rinisa aplikacionin dhe tri kartat u shfaqen perseri. Kjo tregon se aplikacioni funksionon kur lidhja me databazen eshte e konfiguruar.
Skedarin .env.local nuk duhet ta publikoj ne GitHub, sepse permban te dhena sekrete te lidhjes me databazen.] Ndryshova përkohësisht emrin DATABASE_URL në .env.local,
rinisa serverin dhe shënova mesazhin. Riktheva emrin dhe rinisa serverin.
Shkruaj a punoi sërish; a mungon .env.local në listën e GitHub Desktop?

## Ku gjendet puna
[Projekti gjendet ne repository rideshare-mobile, ndersa aplikacioni eshte ne folderin aplikacioni.
Skedaret kryesore qe kam perdorur jane:
schema.sql per krijimin e tabeles ne databaze.
src/lib/db.ts per lidhjen me databazen Neon.
src/lib/udhetimet.ts per leximin e udhetimeve.
src/app/page.tsx per listen e udhetimeve.
src/components/KartaUdhetimi.tsx per kartat e udhetimeve.
src/app/udhetimi/[id]/page.tsx per detajet e udhetimit.
src/app/udhetimi/[id]/kerkesa/page.tsx per kerkesen e vendit.

Linku i repository-t: https://github.com/diellazogjani/rideshare-mobile
Linku i aplikacionit ne Vercel: https://rideshare-mobile-s6jw.vercel.app ]
 Shëno schema.sql, skedarët që ndryshove dhe linkun e repository-t.
Nëse punon në Vercel, shto linkun e aplikacionit (opsional këtë javë).

## Çfarë mbetet për përmirësim
[Aplikacioni per momentin nuk ben rezervime reale. Kerkesa per vend eshte vetem simulim dhe shfaqet si "Ne pritje". Ne te ardhmen mund te shtoj mundesine qe kerkesat te ruhen ne databaze dhe te kontrollohen vendet e lira.] Një kufizim ose gabim dhe hapi yt i ardhshëm.
Kërkesa “Në pritje” mbetet simulim; nuk ka rezervim real.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Gjate punes ne projekt, AI me ndihmoi vetem me disa sqarime rreth gabimeve ne kod dhe komandave ne terminal. Vete e krijova strukturen e projektit, i organizova skedaret, i provova faqet ne browser, kontrollova tri kartat e udhetimeve, ndryshova oren ne databaze dhe verifikova qe ndryshimi te shfaqej ne liste dhe ne detaje. Gjithashtu e testova listen bosh dhe e kontrollova rikthimin e te dhenave.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.
