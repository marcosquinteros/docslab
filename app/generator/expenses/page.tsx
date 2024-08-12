
import { Expenses } from "@/components/component/expenses";
import ExpensesSkeleton from "@/components/component/expenses-skeleton";
import { Suspense } from "react";

export default function expenses() {
  return (
    <main className="w-full  flex justify-center">
      <Suspense fallback={<ExpensesSkeleton/>}>

        <Expenses />
      </Suspense>
    </main>
  );
}
