"use client";

import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

export default function FormInput({ field }: { field: any }) {
  const [value, setValue] = useState(field.value || "");
  console.log(field);

  function inputSwitch(inputType: string) {
    switch (inputType) {
      case "text":
        return (
          <Input
            label={field.label}
            type={field.inputType}
            name={field.name}
            value={value}
            onValueChange={setValue}
          />
        );
      case "textarea":
        return (
          <Textarea
            label={field.label}
            type={field.inputType}
            name={field.name}
            value={value}
            onValueChange={setValue}
          />
        );
      default:
        return (
          <Input
            label={field.label}
            type="text"
            name={field.name}
            value={value}
            onValueChange={setValue}
          />
        );
    }
  }

  return <div className="w-full">{inputSwitch(field.inputType)}</div>;
}
