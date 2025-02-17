"use client";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Link } from "@heroui/link";
import { useState } from "react";

export default function FormHeader({ formData }: { formData: any }) {
  const [isSelected, setIsSelected] = useState(formData.isActive);

  const saveFormData = async () => {
    const res = await fetch(`http://localhost:8080/api/forms/${formData.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...formData }),
    });
    const updatedFormData = await res.json();
    console.log(updatedFormData);
  };

  return (
    <div className="flex items-center justify-between w-full p-4">
      <Button className="mb-4" as={Link} href="/forms" color="primary">
        Back to Forms
      </Button>
      {/* <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Active
      </Checkbox> */}
      <Button color="primary" onPress={saveFormData}>
        Save
      </Button>
    </div>
  );
}
