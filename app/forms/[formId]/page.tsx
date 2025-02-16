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
    <div>
      <Link href="/forms" color="primary" underline="hover">
        Back to Forms
      </Link>
      <h1>{formData.title}</h1>
      <div>{formData.description}</div>
    </div>
  );
}
