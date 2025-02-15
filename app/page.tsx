import { title, subtitle } from "@/components/primitives";
import FormsTable from "@/components/forms-table";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default async function Home() {
  const res = await fetch("http://localhost:8080/api/forms");
  const data = await res.json();

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-xl text-center">
        <span className={title({ color: "green" })}>Dashboard</span>
        <span className={subtitle()}>Under Construction</span>
      </div>
      <Button size="lg" as={Link} href="/forms" color="primary">
        View Forms
      </Button>
    </div>
  );
}
