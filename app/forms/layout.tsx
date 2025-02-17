export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-6 pt-16 mx-auto max-w-[1000px]">
      {children}
    </div>
  );
}
