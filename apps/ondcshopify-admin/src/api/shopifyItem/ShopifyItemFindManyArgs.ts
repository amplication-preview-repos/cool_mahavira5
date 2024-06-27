import { ShopifyItemWhereInput } from "./ShopifyItemWhereInput";
import { ShopifyItemOrderByInput } from "./ShopifyItemOrderByInput";

export type ShopifyItemFindManyArgs = {
  where?: ShopifyItemWhereInput;
  orderBy?: Array<ShopifyItemOrderByInput>;
  skip?: number;
  take?: number;
};
