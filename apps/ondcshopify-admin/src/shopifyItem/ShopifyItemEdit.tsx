import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ShopifyItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
