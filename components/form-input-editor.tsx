"use client";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function FormInputEditor({
  field,
  index,
}: {
  field: any;
  index: number;
}) {
  const items = siteConfig.inputTypes;
  const inputType = siteConfig.inputTypes.find(
    (item) => item.key === field.inputType
  );
  const [label, setLabel] = useState(field.label);
  const [selectedKeys, setSelectedKeys] = useState(
    inputType ? inputType.key : ""
  );

  return (
    <div className="relative flex flex-col items-center justify-between w-full gap-4 p-4 border rounded-md md:flex-row border-gray-500/50">
      <span className="absolute top-0 px-2 text-gray-500 -translate-y-1/2 bg-white left-8 dark:bg-black">
        Question {index + 1}
      </span>
      <Input label="Label" value={label} onValueChange={setLabel} />
      <Select
        label="Type"
        items={items}
        selectedKeys={[selectedKeys]}
        onSelectionChange={(keys) => setSelectedKeys(keys as string)}
      >
        {(item: any) => <SelectItem>{item.label}</SelectItem>}
      </Select>
    </div>
  );
}
