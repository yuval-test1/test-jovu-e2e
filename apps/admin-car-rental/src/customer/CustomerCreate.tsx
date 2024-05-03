import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { RentalTitle } from "../rental/RentalTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="licenseNumber" source="licenseNumber" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phone" source="phone" />
        <TextInput label="address" source="address" />
        <TextInput label="firstName" source="firstName" />
      </SimpleForm>
    </Create>
  );
};
