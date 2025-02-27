"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowLeftIcon, EyeIcon, SaveIcon } from "./icons";

export default function FormHeaderActions({ formData }: { formData: any }) {
  const saveFormData = async () => {
    const res = await fetch(`http://localhost:8080/api/forms/${formData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const updatedFormData = await res.json();
    console.log(updatedFormData);
  };

  return (
    <div className="flex items-center justify-between w-full gap-4 p-4">
      <Button
        as={Link}
        href="/forms"
        isIconOnly
        aria-label="Back to Forms"
        className="md:hidden"
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        as={Link}
        href="/forms"
        startContent={<ArrowLeftIcon size={18} />}
        aria-label="Back to Forms"
        className="hidden md:flex"
      >
        Back to Forms
      </Button>
      <div className="flex items-center justify-center flex-grow gap-4 md:flex-grow-0">
        <Button
          as={Link}
          href={`/forms/${formData.id}/preview`}
          target="_blank"
          startContent={<EyeIcon />}
          className="w-full md:w-auto"
          aria-label="Preview"
        >
          Preview
        </Button>
        <Button
          color="primary"
          onPress={saveFormData}
          startContent={<SaveIcon />}
          className="w-full md:w-auto"
          aria-label="Save"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
