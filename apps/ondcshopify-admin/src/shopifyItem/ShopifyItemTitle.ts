import { ShopifyItem as TShopifyItem } from "../api/shopifyItem/ShopifyItem";

export const SHOPIFYITEM_TITLE_FIELD = "title";

export const ShopifyItemTitle = (record: TShopifyItem): string => {
  return record.title?.toString() || String(record.id);
};
