"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-xl text-center">
        <span className={title({ color: "green" })}>Forms</span>
      </div>
      <Table>
        <TableHeader>
          <TableColumn>Form Name</TableColumn>
          <TableColumn>Form Type</TableColumn>
          <TableColumn>Form Status</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Form 1</TableCell>
            <TableCell>Form Type 1</TableCell>
            <TableCell>Form Status 1</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Form 2</TableCell>
            <TableCell>Form Type 2</TableCell>
            <TableCell>Form Status 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
  // return (
  //   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
  //     <div className="justify-center inline-block max-w-xl text-center">
  //       <span className={title()}>Make&nbsp;</span>
  //       <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
  //       <br />
  //       <span className={title()}>
  //         websites regardless of your design experience.
  //       </span>
  //       <div className={subtitle({ class: "mt-4" })}>
  //         Beautiful, fast and modern React UI library.
  //       </div>
  //     </div>

  //     <div className="flex gap-3">
  //       <Link
  //         isExternal
  //         className={buttonStyles({
  //           color: "primary",
  //           radius: "full",
  //           variant: "shadow",
  //         })}
  //         href={siteConfig.links.docs}
  //       >
  //         Documentation
  //       </Link>
  //       <Link
  //         isExternal
  //         className={buttonStyles({ variant: "bordered", radius: "full" })}
  //         href={siteConfig.links.github}
  //       >
  //         <GithubIcon size={20} />
  //         GitHub
  //       </Link>
  //     </div>

  //     <div className="mt-8">
  //       <Snippet hideCopyButton hideSymbol variant="bordered">
  //         <span>
  //           Get started by editing <Code color="primary">app/page.tsx</Code>
  //         </span>
  //       </Snippet>
  //     </div>
  //   </section>
  // );
}
