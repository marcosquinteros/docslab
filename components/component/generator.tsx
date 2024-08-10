import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Generator() {
  return (
    <div className="mt-5 w-full">

    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        className={item.className}
        icon={item.icon}
        />
      ))}
    </BentoGrid>
      </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/[0.2] border border-transparent bg-neutral-100"></div>
);

const items = [
  {
    title: "Invoices Generator",
    description: "Create professional-looking invoices for your clients.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-600" />,
  },
  {
    title: "Appointments Generator",
    description: "Create custom appointments confirmations for your business meetings.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-600" />,
  },
  {
    title: "Receipts",
    description: "Create professional-looking receipts for your customers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-600" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-600" />,
  },
];