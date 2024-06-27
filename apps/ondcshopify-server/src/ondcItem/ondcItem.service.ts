import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OndcItemServiceBase } from "./base/ondcItem.service.base";

@Injectable()
export class OndcItemService extends OndcItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
