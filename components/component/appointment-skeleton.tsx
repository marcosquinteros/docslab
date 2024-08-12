import { Skeleton, SVGSkeleton } from "./Skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="flex gap-3 w-full">
      <div className="border shadow-sm max-w-5xl pt-10">
        <div className="p-6 pt-0 grid gap-4">
          <div>
            <h2>
              <Skeleton className="w-[272px] max-w-full" />
            </h2>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div>
                <label className="block mb-1">
                  <Skeleton className="w-[72px] max-w-full" />
                </label>
              </div>
              <SVGSkeleton className="w-[50px] h-[50px]" />
              <div className="hidden"></div>
              <div className="flex w-full justify-end">
                <div className="p-1">
                  <SVGSkeleton className="w-[16px] h-[16px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="leading-none">
                <Skeleton className="w-[32px] max-w-full" />
              </label>
              <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0"></div>
            </div>
            <div className="space-y-2">
              <label className="leading-none">
                <Skeleton className="w-[32px] max-w-full" />
              </label>
              <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0"></div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[88px] max-w-full" />
            </label>
            <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
              <Skeleton className="w-[136px] max-w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[104px] max-w-full" />
            </label>
            <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
              <Skeleton className="w-[152px] max-w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[64px] max-w-full" />
            </label>
            <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
              <Skeleton className="w-[112px] max-w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[128px] max-w-full" />
            </label>
            <div className="flex h-10 w-full items-center justify-between border border-input px-3 py-2 [&amp;>span]:line-clamp-1">
              <span>
                <Skeleton className="w-[184px] max-w-full" />
              </span>
              <SVGSkeleton className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="border shadow-sm w-full">
        <div>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-center">
              <h3 className="leading-none tracking-tight">
                <Skeleton className="w-[192px] max-w-full" />
              </h3>
            </div>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="p-6 grid gap-4 pt-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <Skeleton className="w-[32px] max-w-full" />
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <Skeleton className="w-[32px] max-w-full" />
                </p>
                <p></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <Skeleton className="w-[88px] max-w-full" />
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <Skeleton className="w-[128px] max-w-full" />
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <p>
                <Skeleton className="w-[104px] max-w-full" />
              </p>
              <p></p>
            </div>
            <div className="shrink-0 bg-border h-[1px] w-full"></div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mx-5">
          <div className="inline-flex items-center justify-center transition-colors h-10 px-4 py-2">
            <Skeleton className="w-[64px] max-w-full" />
          </div>
        </div>
      </div>
    </div>
  </>
);

const AppointmentSkeleton = () => (
  <div className="flex justify-center w-full h-full p-10">
    <LoadingSkeleton />
  </div>
);

export default AppointmentSkeleton;