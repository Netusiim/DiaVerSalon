# TODO — co zbývá před nasazením na hosting

Stav k 11. 9. 2026. Web je funkčně hotový (hero, O nás, ceník, tým s galerií, kontakty),
responzivní od 360 px po desktop, bez chyb v konzoli. Níže je vše, co ho dostane
do produkčního stavu — seřazeno podle toho, co je blokující.

---

## 📌 PLÁN NA PŘÍŠTĚ — finalizace

Postup, na kterém jsme se domluvili:

1. **Naplnit web živými daty** — reálné fotky, telefony, jména, bio texty
   (viz sekce 1 a 2 níže). Tohle je největší kus práce a blokuje spuštění.
2. **Doladit detaily**, které při plnění reálným obsahem vyplavou
   (délky textů, ořezy fotek, rozestupy).
3. ~~Rozdělit kód na `index.html` + `css/style.css` + `js/main.js`~~ — **hotovo 10. 9.**
4. **Úklid před nahráním** (sekce 6) — smazat komentáře a nepotřebné soubory.
5. **Nahrát na hosting** (sekce 7) a ověřit přesměrování.

**Co ještě potřebuju od tebe:**
- ukázky prací Kateřiny (4 ks) → `images/tym/katerina/`
- portrét + ukázky prací Petry Pošmurné → `images/tym/petra/`
- přístupy k hostingu / cílovou doménu
- potvrzení e-mailu salonu

---

## ✅ HOTOVO (6. 9. 2026)

- **SEO metadata** — title, description, Open Graph (7 tagů), canonical, theme-color, robots.
- **Strukturovaná data** JSON-LD `BeautySalon` (adresa, telefon, otevírací doba, služby, sociální sítě).
- **`<h1>`** — skrytý pro čtečky a vyhledávače, doplněn do hera.
- **Favicon** `favicon.svg`.
- **Rozměry obrázků** — `width`/`height` u všech 21 obrázků (proti poskakování layoutu).
- **Preload hero fotky** + `preconnect` na Pexels.
- **GDPR modál** a **modál zásad cookies** — vyskakovací okna z patičky (zavření křížkem,
  klikem mimo i Escapem, blokují scroll pozadí).
- **Cookie lišta + mapa v souladu s GDPR** — dokud návštěvník nesouhlasí, neodejde na
  Google ani jeden požadavek (ověřeno měřením). Po „Přijmout“ se mapa načte,
  po „Odmítnout“ zůstane náhled s adresou a mapu lze zobrazit ručně tlačítkem.
  Volba se záměrně neukládá, lišta se ptá při každé návštěvě znovu.
- **`robots.txt`**, **`sitemap.xml`**, **stránka `404.html`**.
- **Složková struktura pro fotky** — `images/` s podsložkami a návodem v `images/README.md`.
- **Portréty 3 členek týmu** — Hana, Gabriela a Kateřina mají reálné fotky
  (`images/tym/*/portret.jpg`).
- **Automatický rok v patičce** — `© 2026` se drží systémového data, nemusí se
  přepisovat ručně. V HTML zůstává `2026` jako záloha, kdyby návštěvník neměl JS.

## ✅ HOTOVO (10. 9. 2026)

- **Rozdělení kódu** na `index.html` + `css/style.css` + `js/main.js`.
- **Doména `diaver.cz`** nastavená v canonical, `og:url`, strukturovaných datech,
  `robots.txt` i `sitemap.xml`.
- **`apple-touch-icon.png`** a **`og-image.jpg`** vygenerované z brandingu webu.
- **Logo optimalizované** — 294 kB → 65 kB (WebP, s JPEG zálohou).
- **Focus trap** v galerii týmu.
- **Úklid** — komentáře pročištěné (CSS 47→8, JS 23→5, vysvětlení v `DOKUMENTACE.md` kap. 5), `Koncepty/` přesunuty do `!_Cloude/Koncepty_archiv_diaver/`.
- **`DOKUMENTACE.md`** — jak web upravovat a jak funguje uvnitř.

---

## ✅ HOTOVO (11. 9. 2026) — živá data

- **Telefony** — Hana 722 078 829, Gabriela 736 460 610, Kateřina 733 459 809.
  V kartách týmu i v kontaktech. Žádný placeholder nezbývá.
- **Kosmetička Petra Pošmurná** — 732 800 461, karta i kontakt. Portrét a ukázky prací
  zatím stockové (viz níže).
- **Bio texty** — ponechané podle schválení.
- **Ukázky prací Hany a Gabriely** — vybrané 4 + 4 z dodaných fotek
  (`images/tym/*/prace-01..04.jpg`), nepoužité jsou v podsložkách `nepouzite/`.
- **Hero fotky** — stažené do projektu (`images/hero/`, WebP + JPEG), pro kadeřnictví
  vybraná jiná fotka. Web už nezávisí na Pexels.
- **`.htaccess`** — připravený pro Český hosting: přesměrování `http → https`
  a `www → bez www`, stránka 404, cache, bezpečnostní hlavičky.

---

## 🔴 BLOKUJÍCÍ — bez toho web nenasazovat

### 1. Zbývající obsah
- [x] ~~Portrét a ukázky prací Petry~~ — hotovo. Portrét + 4 ukázky nahrané a napojené
      (`images/tym/petra/`).
- [x] ~~Bio Petry~~ — hotovo, krátký popis v třetí osobě (kosmetika, laminace obočí, lash lifting).
- [ ] **Ukázky prací Kateřiny** — 4 miniatury, zatím stock.
      Nahrát do `images/tym/katerina/` jako `prace-01.jpg` až `prace-04.jpg`.
- [x] ~~Ceník — Kadeřnictví a Vizáž~~ — hotovo, aktualizováno podle nového ceníku.
      Dvě věci k potvrzení: (1) „Cestovné (nad 15 km od Kladna) — 7 Kč/km" — ověřit,
      že je to formulováno správně (nejasné, jestli prvních 15 km je zdarmá, nebo
      jinak); (2) pořadí kategorií ve Vizáži je teď Společenské akce → Svatební servis
      (dřív opačně) — pokud má být svatební první, stačí říct a prohodím.
- [x] ~~Ceník — Kosmetika~~ — hotovo, nahrazeno ceníkem „Cosmetics by Peťule"
      (kosmetické ošetření, ošetření řas a obočí, samostatné služby).
- [ ] **Přístupy k hostingu / cílová doména** — dodáš.
- [ ] **E-mail salonu** — v GDPR textu a strukturovaných datech je
      `DiaVer.salon@gmail.com` (ze starého webu). Potvrdit, že je platný.

### 2. Fotky — nepovinné vylepšení
- [ ] **Hero fotky z vlastního salonu** — teď jsou stockové (stažené lokálně, fungují).
      Pokud budou vlastní, přepsat soubory v `images/hero/`.

### 3. Právní náležitosti — zbývá doplnit obsah
- [ ] **Zkontrolovat texty GDPR a cookies** právníkem / majitelkou. Šablona je
      vyplněná reálnými údaji salonu, ale je potřeba potvrdit, že sedí
      (zejména jaké údaje se sbírají a jak dlouho se drží).
- [ ] Pokud přibude analytika nebo rezervační formulář, rozšířit o ně cookie lištu
      i zásady (teď je popsaný stav „jen technické cookies + mapa“).

---

## 🟠 DŮLEŽITÉ — udělat před spuštěním

### 4. Doplnit chybějící soubory a doménu
- [x] ~~`images/social/apple-touch-icon.png`~~ — hotovo (180×180, 4 kB, zlaté „D“ na tmavém).
- [x] ~~`images/social/og-image.jpg`~~ — hotovo (1200×630, 18 kB, logo + „Kadeřnictví ·
      Vizáž · Kosmetika“ + Nové Strašecí). Vygenerované z brandingu webu — až budou
      reálné fotky, dá se nahradit fotkou salonu.
- [x] ~~Přepsat doménu~~ — hotovo, web je nastavený na `https://diaver.cz` (bez www).

### 5. Rychlost načítání
- [ ] **Optimalizovat fotky** — převést do WebP/AVIF, zmenšit na reálně potřebné
      rozlišení, dodat `srcset` pro mobil vs. desktop.
- [x] ~~Logo mělo 294 kB~~ — hotovo. Zmenšeno z 1317 px na 800 px (na webu se zobrazuje
      max 520 px) a převedeno do WebP: **294 kB → 65 kB, úspora 77 %**. Web nabízí
      WebP a JPEG (76 kB) jako zálohu pro starší prohlížeče. Originál zůstal jako
      `logo-kresba-original.jpg`, kdyby byl potřeba ve větším rozlišení.
- [ ] `images/logo/logo-plny.jpg` (591 kB) se nepoužívá vůbec — buď smazat, nebo využít.
- [ ] **Fonty** — teď z Google Fonts. Zvážit self-hosting (rychlejší + čistší z pohledu GDPR).

---

## 🟡 DOPORUČENÉ — kvalita a provoz

### 6. Úklid před nahráním — poslední krok před spuštěním
Udělat až **po** doplnění všech fotek a **těsně před** nahráním. Cíl: na hosting jde
jen to, co web potřebuje k běhu, a kód je bez komentářů.

**a) Komentáře — přesunout velké do dokumentace, zbytek smazat**
- [ ] `js/main.js` — dva velké bloky vysvětlují *proč* (skok na kotvu přes `offsetTop`,
      neukládání souhlasu s cookies). Obsah přenést do `DOKUMENTACE.md` kap. 5,
      pokud tam ještě není, pak z kódu smazat. Ostatní 3 jsou jen dělicí nadpisy → smazat.
- [ ] `css/style.css` — 8 dělicích nadpisů sekcí (`/* ---- header ---- */` apod.) → smazat.
- [ ] `index.html` — 3 komentáře (preload hero, mapa po souhlasu, rok v patičce)
      → obsah je už v dokumentaci, smazat.
- [ ] `.htaccess` — komentáře nechat, ten soubor je i návod pro správce hostingu.

**b) Soubory a složky — smazat z produkční kopie**
- [ ] `TODO.md`, `DOKUMENTACE.md`, `images/README.md` — interní, na web nepatří.
- [ ] `images/logo/logo-kresba-original.jpg` (294 kB) — záloha v plném rozlišení,
      web používá zmenšenou verzi. Uložit mimo projekt.
- [ ] `images/logo/logo-plny.jpg` (591 kB) — nepoužívá se. Uložit mimo projekt.
- [ ] `images/tym/*/nepouzite/` — 8 fotek, které se nevybraly. Uložit mimo projekt.
- [ ] `images/tym/*/.gitkeep` — prázdné pomocné soubory, smazat.
- [ ] Po úklidu zkontrolovat, že ve složce zbylo přesně tohle:
      ```
      .htaccess  index.html  404.html  favicon.svg  robots.txt  sitemap.xml
      css/style.css  js/main.js
      images/hero/ (6)  images/logo/ (2)  images/social/ (2)
      images/tym/hana/ (5)  gabriela/ (5)  katerina/ (5)  petra/ (5)
      ```

**c) Než se smaže, uložit archiv**
- [ ] Celou složku před úklidem zkopírovat jako zálohu (např. `Claude_final_last_ZALOHA`),
      ať jsou originály fotek, dokumentace i TODO k dispozici, kdyby se web dál rozvíjel.

**d) Po úklidu ověřit**
- [ ] Otevřít `index.html` v prohlížeči — vše se zobrazuje, žádné rozbité obrázky,
      konzole bez chyb. (Smazané komentáře nemají na funkci vliv, ale kontrola je zadarmo.)

### 7. Hosting a nasazení
Hosting je **Český hosting** (cesky-hosting.cz), zjištěno z DNS. Doména už na něj míří.
Ověřeno, co tam už je: ✅ HTTPS funguje, ✅ gzip zapnutý, ✅ cache zapnutá.
Chybí jen dvě přesměrování — obě řeší připravený `.htaccess`.
- [ ] **Nahrát soubory** na hosting (FTP nebo správce souborů v administraci)
      do kořene webu — včetně `.htaccess` (je skrytý, pozor ať se nezapomene).
- [ ] Po nahrání ověřit, že `http://diaver.cz` i `www.diaver.cz` skočí
      na `https://diaver.cz`.

### 8. Kontrola před spuštěním
- [ ] Otestovat na reálných zařízeních — iPhone (Safari), Android (Chrome).
      Pozor hlavně na `backdrop-filter` a `100svh` v starším Safari.
- [ ] Projet přes Google PageSpeed Insights / Lighthouse.
- [ ] Ověřit všechny odkazy — Instagram, Facebook, Google Maps, `tel:` odkazy.
- [ ] Zkontrolovat texty na překlepy (nechat přečíst někoho ze salonu).

### 9. SEO po spuštění
Na webu samotném je technické SEO hotové (title, popisy, Open Graph, strukturovaná
data, sitemap, robots.txt — viz ✅ HOTOVO výše). Tohle se dělá **až po nahrání**
na ostrou doménu a mimo kód webu:
- [ ] **Google Search Console** — ověřit vlastnictví domény, odeslat `sitemap.xml`,
      zkontrolovat, že se stránka začala indexovat (do pár dní).
- [ ] **Bing Webmaster Tools** — totéž, zabere 5 minut a přidá viditelnost v Seznamu/Bingu.
- [ ] **Google Rich Results Test** — ověřit, že strukturovaná data (`BeautySalon`)
      projdou bez chyb a Google je umí zobrazit v mapách/vyhledávání.
- [ ] **Google Business Profile** — založit/propojit s webem, ať sedí adresa,
      telefon a otevírací doba na všech místech stejně (NAP konzistence).
- [ ] **Firemní profily** — Seznam.cz Firmy, Mapy.cz, Facebook a Instagram ať mají
      odkaz zpět na `diaver.cz` — pomáhá to i hodnocení webu ve vyhledávání.
- [ ] **Rozšířit ceny do strukturovaných dat** (volitelné) — teď `makesOffer`
      v `index.html` jen jmenuje služby bez cen; přidáním konkrétních cen z ceníku
      může Google zobrazovat i cenu přímo ve výsledcích hledání.
- [ ] Po pár týdnech zkontrolovat Search Console — jestli nejsou chyby v indexaci
      a jak si stránka vede na klíčová slova typu „kadeřnictví Nové Strašecí“.

### 10. Provoz
- [ ] **Analytika** — návštěvnost (Google Analytics 4 nebo Plausible/Matomo,
      které nepotřebují cookie souhlas).
- [ ] Zálohování a postup, jak web aktualizovat (kdo mění ceník, fotky…).

---

## 🟢 NEPOVINNÉ — nápady do budoucna

- [ ] Online rezervace / objednávkový formulář.
- [ ] Sekce s recenzemi z Google.
- [ ] Galerie prací jako samostatná stránka.
- [x] ~~Focus trap v lightboxu~~ — hotovo, tabulátor cykluje mezi tlačítky galerie
      a nepropadne na stránku pod ní.
