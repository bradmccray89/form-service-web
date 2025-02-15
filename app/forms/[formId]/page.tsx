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
      <h1>{formData.title}</h1>
      <div>{formData.description}</div>
    </div>
  );
}
