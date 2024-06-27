import { Module } from "@nestjs/common";
import { ShopifyItemModuleBase } from "./base/shopifyItem.module.base";
import { ShopifyItemService } from "./shopifyItem.service";
import { ShopifyItemController } from "./shopifyItem.controller";
import { ShopifyItemResolver } from "./shopifyItem.resolver";

@Module({
  imports: [ShopifyItemModuleBase],
  controllers: [ShopifyItemController],
  providers: [ShopifyItemService, ShopifyItemResolver],
  exports: [ShopifyItemService],
})
export class ShopifyItemModule {}
