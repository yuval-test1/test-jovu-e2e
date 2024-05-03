import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RentalTitle } from "../rental/RentalTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <TextInput label="rating" source="rating" />
        <ReferenceInput source="rental.id" reference="Rental" label="rental">
          <SelectInput optionText={RentalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
