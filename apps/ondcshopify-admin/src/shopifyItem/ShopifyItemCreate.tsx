import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ShopifyItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bodyHtml" multiline source="bodyHtml" />
        <NumberInput
          step={1}
          label="inventoryQuantity"
          source="inventoryQuantity"
        />
        <NumberInput label="price" source="price" />
        <TextInput label="productType" source="productType" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
