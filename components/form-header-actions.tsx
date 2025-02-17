"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function FormHeaderActions({ formData }: { formData: any }) {
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
      <Button as={Link} href="/forms">
        Back to Forms
      </Button>
      <Button color="primary" onPress={saveFormData}>
        Save
      </Button>
    </div>
  );
}
