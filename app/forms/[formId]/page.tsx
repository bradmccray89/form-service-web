import FormHeader from "@/components/form-header";
import FormHeaderActions from "@/components/form-header-actions";
import FormInput from "@/components/form-input";

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
      <div className="flex flex-col gap-4 justify-center items-start w-full max-w-[600px] p-4">
        {formData.formFields.map((field: any) => (
          <FormInput key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
}
