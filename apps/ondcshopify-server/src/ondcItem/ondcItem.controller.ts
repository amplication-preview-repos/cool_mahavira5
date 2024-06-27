import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OndcItemService } from "./ondcItem.service";
import { OndcItemControllerBase } from "./base/ondcItem.controller.base";

@swagger.ApiTags("ondcItems")
@common.Controller("ondcItems")
export class OndcItemController extends OndcItemControllerBase {
  constructor(protected readonly service: OndcItemService) {
    super(service);
  }
}
