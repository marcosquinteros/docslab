import { FileIcon } from "lucide-react";
import Link from "next/link";
import doclabslogo from "@/public/docslablogo.svg";
import Image from "next/image";
export function NavBar () {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image
            src={doclabslogo}
            width={125}
            height={15}
            alt="Company Logo"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
     */}
        </nav>
      </header>
    )
}