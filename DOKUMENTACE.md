# DiaVer Salon — dokumentace webu

Jednostránkový web salonu. Čisté HTML, CSS a JavaScript — žádný framework,
žádný build. Co je ve složce, to se nahraje na hosting.

- **Doména:** https://diaver.cz
- **Aktuální stav:** funkčně hotový, čeká na reálné fotky a kontakty (viz `TODO.md`)

---

## 1. Struktura souborů

```
diaver.cz/
├─ index.html          hlavní (a jediná) stránka
├─ 404.html            stránka pro neexistující adresy — má vlastní styl uvnitř
├─ css/style.css       veškerý vzhled
├─ js/main.js          veškeré chování
├─ favicon.svg         ikona v záložce prohlížeče
├─ robots.txt          pokyny pro vyhledávače
├─ sitemap.xml         mapa webu pro vyhledávače
└─ images/
   ├─ hero/            3 fotky na úvodní obrazovce
   ├─ tym/<jméno>/     portrét + ukázky prací každé členky týmu
   ├─ logo/            kresba loga (vodoznak v sekci O nás)
   └─ social/          ikona na plochu + náhled pro sdílení odkazu
```

**Na hosting nepatří:** `TODO.md`, `DOKUMENTACE.md`, `images/README.md`
a `images/logo/logo-kresba-original.jpg` (záloha ve vysokém rozlišení).

---

## 2. Sekce stránky

| Sekce | ID kotvy | Obsah |
|---|---|---|
| Hero | `#top` | 3 fotky vedle sebe (na mobilu pod sebou), každá vede na svou část ceníku |
| O nás | `#o-nas` | text + vodoznak loga na pozadí |
| Ceník | `#cenik` | 3 sloupce; jednotlivě `#cenik-kadernictvi`, `#cenik-vizaz`, `#cenik-kosmetika` |
| Tým | `#tym` | 4 karty — portrét, role, bio, telefon, 4 ukázky prací |
| Kontakty | `#kontakt` | adresa, otevírací doba, telefon, sítě, mapa, patička |

---

## 3. Jak upravit obsah

### Změnit ceny
V `index.html` najdi `<div class="price-panel"` a uvnitř řádky:
```html
<div class="price-row"><span>Dámský střih</span><span class="leader"></span><span class="amt">450 Kč</span></div>
```
Změň text v prvním `<span>` (název) a v `class="amt"` (cena). Nic dalšího není třeba.

### Změnit člena týmu
Sekce `<section class="sec" id="tym">`, každá osoba je jeden `<div class="team-card">`:
- `class="team-role"` — role pod fotkou
- `<h3>` — jméno
- `class="team-bio"` — krátký popis
- `class="team-tel"` — telefon (změň i v `href="tel:..."`)
- `class="team-thumbs"` — 4 ukázky prací

### Změnit kontakty
V sekci `id="kontakt"`. Adresa, otevírací doba a telefon jsou v `.contact-core`,
sítě v `.contact-social`, přímé kontakty na tým v `.contact-team-list`.

> ⚠️ Telefon a adresa jsou i ve strukturovaných datech v hlavičce `index.html`
> (blok `application/ld+json`). Při změně je uprav i tam, jinak bude Google
> zobrazovat starý údaj.

### Vyměnit fotky
Postup a doporučené rozměry jsou v `images/README.md`.

---

## 4. Jak to funguje uvnitř

### Barvy a písma
Vše je v `css/style.css` nahoře v bloku `:root` jako proměnné:

| Proměnná | Hodnota | Použití |
|---|---|---|
| `--ink` | `#17130F` | hlavní tmavé pozadí |
| `--ink-2` | `#1C1712` | o odstín světlejší pozadí (střídání sekcí) |
| `--ivory` | `#F3EAD9` | hlavní text |
| `--ivory-dim` | `#C9BEAC` | vedlejší text |
| `--gold` | `#C9A15B` | zlaté akcenty |
| `--gold-soft` | `#8C723F` | tlumené zlaté (popisky, linky) |

Písma: **Cormorant Garamond** (kurzíva, nadpisy) a **Jost** (běžný text),
obojí z Google Fonts.

### Animace při scrollování
Prvky s třídou `reveal` jsou na začátku neviditelné a naskočí, až se dostanou
do obrazovky. Třída `stagger` navíc rozjede potomky postupně za sebou.
Řídí to `IntersectionObserver` v `js/main.js`.

### Pozadí sekcí
Čtyři vrstvy, které se spouští při vstupu sekce do obrazovky:
- `.deco` — kreslené předměty (nůžky, hřeben…), které se „nakreslí“ a pak se pohupují
- `.wm` — vodoznak loga v sekci O nás
- `.glow` — měkké plovoucí záře
- `.orbit` — pomalu rotující kružnice
- `.dust` — poletující částice přes celou stránku

### Cookies a mapa
Mapa od Google se **nenačte, dokud návštěvník nesouhlasí** — do té doby je tam
náhled s adresou a tlačítkem. Díky tomu Google nedostane žádný požadavek
ani nenastaví cookies, takže je web v souladu s GDPR.

Volba se **záměrně nikam neukládá** a lišta se objeví při každé návštěvě znovu.
Odkaz „Nastavení cookies“ v patičce ji vyvolá kdykoli.

### Rok v patičce
`© 2026` se dopočítá ze systémového data. V HTML zůstává napsané `2026`
jako záloha pro případ vypnutého JavaScriptu.

---

## 5. Věci, které vypadají divně, ale mají důvod

Tohle jsou chyby, na které jsme narazili při stavbě. Kdyby někdo tyhle řádky
„uklidil“, chyby se vrátí.

| Kde | Co | Proč |
|---|---|---|
| `.wm` v CSS | `height:auto` | `<img>` má atribut `height="856"`, který by se jinak uplatnil jako CSS výška a logo by se svisle roztáhlo |
| `goToAnchor()` v JS | pozice se počítá přes `offsetTop`, ne `scrollIntoView` | reveal animace posouvají prvky přes `transform`, takže prohlížeč měří špatnou pozici a skok skončí o ~50 px výš, schovaný pod hlavičkou |
| reveal observer | `threshold: 0` | při vyšší hodnotě se u vysokých bloků (karty týmu na mobilu) nikdy nesejde dost plochy naráz a sekce zůstane prázdná |
| vodoznak loga | sleduje se rodičovská sekce, ne `.wm` | `.wm` má v základním stavu `clip-path`, kvůli kterému má nulovou plochu — observer by ho nikdy nenahlásil jako viditelný |
| mobilní hero | `min-height` + `flex-shrink:0` | s pouhým `height` se sloupce ve sloupcovém flexu smrskly a text prvního zmizel pod hlavičkou |
| mobilní hero | fotky bez šedého filtru | na dotyku není hover, takže by fotky zůstaly natrvalo šedé |
| `html` | `scroll-padding-top: 90px` | jinak kotvy končí schované pod fixní hlavičkou |
| `.nav::before` | tmavý přechod za hlavičkou | bez něj text menu zaniká na světlých místech hero fotek |
| mobilní menu | menu se zavře **před** skokem na kotvu | otevřené menu drží `overflow:hidden`, se kterým posun neproběhne |

---

## 6. Nasazení na hosting

1. Nahraj obsah složky (bez souborů zmíněných v kapitole 1) do kořene webu.
2. Zapni **HTTPS** a přesměruj `http` → `https`.
3. Zvol jednu variantu domény a druhou na ni přesměruj —
   web je nastavený na **`https://diaver.cz`** (bez `www`),
   takže `www.diaver.cz` má vést na `diaver.cz`.
4. Nastav `404.html` jako chybovou stránku.
5. Zapni gzip/brotli kompresi a cache pro `images/`, `css/` a `js/`.
6. Přihlas web do **Google Search Console** a odešli `sitemap.xml`.

### Když se změní doména
Přepiš ji na čtyřech místech:
- `index.html` — `<link rel="canonical">`, `og:url`, `og:image` a `"url"` ve strukturovaných datech
- `robots.txt` — řádek `Sitemap:`
- `sitemap.xml` — `<loc>`

---

## 7. Podporované prohlížeče

Chrome, Edge, Firefox a Safari v aktuálních verzích, desktop i mobil.
Otestováno na šířkách 360, 390, 834, 1280 a 1440 px.

Web funguje i bez JavaScriptu — jen se nespustí animace, mapa a mobilní menu.
Kdo má v systému zapnuté **„omezit pohyb“**, dostane web úplně bez animací.
