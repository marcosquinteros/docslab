"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  ActivityIcon,
  BadgeIcon,
  ContactIcon,
  FileIcon,
  ReceiptIcon,
} from "lucide-react";
import Image from "next/image";
import doclabslogo from "@/public/docslablogo.svg";
import { Separator } from "../ui/separator";
import clsx from "clsx"; // Import clsx

export function Aside() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
      {/* <div className="h-12">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <Image
            src={doclabslogo}
            width={185}
            height={15}
            alt="Company Logo"
          />
        </Link>
      </div>
      <Separator /> */}
      <nav className="mt-8 flex flex-col gap-2">
        <Link
          href="/generator/invoices"
          className={clsx(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
            { 'bg-muted text-foreground': pathname === '/generator/invoices' } // Highlight if active
          )}
          prefetch={false}
        >
          <ReceiptIcon className="h-5 w-5" />
          Invoices
        </Link>
        <Link
          href="/generator/receipts"
          className={clsx(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
            { 'bg-muted text-foreground': pathname === '/generator/receipts' } // Highlight if active
          )}
          prefetch={false}
        >
          <ReceiptIcon className="h-5 w-5" />
          Receipts
        </Link>
        <Link
          href="/generator/appointments"
          className={clsx(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
            { 'bg-muted text-foreground': pathname === '/generator/appointments' } // Highlight if active
          )}
          prefetch={false}
        >
          <ContactIcon className="h-5 w-5" />
          Appointment
        </Link>
      </nav>
    </aside>
  );
}