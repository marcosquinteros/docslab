import { FileIcon } from "lucide-react";
import Link from "next/link";
import dosclablogo from '@/public/docslab-logosvg.svg'
import Image from "next/image";
export function NavBar () {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image
            src={dosclablogo}
            width={15}
            height={15}
            alt="Company Logo"
            // style={{ aspectRatio: "1 / 1", }}
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    )
}