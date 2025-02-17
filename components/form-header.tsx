"use client";
import { Checkbox } from "@heroui/checkbox";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

export default function FormHeader({ formData }: { formData: any }) {
  const [isSelected, setIsSelected] = useState(formData.isActive);
  const [name, setName] = useState(formData.title);
  const [description, setDescription] = useState(formData.description);

  return (
    <div className="flex flex-col gap-4 justify-center items-start w-full max-w-[600px] border-b border-gray-500/50 p-4">
      <div className="relative flex items-center justify-start w-full p-6 mt-4 border rounded-lg border-gray-500/50">
        <span className="absolute top-0 px-2 text-gray-500 -translate-x-1/2 -translate-y-1/2 bg-white left-1/2 dark:bg-black">
          Form Settings
        </span>
        <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
          Active
        </Checkbox>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-y-4">
        <Input
          label="Name"
          description="Use this space to label your form so you can easily identify it later."
          value={name}
          size="lg"
          onValueChange={setName}
        />
        <Textarea
          label="Description"
          description="This space is for your reference only. It won’t appear on the form itself."
          value={description}
          size="lg"
          onValueChange={setDescription}
        ></Textarea>
      </div>
    </div>
  );
}
