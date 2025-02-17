import FormHeader from "@/components/form-header";
import FormHeaderActions from "@/components/form-header-actions";
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
      <FormHeaderActions formData={formData} />
      <FormHeader formData={formData} />
      <div className="flex flex-col items-center justify-center w-full p-4 gap-y-4">
        {formData.formFields.map((field: any) => (
          <Input key={field.id} className="max-w-md" label={field.label} />
        ))}
      </div>
    </div>
  );
}
