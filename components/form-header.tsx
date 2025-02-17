"use client";
import { Checkbox } from "@heroui/checkbox";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

export default function FormHeader({ formData }: { formData: any }) {
  const [isSelected, setIsSelected] = useState(formData.isActive);
  const [name, setName] = useState(formData.title);
  const [description, setDescription] = useState(formData.description);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[600px] p-4 border-b gap-y-4 border-gray-400/50">
      <div className="flex items-center w-full gap-x-2">
        <Input
          className="w-full"
          label="Name"
          value={name}
          size="lg"
          onValueChange={setName}
        />
        <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
          Active
        </Checkbox>
      </div>
      <Textarea
        label="Description"
        value={description}
        size="lg"
        onValueChange={setDescription}
      ></Textarea>
    </div>
  );
}
