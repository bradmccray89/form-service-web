import { title, subtitle } from "@/components/primitives";
import FormsTable from "@/components/forms-table";

export default async function Home() {
  const res = await fetch("http://localhost:8080/api/forms");
  const data = await res.json();

  console.log("Server Data", data);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-xl text-center">
        <span className={title({ color: "green" })}>Forms</span>
      </div>
      <FormsTable forms={data} />
    </div>
  );
}
