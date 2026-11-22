# Item Piles: Warhammer (`item-piles-warhammer`)

[English](README.md) | **Polski**

Dodatek do [Item Piles](https://foundryvtt.com/packages/item-piles) dla **systemów Warhammera** w Foundry VTT. Jeden moduł ustawia walutę i ceny każdego systemu, ogranicza łupy i wymianę do przedmiotów fizycznych i pozwala MG w kilka sekund zaopatrzyć kupca według zasad dostępności samego systemu.

To **nakładka na Item Piles, nie jego zamiennik**: oryginalny moduł [Item Piles](https://foundryvtt.com/packages/item-piles) jest wymagany i to on robi całą pracę (stosy, skarbce, kupcy, wymiana). Ten moduł tylko uczy go systemów Warhammera.

Wymaga **Foundry VTT v14** i **Item Piles 3.3+** (instalowany automatycznie jako zależność). Nie włączaj razem ze starszym *Item Piles: WFRP4e* ani z *Item Piles: Warhammer Trade & Merchants* (poprzednia nazwa tego modułu).

**Warhammer GM Suite** zachowuje zakładkę Kupcy: gdy ten moduł jest aktywny, GM Suite zostawia mu konfigurację Item Piles i korzysta z jego generatora towaru.

Interfejs działa w języku Foundry: **angielski** i **polski** są wbudowane, a kolejne języki można dodać (zobacz *Języki*); to, czego nie przetłumaczono, pokazuje się po angielsku.

## 📥 Instalacja

Wklej w *Manifest URL* w **Add-on Modules → Install Module**:

```
https://github.com/TomWa-Foundry-VTT-Workshop/item-piles-warhammer/releases/latest/download/module.json
```

## 🎲 Obsługiwane systemy

| System | Waluta | Ceny | Towar kupca |
|---|---|---|---|
| **WFRP 4e / 5e** (`wfrp4e` 10.x) | złote korony, srebrne szylingi, mosiężne pensy (przedmioty monet z nazwami z kompendiów Twojego świata) | korony / szylingi / pensy | test dostępności i zapas według **wielkości osady**, w miastach bez limitu |
| **The Old World** (`whtow`) | monety złote, srebrne i mosiężne na karcie | koszt przedmiotu to poziom statusu, liczony jako jedna moneta tego poziomu | losowe towary z wybranych poziomów kosztu |
| **Imperium Maledictum** (`impmal`) | Solary na karcie | Solary | test dostępności według **typu świata** (feral … forge) |
| **Wrath & Glory** (`wrath-and-glory`) | Bogactwo na karcie | Wartość przedmiotu | losowe towary z wybranych rzadkości |
| **Age of Sigmar: Soulbound** | brak (system nie śledzi pieniędzy) | liczbowa część kosztu, jeśli jest | losowe towary z wybranej dostępności |

Przedmioty fizyczne są rozpoznawane automatycznie (każdy typ przedmiotu z ilością), więc łupy i wymiana działają też z zawartością z innych modułów. Rzadkość daje przedmiotom kolorową poświatę w skarbcach.

### Nazwy monet w WFRP

Item Piles rozpoznaje monety po nazwie, a nazwy w WFRP zależą od języka kompendiów (*Gold Crown* albo *Złota Korona*). Moduł bierze nazwę każdej monety z przedmiotów monet na kartach postaci, potem z katalogu przedmiotów, potem z kompendiów. Waluty można potem poprawić w ustawieniach Item Piles albo wykryć ponownie przez `game.modules.get("item-piles-warhammer").api.applyCurrencies()`.

## 🛒 Generator towaru kupców

Kliknij prawym przyciskiem kupca Item Piles w katalogu aktorów i wybierz **Warhammer: zaopatrz kupca** (tylko MG). Wybierz wielkość osady albo typ świata (albo rzadkości / poziomy kosztu w systemach bez tabeli dostępności), rodzaje towaru, limit i modyfikator. Opcjonalnie zastąp obecne towary kupca tego rodzaju.

Makro: `game.modules.get("item-piles-warhammer").api.stockMerchant(actor, { location: "MARKET.Town", types: ["weapon", "trapping"], limit: 30 })`.

## ➕ Dodanie systemu

Każdy system to mały adapter w `scripts/systems/` (waluta, cena, ścieżka ilości, dostępność). Dodaj plik i zarejestruj go w `scripts/systems/index.mjs`.

## 🌐 Języki

Angielski i polski są wbudowane. Aby dodać kolejny język:

```bash
npm run lang:add -- de "Deutsch"
```

Polecenie tworzy `lang/de.json` (kopię tekstów angielskich) i dopisuje go do `module.json`. Przetłumacz teksty; każdy pominięty klucz pokaże się po angielsku, a `npm run check` wypisze nieprzetłumaczone klucze. Tłumaczenia mile widziane jako pull requesty.

Osobny moduł tłumaczenia może też dodać język bez zmian w tym module: deklaruje wpis `languages` z `"lang": "de"`, wskazujący na własny plik z tymi samymi kluczami.

## 🛠️ Rozwój

```bash
npm install
npm run check   # manifest + tłumaczenia, lint, testy
npm run link    # podłącza ten katalog do lokalnego Foundry (Data/modules)
```

## 🙏 Podziękowania

Inspiracja: *Item Piles: WFRP4e* (Foundry Workshop). Napisany od zera dla Foundry v14 i Item Piles 3.3. Item Piles jest dziełem Waspa, a systemy Warhammera – Moo Mana.

## 📄 Licencja

MIT – zobacz [LICENSE](LICENSE).

Nieoficjalna twórczość fanowska, niezwiązana z Games Workshop ani Cubicle 7 i przez nie niepopierana. Warhammer i powiązane nazwy są znakami towarowymi Games Workshop Limited. Moduł nie zawiera tekstów ani grafik z podręczników – działa z treściami, które już posiadasz.
