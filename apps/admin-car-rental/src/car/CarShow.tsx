import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAR_TITLE_FIELD } from "./CarTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="rentalPricePerDay" source="rentalPricePerDay" />
        <TextField label="status" source="status" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <ReferenceManyField reference="Rental" target="carId" label="Rentals">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="carId" label="Orders">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <TextField label="rentalEnd" source="rentalEnd" />
            <ReferenceField label="car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rentalStart" source="rentalStart" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
