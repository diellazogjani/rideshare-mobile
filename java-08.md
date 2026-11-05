# RideShare — Java 8

## Çfarë ndërtova
[Kete jave shtova mundesine qe perdoruesi ta zgjedhe dhe konfirmoje vendtakimin manualisht ose te kerkoje vendndodhjen permes telefonit. Kerkimi i lokacionit fillon vetem pasi perdoruesi klikon butonin perkates.
U shtuan gjendjet e lokacionit: idle, loading, success, denied, timeout dhe unavailable. Kur merret pozicioni, shfaqet saktesia ne metra. Aplikacioni nuk e cakton automatikisht emrin e vendit nga koordinatat, prandaj perdoruesi mund ta shkruaje vendtakimin vete.] Përshkruaj ndryshimin e kësaj jave me fjalët e tua.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
[Hapat: Hapa faqen /java-08-test pa klikuar butonin e lokacionit.
Pritshmeria: Shfletuesi nuk duhet te kerkoje leje per lokacion pa veprimin e perdoruesit.
Vezhgimi: Faqja u hap dhe kerkesa per lokacion nuk u shfaq. Kerkimi filloi vetem pasi klikova butonin.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
[Hapat: Klikova butonin per perdorimin e vendndodhjes dhe refuzova lejen ne shfletues.
Pritshmeria: Te shfaqet mesazhi i refuzimit dhe perdoruesi te kete mundesi ta shkruaje vendtakimin manualisht.
Vezhgimi: U shfaq mesazhi i refuzimit dhe fusha per vendtakimin mbeti e perdorshme.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
[Hapat: Kontrollova kodin dhe raportin perpara publikimit, duke mos vendosur koordinata ose adrese reale ne to.
Pritshmeria: Ne GitHub te mos publikohen koordinata ose adresa personale.
Vezhgimi: Ne raport nuk kam vendosur koordinata ose adrese reale. Komponenti shfaq vetem saktesine ne metra dhe nuk e shfaq pozicionin si adrese.] Hapat, rezultati i pritur dhe çfarë ndodhi.

## Ku gjendet puna
[Skedaret kryesore jane:
aplikacioni/src/components/Vendtakimi.tsx – komponenti per zgjedhjen dhe konfirmimin e vendtakimit.
aplikacioni/src/app/udhetimi/[id]/page.tsx – faqja e detajeve te udhetimit.
aplikacioni/src/app/java-08-test/page.tsx – faqja e testimit me te dhena lokale.
mobile-week08.json – konfigurimi i faqes se testimit.
java-08.md – raporti i kesaj jave.
Faqja e testimit gjendet te /java-08-test kur aplikacioni eshte duke punuar lokalisht. Nuk kam vendosur link publik demonstrimi.] Shëno skedarët kryesorë dhe linkun e demonstrimit nëse është publikuar.

## Çfarë mbetet për përmirësim
[Vendtakimi ruhet vetem ne gjendjen lokale te faqes. Ai nuk dergohet te shoferi dhe mund te humbet pas rifreskimit te faqes. Ne te ardhmen mund te shtohet ruajtja dhe komunikimi i vendtakimit me shoferin.v] Një kufizim ose gabim që vure re dhe hapi i ardhshëm.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[E perdora AI vetem per me ma shpjegu se qka ka kerku profesori ne kete detyre dhe me i kuptu kerkesat. Pjesen tjeter te punes e realizova vete.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.

## Prova me një hyrje të re
[Hyrja qe provova: Bashke me kolegun shkrova "Parkingu" pasi e kishim konfirmuar "Biblioteka", por nuk klikuam butonin e konfirmimit.
Parashikimi im para klikimit: Mendova se vendtakimi i konfirmuar do te mbetej "Biblioteka".
Cfare pashe realisht: Vendtakimi i konfirmuar mbeti "Biblioteka", edhe pse ne fushe shkruhej "Parkingu".
Skedari dhe funksioni qe e shpjegojne: Vendtakimi.tsx, funksioni konfirmoVendtakimin().
Cfare kuptova ose korrigjova: Kuptova se vendtakimi ndryshon vetem kur klikohet butoni i konfirmimit.

Kete pjese e shpjegoj ne klase. Kontrolli automatik nuk verifikon vertetesine e proves] Zgjidh me kolegun njërën: tekst me vetëm hapësira ose ndryshim vendtakimi pa konfirmim.
- Hyrja që provova:
- Parashikimi im para klikimit:
- Çfarë pashë realisht:
- Skedari dhe funksioni që e shpjegojnë:
- Çfarë kuptova ose korrigjova:

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.
