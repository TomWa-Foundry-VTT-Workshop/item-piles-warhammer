/**
 * Item Piles: Warhammer
 * Dodatek do Item Piles dla systemów Warhammera: WFRP 4e/5e, The Old World,
 * Imperium Maledictum, Wrath & Glory i Age of Sigmar: Soulbound.
 */

import { MODULE_ID, t, log } from "./constants.mjs";
import { physicalTypes } from "./availability.mjs";
import { buildIntegration } from "./integration.mjs";
import { openStockDialog, stockMerchant } from "./merchant.mjs";
import { adapterFor } from "./systems/index.mjs";

let adapter = null;

Hooks.once("init", () => {
  adapter = adapterFor(game.system.id);
  log.info(adapter ? `init – system ${game.system.id}` : `system ${game.system.id} nie jest obsługiwany`);
  game.modules.get(MODULE_ID).api = {
    /** Adapter aktywnego systemu (null, gdy nieobsługiwany). */
    get adapter() {
      return adapter;
    },
    /** Waluty aktywnego systemu w formacie Item Piles. */
    currencies: () => adapter?.currencies(game, t),
    /** Ponownie ustawia waluty Item Piles (np. po zmianie kompendiów WFRP). */
    applyCurrencies: async () => adapter && game.itempiles?.API.setCurrencies(await adapter.currencies(game, t)),
    /** Uzupełnia towar kupca: { location, rarities, types, limit, modifier, replace }. */
    stockMerchant: (merchant, options) => adapter && stockMerchant(adapter, merchant, options),
    /** Okno generatora towaru dla kupca. */
    openStockDialog: (merchant) => adapter && openStockDialog(adapter, merchant)
  };
});

// Item Piles woła ten hook, gdy jest gotowy na integrację systemu
Hooks.once("item-piles-ready", async () => {
  if (!adapter) return;
  try {
    const currencies = await adapter.currencies(game, t);
    const itemTypes = Object.keys(CONFIG.Item.dataModels ?? {});
    const physical = physicalTypes(CONFIG.Item.dataModels);
    game.itempiles.API.addSystemIntegration(buildIntegration({ adapter, currencies, itemTypes, physical }));
    log.info(`integracja Item Piles (${game.system.id}): ${currencies.map((c) => c.name).join(", ") || "bez waluty"}`);
  } catch (err) {
    log.error("Integracja Item Piles", err);
  }
});

// Menu kontekstowe katalogu aktorów: generator towaru dla kupców (tylko MG)
const merchantOption = {
  name: "WHTRADE.Stock.Menu",
  icon: '<i class="fa-solid fa-cart-plus"></i>',
  condition: (li) => {
    if (!adapter || !game.user.isGM || !game.itempiles) return false;
    const actor = game.actors.get(li.dataset?.entryId);
    return Boolean(actor && game.itempiles.API.isItemPileMerchant(actor));
  },
  callback: (li) => {
    const actor = game.actors.get(li.dataset?.entryId);
    if (actor) openStockDialog(adapter, actor);
  }
};
Hooks.on("getActorContextOptions", (_app, options) => options.push(merchantOption));
