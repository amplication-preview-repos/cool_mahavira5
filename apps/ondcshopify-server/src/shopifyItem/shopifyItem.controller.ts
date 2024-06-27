import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShopifyItemService } from "./shopifyItem.service";
import { ShopifyItemControllerBase } from "./base/shopifyItem.controller.base";

@swagger.ApiTags("shopifyItems")
@common.Controller("shopifyItems")
export class ShopifyItemController extends ShopifyItemControllerBase {
  constructor(protected readonly service: ShopifyItemService) {
    super(service);
  }
}
