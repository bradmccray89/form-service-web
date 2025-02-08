"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";

type FormData = {
  forms: any;
};

export default function FormsTable({ forms }: FormData) {
  console.log("Client Data", forms);
  return (
    <Table aria-label="Forms Table">
      <TableHeader>
        <TableColumn>Form Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Form Status</TableColumn>
      </TableHeader>
      <TableBody>
        {forms.map((form: any, index: number) => (
          <TableRow key={index}>
            <TableCell>{form.title}</TableCell>
            <TableCell>{form.description}</TableCell>
            <TableCell>{form.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
