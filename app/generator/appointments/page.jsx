import AppointmentSkeleton from "@/components/component/appointment-skeleton";
import { Appointments } from "@/components/component/appointments";
import { Suspense } from "react";

export default function appointments() {
  return (
    <main className="w-full h-screen flex justify-center">
      <Suspense fallback={<AppointmentSkeleton className="w-full"/>}>
        <Appointments />
      </Suspense>
    </main>
  );
}
