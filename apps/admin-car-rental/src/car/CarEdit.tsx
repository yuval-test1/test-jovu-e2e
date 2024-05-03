import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { RentalTitle } from "../rental/RentalTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
        <NumberInput label="rentalPricePerDay" source="rentalPricePerDay" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="registrationNumber" source="registrationNumber" />
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
      </SimpleForm>
    </Edit>
  );
};