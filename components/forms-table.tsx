"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useRouter } from "next/navigation";
import { Key } from "react";

type FormData = {
  forms: any;
};

export default function FormsTable({ forms }: FormData) {
  const router = useRouter();

  return (
    <Table
      isStriped
      aria-label="Forms Table"
      color="primary"
      selectionMode="single"
      onRowAction={(formId: Key) => {
        router.push(`/forms/${formId}`);
      }}
    >
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {forms.map((form: any) => (
          <TableRow key={form.id}>
            <TableCell>{form.title}</TableCell>
            <TableCell>{form.description}</TableCell>
            <TableCell>{form.isActive ? "Active" : "Inactive"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
