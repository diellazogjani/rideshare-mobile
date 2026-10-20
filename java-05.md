# RideShare — Java 5 · Hyrja dhe lejet

Ruaje si java-05.md pranë README, jashtë aplikacioni/.
Hiqi shenjat . Mos vendos sekrete, email ose pamje të kredencialeve.

## Çfarë ndërtova
[Ne kete jave e zhvillova hyrjen me GitHub dhe kontrollin e lejeve ne aplikacionin RideShare.
Identiteti tregon se cili perdorues ka hyre ne aplikacion. Roli tregon se cfare mund te beje perdoruesi, per shembull nese eshte shofer apo udhetar. Pronesia tregon se cilit shofer i perket nje udhetim.
Aplikacioni perdor GitHub per hyrje, ndersa te dhenat e profileve dhe udhetimeve ruhen ne Neon. Serveri e kontrollon rolin dhe pronesine para se te lejoje ndryshimin e ores se udhetimit.] Shpjego dallimin mes identitetit, rolit dhe pronësisë në aplikacionin tënd.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
[Hapa panelin /panel dhe perdora hyrjen me GitHub. Pas hyrjes u shfaq emri im dhe roli shofer. Pas rifreskimit, te dhenat e profilit vazhduan te shfaqeshin.
Pas daljes, aplikacioni duhet te kerkoje hyrje perseri para se te shfaqe profilin e perdoruesit.] Hapa /panel pa hyrë, hyra me GitHub, rifreskova, pastaj dola.
Shkruaj çfarë shfaqej para hyrjes, pas rifreskimit dhe pas daljes.

### Prova 2: Shoferi ndryshon udhëtimin e vet
[Hyrja si shofer funksionoi dhe formulari per ndryshimin e ores u shfaq ne panel. E ndryshova oren e udhetimit me ID 2 nga 08:15 ne 08:25. Paneli shfaqi mesazhin se ora u ruajt me sukses.
Ne Neon e kontrollova qe ndryshimi ishte ruajtur. Pastaj e riktheva oren ne 08:15 dhe e verifikova perseri ne databaze.
] Si shofer i ID 2 e ndryshova orën në 08:25.
Shkruaj çfarë u shfaq në panel, listë, detaje dhe SQL Editor. Rikthe 08:15.

### Prova 3: Veprimi pa leje refuzohet
[Ne formular ndryshova vleren e ID-se nga 2 ne 1 per te provuar ndryshimin e udhetimit te nje shoferi tjeter.
Pas klikimit ne butonin Ruaj, aplikacioni shfaqi mesazhin: "Nuk ke leje per kete udhetim. Ora nuk ndryshoi."
Ne Neon kontrollova te dhenat e udhetimeve. Udhetimi me ID 1, nga Prishtina ne AAB, e ruajti oren 08:00. Udhetimi me ID 2, nga Fushe Kosova ne AAB, e ruajti oren 08:15.
Kjo prove tregoi se serveri e refuzon ndryshimin e nje udhetimi qe nuk i perket shoferit te kycur.] Nga formulari i hapur ndryshova ID në 1 dhe provova Ruaj.
Shkruaj mesazhin e refuzimit dhe si verifikove në Neon që ID 1 mbeti 08:00.
Provat shtesë me heqjen e rolit dhe formularin e vjetër janë opsionale pas dorëzimit.

## Ku gjendet puna
[Repository: https://github.com/diellazogjani/rideshare-mobile
Skedaret e Java 5 perfshijne konfigurimin e hyrjes me GitHub, rrugen API te autentikimit, komponentin e hyrjes dhe daljes, kontrollin e roleve dhe pronesise, panelin dhe veprimin per ndryshimin e ores.
Raporti java-05.md gjendet prane README.md, jashte dosjes aplikacioni/.] Linku i repository-t dhe skedarët e rinj; demo në Vercel nëse e publikove.

## Çfarë mbetet për përmirësim
[Kerkesa per vend eshte ende simulim. Ne te ardhmen do te shtoja nje funksion qe perdoruesi te kerkoje udhetime sipas nisjes dhe destinacionit, si dhe nje menyre me te plote per te menaxhuar rezervimet.] Një kufizim: kërkesa për vend është ende simulim; çfarë do të shtoje më pas?

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Perdora AI vetem per disa sqarime gjate punes. Pjesen tjeter e testova dhe e kontrollova vete.] Çfarë ndihme more dhe çfarë provove vetë, ose: Nuk përdora AI.
