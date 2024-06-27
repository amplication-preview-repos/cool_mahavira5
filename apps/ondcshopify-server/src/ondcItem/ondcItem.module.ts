import { Module } from "@nestjs/common";
import { OndcItemModuleBase } from "./base/ondcItem.module.base";
import { OndcItemService } from "./ondcItem.service";
import { OndcItemController } from "./ondcItem.controller";
import { OndcItemResolver } from "./ondcItem.resolver";

@Module({
  imports: [OndcItemModuleBase],
  controllers: [OndcItemController],
  providers: [OndcItemService, OndcItemResolver],
  exports: [OndcItemService],
})
export class OndcItemModule {}
