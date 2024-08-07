import Link from "next/link";
import {
    ActivityIcon,
    BadgeIcon,
    ContactIcon,
    FileIcon,
    ReceiptIcon,
  } from "lucide-react";
export function Aside() {
return(
<aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
      <Link
        href="#"
        className="flex items-center gap-2 font-semibold"
        prefetch={false}
      >
        {/* <FileIcon className="h-6 w-6" /> */}
        <span>Document Generator</span>
      </Link>
      <nav className="mt-8 flex flex-col gap-2">
        <Link
          href="/generator/invoices"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <ReceiptIcon className="h-5 w-5" />
          Invoices
        </Link>
        <Link
          href="/generator/receipts"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <ReceiptIcon className="h-5 w-5" />
          Receipts
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <ContactIcon className="h-5 w-5" />
          Contracts
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <ActivityIcon className="h-5 w-5" />
          Agreements
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          <BadgeIcon className="h-5 w-5" />
          Certificates
        </Link>
      </nav>
    </aside>

)}
