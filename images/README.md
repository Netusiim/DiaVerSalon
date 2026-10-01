# Fotky — kam co patří

Všechny fotky na webu jsou zatím **placeholdery z Pexels** a načítají se z internetu.
Až budou reálné fotky, stačí je nahrát do složek níže a v `index.html` přepsat
odkazy (najdeš je hledáním `images.pexels.com` — je jich 23).

**Pojmenování:** malá písmena, bez diakritiky a mezer, slova spojovat pomlčkou.
Např. `damsky-strih-01.jpg`, ne `Dámský střih (1).JPG`.

---

## 📁 hero/ — tři velké fotky na úvodní obrazovce

> Aktuálně jsou tu fotky ze stocku (Pexels), stažené do projektu — web už nezávisí
> na cizím serveru. Až budou fotky z vlastního salonu, stačí je přepsat.

| Soubor | Co má být na fotce |
|---|---|
| `kadernictvi.jpg` | práce s vlasy — stříhání, mytí, barvení |
| `vizaz.jpg` | líčení, make-up, detail obličeje |
| `kosmetika.jpg` | ošetření pleti, kosmetické ošetření |

- **Rozměr:** na šířku, ideálně 1600 × 2000 px (fotky jsou ve vysokých sloupcích)
- **Formát:** JPG nebo WebP, do 300 kB na fotku
- Fotky vypadají nejlépe tmavší a klidnější — web je přes ně ztmavuje a odbarvuje,
  barvu naplno ukáže až po najetí myší.

---

## 📁 tym/ — portréty a ukázky práce

Každá členka týmu má vlastní složku:

```
tym/hana/       tym/gabriela/       tym/katerina/       tym/petra/
```

Do každé patří (nepoužité fotky jsou v podsložce `nepouzite/`):

| Soubor | Co to je | Rozměr |
|---|---|---|
| `portret.jpg` | portrét do karty | 600 × 672 px (na výšku) |
| `prace-01.jpg` | 1. ukázka práce | 800 × 800 px (čtverec) |
| `prace-02.jpg` | 2. ukázka práce | 800 × 800 px |
| `prace-03.jpg` | 3. ukázka práce | 800 × 800 px |
| `prace-04.jpg` | 4. ukázka práce | 800 × 800 px |

- Ukázky práce se v kartě zobrazují jako malé čtverečky a po kliknutí se otevřou
  přes celou obrazovku — proto je nahrávej ve větším rozlišení (800 px stačí).
- Počet ukázek jde změnit, karta zvládne 3 až 5. Při jiném počtu je potřeba
  upravit i `index.html`.

---

## 📁 logo/

| Soubor | Použití |
|---|---|
| `logo-kresba.jpg` | kresba, která je jako vodoznak v pozadí sekce „O nás" |
| `logo-plny.jpg` | plné logo s nápisem — zatím se na webu nepoužívá |

⚠️ Obě loga jsou velká (294 kB a 591 kB). Jsou to perokresby, takže po převodu
do **SVG** nebo **WebP** klidně klesnou pod 20 kB a web se načte znatelně rychleji.

---

## 📁 social/ — obrázky pro sdílení a ikony

| Soubor | Použití | Rozměr |
|---|---|---|
| `og-image.jpg` | náhled při sdílení odkazu na Facebooku / WhatsAppu | 1200 × 630 px |
| `apple-touch-icon.png` | ikona po přidání webu na plochu iPhonu | 180 × 180 px |

⚠️ Oba soubory zatím **chybí**, ale `index.html` na ně už odkazuje.
Až je doplníš, zkontroluj cesty v hlavičce `index.html`.

---

## Než fotky nahraješ

1. **Zmenši je.** Fotka z foťáku má klidně 5 MB — to je pro web zbytečné.
   Stačí rozměry v tabulkách výše.
2. **Zkomprimuj je** — např. na [squoosh.app](https://squoosh.app) nebo
   [tinypng.com](https://tinypng.com). Cíl: do 300 kB na fotku.
3. **Ideálně převeď do WebP** — stejná kvalita, zhruba poloviční velikost.
