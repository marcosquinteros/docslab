import { Skeleton, SVGSkeleton } from "./Skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="p-6 w-full">
      <div className="flex gap-3">
        <div className="border shadow-sm max-w-5xl p-5">
          <div className="p-6 pt-0 grid">
            <div>
              <h2 className="mb-4">
                <Skeleton className="w-[136px] max-w-full" />
              </h2>
            </div>
            <div className="shrink-0 bg-border h-[1px] w-full"></div>
            <form className="space-y-4">
              <div className="relative mt-5">
                <label className="block mb-1">
                  <Skeleton className="w-[72px] max-w-full" />
                </label>
                <div className="flex items-baseline">
                  <div>
                    <SVGSkeleton className="w-[50px] h-[50px]" />
                    <div className="hidden"></div>
                  </div>
                  <div>
                    <div className="p-1">
                      <SVGSkeleton className="w-[16px] h-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-1">
                  <Skeleton className="w-[104px] max-w-full" />
                </label>
                <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
                  <Skeleton className="w-[152px] max-w-full" />
                </div>
              </div>
              <div>
                <label className="block mb-1">
                  <Skeleton className="w-[88px] max-w-full" />
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
                      <Skeleton className="w-[72px] max-w-full" />
                    </div>
                    <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
                      <Skeleton className="w-[64px] max-w-full" />
                    </div>
                    <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0">
                      <Skeleton className="w-[40px] max-w-full" />
                    </div>
                    <div className="inline-flex items-center justify-center transition-colors border border-input h-10 w-10">
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center transition-colors border border-input h-10 px-4 py-2 mt-2">
                  <Skeleton className="w-[64px] max-w-full" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full border p-5">
          <h2 className="mb-4">
            <Skeleton className="w-[120px] max-w-full" />
          </h2>
          <div className="w-full items-center">
            <div className="border shadow-sm p-6 w-full">
              <div className="flex justify-between items-center mb-4">
                <h3>
                  <Skeleton className="w-[56px] max-w-full" />
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>
                    <Skeleton className="w-[72px] max-w-full" />
                  </span>
                  <span></span>
                </div>
                <div className="shrink-0 bg-border h-[1px] w-full"></div>
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="w-[32px] max-w-full" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="w-[24px] max-w-full" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="w-[40px] max-w-full" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="w-[40px] max-w-full" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="border-b px-4 py-2">
                        <Skeleton className="w-[48px] max-w-full" />
                      </td>
                      <td className="border-b px-4 py-2">
                        <Skeleton className="w-[14px] max-w-full" />
                      </td>
                      <td className="border-b px-4 py-2">
                        <Skeleton className="w-[40px] max-w-full" />
                      </td>
                      <td className="border-b px-4 py-2">
                        <Skeleton className="w-[40px] max-w-full" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="shrink-0 bg-border h-[1px] w-full"></div>
                <div className="flex justify-between">
                  <span>
                    <Skeleton className="w-[48px] max-w-full" />
                  </span>
                  <span>
                    <Skeleton className="w-[40px] max-w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end my-6">
            <div className="inline-flex items-center justify-center transition-colors h-10 px-4 py-2">
              <Skeleton className="w-[64px] max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ReceiptSkeleton = () => (
    <div className="flex justify-center w-full h-full p-10">
      <LoadingSkeleton />
    </div>
  );
  
  export default ReceiptSkeleton;