import { OndcItemWhereInput } from "./OndcItemWhereInput";
import { OndcItemOrderByInput } from "./OndcItemOrderByInput";

export type OndcItemFindManyArgs = {
  where?: OndcItemWhereInput;
  orderBy?: Array<OndcItemOrderByInput>;
  skip?: number;
  take?: number;
};
