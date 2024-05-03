import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RENTAL_TITLE_FIELD } from "../rental/RentalTitle";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="comments" source="comments" />
        <TextField label="rating" source="rating" />
        <ReferenceField label="rental" source="rental.id" reference="Rental">
          <TextField source={RENTAL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
