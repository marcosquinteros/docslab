import {
  CalendarIcon,
  CircleDollarSign,
  ClipboardIcon,
  DollarSignIcon,
  FileChartColumn,
  FileTextIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import invoice from "@/public/invoice.png";
import receipt from "@/public/receipt.png";
import appointment from "@/public/appointment.png";
import expense from "@/public/expense.png";
import quote from "@/public/quote.png";

export default function Homepage() {
  return (
    <div className="flex  flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 pb-5 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Generate Any Document You Need
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform makes it easy to create professional-looking
                  documents like invoices, contracts, proposals, and more.
                </p>
                <div className="mt-6">
                  <Link
                    href="/generator"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              {/* <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 md:px-6">
            <Link
              href="/generator/invoices"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              prefetch={false}
            >
              <Image
                src={invoice}
                width={400}
                height={300}
                alt="Artwork 1"
                className="aspect-[4/3] w-full object-cover transition duration-300  group-hover:blur-sm trans"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">Invoices</h3>
                  <p className="text-sm text-white/80">
                    Create professional-looking invoices for your clients.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FileTextIcon className="text-green-700 w-16 h-16 transform group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/generator/appointments"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              prefetch={false}
            >
              <Image
                src={appointment}
                width={400}
                height={300}
                alt="Artwork 2"
                className="aspect-[4/3] w-full object-cover group-hover:blur-sm transition duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">Appointments</h3>
                  <p className="text-sm text-white/80">
                    Create custom appointments confirmations for your business
                    meetings.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CalendarIcon className="text-green-700 w-16 h-16 transform group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/generator/receipts"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              prefetch={false}
            >
              <Image
                src={receipt}
                width={400}
                height={300}
                alt="Artwork 3"
                className="aspect-[4/3] w-full object-cover group-hover:blur-sm transition duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">Receipts</h3>
                  <p className="text-sm text-white/80">
                    Create professional-looking receipts for your customers.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ReceiptIcon className="text-green-700 w-16 h-16 transform group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/generator/expenses"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              prefetch={false}
            >
              <Image
                src={expense}
                width={400}
                height={300}
                alt="Artwork 4"
                className="aspect-[4/3] w-full object-cover group-hover:blur-sm transition duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">
                    Expenses Report
                  </h3>
                  <p className="text-sm text-white/80">
                    Create custom expenses report for your business needs.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <DollarSignIcon className="text-green-700 w-16 h-16 transform group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/generator/quotes"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              prefetch={false}
            >
              <Image
                src={quote}
                width={400}
                height={300}
                alt="Artwork 5"
                className="aspect-[4/3] w-full object-cover group-hover:blur-sm transition duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">Quotations</h3>
                  <p className="text-sm text-white/80">
                    Create custom quotations agreements for your business.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ClipboardIcon className="text-green-700 w-16 h-16 transform group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Document Generator. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ActivityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function DotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}

function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function OptionIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
}

function PresentationIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}

function ReceiptIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}
