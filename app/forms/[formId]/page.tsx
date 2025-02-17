import FormHeader from "@/components/form-header";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export default async function FormPage({
  params,
}: {
  params: { formId: string };
}) {
  const { formId } = await params;

  const res = await fetch(`http://localhost:8080/api/forms/${formId}`);
  const formData = await res.json();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FormHeader formData={formData} />
      <div className="flex flex-col items-center justify-center w-full p-4 border-b gap-y-4 border-gray-400/50">
        <Input
          className="max-w-md"
          label="Name"
          value={formData.title}
          size="lg"
        />
        <Input
          className="max-w-md"
          label="Description"
          value={formData.description}
          size="lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 gap-y-4">
        {formData.formFields.map((field: any) => (
          <Input key={field.id} className="max-w-md" label={field.label} />
        ))}
      </div>
    </div>
  );
}
