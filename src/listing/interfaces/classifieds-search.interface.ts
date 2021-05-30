export enum ListingIntent {
  BUY = 0,
  SELL = 1,
}

/**
 * Currencies for a listing, either keys or metal should be present but both
 * doesn't need to be used at once
 */
export interface Currencies {
  keys?: number;
  metal?: number;
}

/**
 * A buy listing item
 */
export interface BuyListingItem {
  defindex: number;
  quality: number;
  attributes?: ItemAttribute[];
  /**
   * Quantities are for some reason only strings in buy listings
   */
  quantity?: string;
  name?: string;
}

/**
 * Attributes an item can have, similar to the ones you get when you load an
 * inventory using the TF2 API GetPlayerItems
 */
export interface ItemAttribute {
  defindex: string | number;
  value?: number | string | null;
  float_value?: number | string;
  account_info?: {
    steamid: number;
    personaname: string;
  };
}

/**
 * A sell listing item, contains more information about the item than a buy
 * listing because this is for an item that is known to exist
 */
export interface SellListingItem {
  id: number;
  original_id: number;
  defindex: number;
  level: number;
  quality: number;
  inventory: number;
  quantity?: number;
  origin: number;
  style?: number;
  attributes?: ItemAttribute[];
  name?: string;
}

/**
 * The item a listing contains can either be a buy item or sell item
 */
export type ListingItem = BuyListingItem | SellListingItem;

/**
 * Backpack.tf uses ints as booleans
 */
export type IntBool = 0 | 1;

/**
 * A listing from backpack.tf
 */
export interface Listing {
  id: string;
  steamid: string;
  item: ListingItem;
  appid: number;
  currencies: Currencies;
  offers: IntBool;
  buyout: IntBool;
  details: string;
  created: number;
  bump: number;
  intent: ListingIntent;
  automatic: IntBool;
}

/**
 * A buy listing, contains data specific to buy listings
 */
export interface BuyListing extends Listing {
  item: BuyListingItem;
  intent: ListingIntent.BUY;
}

/**
 * A sell listing, contains data specific to sell listings
 */
export interface SellListing extends Listing {
  item: SellListingItem;
  intent: ListingIntent.SELL;
}

export interface ClassifiedsSearchResponse {
  total: number;
  skip: number;
  page_size: number;
  buy: {
    total: number;
    listings: BuyListing[];
    fold: boolean;
  };
  sell: {
    total: number;
    listings: SellListing[];
    fold: boolean;
  };
}
