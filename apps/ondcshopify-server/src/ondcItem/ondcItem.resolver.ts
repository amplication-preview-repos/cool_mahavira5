import * as graphql from "@nestjs/graphql";
import { OndcItemResolverBase } from "./base/ondcItem.resolver.base";
import { OndcItem } from "./base/OndcItem";
import { OndcItemService } from "./ondcItem.service";

@graphql.Resolver(() => OndcItem)
export class OndcItemResolver extends OndcItemResolverBase {
  constructor(protected readonly service: OndcItemService) {
    super(service);
  }
}
