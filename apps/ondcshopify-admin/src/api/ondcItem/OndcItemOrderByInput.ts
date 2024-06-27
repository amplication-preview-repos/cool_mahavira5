import { SortOrder } from "../../util/SortOrder";

export type OndcItemOrderByInput = {
  availableStock?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
