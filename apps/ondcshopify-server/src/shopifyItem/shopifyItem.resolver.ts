import * as graphql from "@nestjs/graphql";
import { ShopifyItemResolverBase } from "./base/shopifyItem.resolver.base";
import { ShopifyItem } from "./base/ShopifyItem";
import { ShopifyItemService } from "./shopifyItem.service";

@graphql.Resolver(() => ShopifyItem)
export class ShopifyItemResolver extends ShopifyItemResolverBase {
  constructor(protected readonly service: ShopifyItemService) {
    super(service);
  }
}
