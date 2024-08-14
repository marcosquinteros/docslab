import AppointmentSkeleton from "@/components/component/appointment-skeleton";
import { Appointments } from "@/components/component/appointments";
import { Quotes } from "@/components/component/quotes";
import { Suspense } from "react";

export default function quotes() {
  return (
    <main className="w-full  flex justify-center">
      {/* <Suspense fallback={<AppointmentSkeleton className="w-full"/>}> */}
        <Quotes />
      {/* </Suspense> */}
    </main>
  );
}
