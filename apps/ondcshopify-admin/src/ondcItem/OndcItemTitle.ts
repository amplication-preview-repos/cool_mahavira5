import { OndcItem as TOndcItem } from "../api/ondcItem/OndcItem";

export const ONDCITEM_TITLE_FIELD = "name";

export const OndcItemTitle = (record: TOndcItem): string => {
  return record.name?.toString() || String(record.id);
};
