# Changelog

## 0.2.0
- Renamed to **Item Piles: Warhammer** (`item-piles-warhammer`), now a standalone add-on again (it was folded into Warhammer GM Suite in the meantime). Requires the original Item Piles module.
- Declares a conflict with the old `item-piles-warhammer-trade`; Warhammer GM Suite hands the Item Piles setup over to this module when both are active.

## 0.1.0
- First version: Item Piles 3.3 add-on for the Warhammer systems – WFRP 4e/5e, The Old World, Imperium Maledictum, Wrath & Glory, Age of Sigmar: Soulbound.
- Per-system adapters: currency (WFRP coin items with names detected from the world; Old World coins, Solars, Wealth as sheet attributes), prices, quantity paths, rarity glow in vaults.
- Physical item types detected automatically (types with a quantity field); only they can be looted and traded.
- Merchant stock generator (Actors directory context menu, GM): availability test and stock from the system's own table (WFRP settlement size, Imperium Maledictum world type), or random goods of chosen rarities / cost tiers in other systems.
- English and Polish interface.
