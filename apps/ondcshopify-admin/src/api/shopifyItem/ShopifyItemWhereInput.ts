import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ShopifyItemWhereInput = {
  bodyHtml?: StringNullableFilter;
  id?: StringFilter;
  inventoryQuantity?: IntNullableFilter;
  price?: FloatNullableFilter;
  productType?: StringNullableFilter;
  title?: StringNullableFilter;
};
