import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RENTAL_TITLE_FIELD } from "./RentalTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const RentalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
        <ReferenceField label="car" source="car.id" reference="Car">
          <TextField source={CAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Feedback"
          target="rentalId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="comments" source="comments" />
            <TextField label="rating" source="rating" />
            <ReferenceField
              label="rental"
              source="rental.id"
              reference="Rental"
            >
              <TextField source={RENTAL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
