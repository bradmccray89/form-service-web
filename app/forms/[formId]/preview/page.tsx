export default async function PreviewPage({
  params,
}: {
  params: { formId: string };
}) {
  const { formId } = await params;

  return (
    <div>
      <h1>Preview Page</h1>
      <span>FormId: {formId}</span>
    </div>
  );
}
