import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RentalTitle } from "../rental/RentalTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <TextInput label="rating" source="rating" />
        <ReferenceInput source="rental.id" reference="Rental" label="rental">
          <SelectInput optionText={RentalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
