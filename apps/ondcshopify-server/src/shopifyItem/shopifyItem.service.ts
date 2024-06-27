import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShopifyItemServiceBase } from "./base/shopifyItem.service.base";

@Injectable()
export class ShopifyItemService extends ShopifyItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
