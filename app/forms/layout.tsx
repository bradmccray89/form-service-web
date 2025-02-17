export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-[1000px]">{children}</div>;
}
