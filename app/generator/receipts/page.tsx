import { Receipt } from "@/components/component/receipt";
import ReceiptSkeleton from "@/components/component/receipt-skeleton";
import { Suspense } from "react";

export default function receipts() {
  return (
    <main className="w-full h-screen">
      <Suspense fallback={<ReceiptSkeleton />}>
        <Receipt />
      </Suspense>
    </main>
  );
}
