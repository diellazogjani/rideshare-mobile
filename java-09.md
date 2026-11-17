# RideShare — Java 9

## Çfarë ndërtova
[Kete jave shtova mundesine qe perdoruesi te ruaje udhetimet e preferuara ne aplikacionin RideShare. Preferimet ruhen ne databazen Neon dhe mbeten edhe pas rifreskimit te faqes. Gjithashtu, shtova ndryshimin e gjendjes se butonit gjate ruajtjes, mesazhin e suksesit dhe trajtimin e gabimeve. Perdoruesi mund ta ruaje nje udhetim vetem nje here, pa krijuar kopje ne databaze.] Përshkruaj ndryshimin e kësaj jave me fjalët e tua.

## Provat që bëra
### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.
[Klikova butonin e preferimeve te udhetimi Fushë Kosove → AAB (ID 2). Ylli u mbush dhe numri i preferimeve ndryshoi nga 0 ne 1. Pas rifreskimit te faqes, udhetimi vazhdoi te shfaqej si i preferuar. Gjithashtu, kontrollova ne Neon dhe gjeta nje rresht per kete udhetim. Rezultati: Preferimi u ruajt me sukses dhe mbeti pas rifreskimit, ashtu si pritej.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.
[Aktivizova perkohesisht simulimin e gabimit ne server, ne menyre qe ruajtja te deshtonte para se te behej shkrimi ne databaze. Provova te ruaj udhetimin Prishtine → AAB (ID 1). Ylli u kthye ne gjendjen e meparshme, numri i preferimeve mbeti i njejte dhe u shfaq mesazhi "Nuk u ruajt. Provo perseri.". Kontrollova edhe Neon dhe nuk kishte rresht per kete prove. Me pas e caktivizova simulimin.
Rezultati: Aplikacioni nuk tregoi sukses te rreme dhe preferimi nuk u ruajt ne databaze gjate simulimit te gabimit.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.
[Klikova disa here shpejt butonin e preferimeve te udhetimi Lipjan → AAB (ID 3). Numri i preferimeve u rrit vetem nga 2 ne 3 dhe udhetimi u shfaq si i preferuar. Pastaj kontrollova ne Neon te tre udhetimet.

Rezultati: Per secilin udhetim u gjet vetem nje rresht ne tabelen preferimet. Nuk u krijuan kopje nga klikimet e perseritura.] Hapat, rezultati i pritur dhe çfarë ndodhi.

## Ku gjendet puna
[Skedaret kryesore qe u perdoren jane:

schema-java09.sql – krijimi i tabeles preferimet.
src/lib/preferimet.ts – leximi dhe ruajtja e preferimeve ne Neon.
src/app/actions-preferimet.ts – veprimi ne server dhe trajtimi i gabimeve.
src/components/ListaUdhetimeve.tsx – menaxhimi i gjendjes se preferimeve dhe numrit.
src/components/KartaUdhetimi.tsx – butoni per ruajtjen e udhetimit si te preferuar.
src/app/page.tsx – shfaqja e udhetimeve dhe preferimeve ne faqen kryesore.
Demonstrimi eshte realizuar lokalisht ne http://localhost:3000. Nuk kam link publik te demonstrimit.] Shëno skedarët kryesorë dhe linkun e demonstrimit nëse është publikuar.

## Çfarë mbetet për përmirësim
[Mund te shtohet mundesia qe perdoruesi t'i heqe udhetimet nga lista e preferimeve. Kjo nuk u implementua sepse detyra kryesore kerkonte vetem ruajtjen e udhetimeve si te preferuara.] Një kufizim ose gabim që vure re dhe hapi i ardhshëm.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Perdora AI vetem per te me shpjeguar kerkesat e profesorit per detyren Java 9.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.
