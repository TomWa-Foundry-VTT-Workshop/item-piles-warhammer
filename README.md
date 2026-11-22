# Item Piles: Warhammer (`item-piles-warhammer`)

**English** | [Polski](README.pl.md)

> **For these Warhammer systems on Foundry VTT:** Warhammer Fantasy Roleplay 4e/5e (`wfrp4e`), Warhammer: The Old World (`whtow`), Imperium Maledictum (`impmal`), Wrath & Glory (`wrath-and-glory`) and Age of Sigmar: Soulbound (`age-of-sigmar-soulbound`). In any other system it does nothing.

An [Item Piles](https://foundryvtt.com/packages/item-piles) add-on for the **Warhammer systems** on Foundry VTT. One module sets up each system's own currency and prices, keeps loot and trade to physical items, and lets the GM stock a merchant in seconds by the system's own availability rules.

This is an **add-on for Item Piles, not a replacement**: the original [Item Piles](https://foundryvtt.com/packages/item-piles) module is required and does all the work (piles, vaults, merchants, trading). This module only teaches it the Warhammer systems.

Requires **Foundry VTT v14** and **Item Piles 3.3+** (installed automatically as a dependency). Don't enable it together with the older *Item Piles: WFRP4e*.

**Warhammer GM Suite** keeps its Merchants tab: with this module active, the GM Suite leaves the Item Piles setup to it and uses its merchant stock generator.

The interface follows Foundry's language: **English** and **Polish** are built in, and more languages can be added (see *Languages*); anything untranslated falls back to English.

## 📥 Installation

Paste this into *Manifest URL* in **Add-on Modules → Install Module**:

```
https://github.com/TomWa-Foundry-VTT-Workshop/item-piles-warhammer/releases/latest/download/module.json
```

## 🎲 Supported systems

| System | Currency | Prices | Merchant stock |
|---|---|---|---|
| **WFRP 4e / 5e** (`wfrp4e` 10.x) | gold crowns, silver shillings, brass pennies (coin items, named as in your world's compendia) | crowns / shillings / pennies | availability test and stock by **settlement size**, unlimited in cities |
| **The Old World** (`whtow`) | gold, silver, brass coins on the sheet | an item's cost is a status tier, priced as one coin of that tier | random goods of the chosen cost tiers |
| **Imperium Maledictum** (`impmal`) | Solars on the sheet | Solars | availability test by **world type** (feral … forge) |
| **Wrath & Glory** (`wrath-and-glory`) | Wealth on the sheet | item Value | random goods of the chosen rarities |
| **Age of Sigmar: Soulbound** | none (the system doesn't track money) | the numeric part of the cost, if any | random goods of the chosen availability |

Physical items are recognised automatically (every item type with a quantity), so loot and trade work with content from other modules too. Rarity gives items a coloured glow in vaults.

### WFRP coin names

Item Piles recognises coins by name, and WFRP coin names depend on the compendium language (*Gold Crown* or *Złota Korona*). The module picks each coin's name from the money items on characters, then the Items directory, then compendia. You can adjust the currencies later in the Item Piles settings, or detect them again with `game.modules.get("item-piles-warhammer").api.applyCurrencies()`.

## 🛒 Merchant stock generator

Right-click an Item Piles merchant in the Actors directory and choose **Warhammer: stock merchant** (GM only). Pick the settlement size or world type (or the rarities / cost tiers in systems without an availability table), the kinds of goods, a limit and a modifier. Optionally replace the merchant's current goods of those kinds.

Macro: `game.modules.get("item-piles-warhammer").api.stockMerchant(actor, { location: "MARKET.Town", types: ["weapon", "trapping"], limit: 30 })`.

## ➕ Adding a system

Each system is one small adapter in `scripts/systems/` (currency, price, quantity path, availability). Add a file and register it in `scripts/systems/index.mjs`.

## 🌐 Languages

English and Polish are built in. To add another language:

```bash
npm run lang:add -- de "Deutsch"
```

This creates `lang/de.json` (a copy of the English texts) and registers it in `module.json`. Translate the texts; any key you leave out falls back to English, and `npm run check` lists the untranslated keys. Translations are welcome as pull requests.

A separate translation module can also add a language without touching this one: it declares a `languages` entry with `"lang": "de"` that points to its own file with the same keys.

## 🛠️ Development

```bash
npm install
npm run check   # manifest + translations, lint, tests
npm run link    # link this folder into your local Foundry Data/modules
```

## 🙏 Credits

Inspired by *Item Piles: WFRP4e* (Foundry Workshop). Written from scratch for Foundry v14 and Item Piles 3.3. Item Piles is made by Wasp; the Warhammer systems are made by Moo Man.

## 📄 License

MIT – see [LICENSE](LICENSE).

Unofficial fan content, not affiliated with or endorsed by Games Workshop or Cubicle 7. Warhammer and all related names are trademarks of Games Workshop Limited. The module ships no rulebook text or artwork; it works with the content you already own.
