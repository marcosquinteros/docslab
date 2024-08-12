import { Skeleton, SVGSkeleton } from "./Skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="flex w-full justify-between gap-6">
      <div className="border shadow-sm w-1/3">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="leading-none tracking-tight w-1/2">
            <Skeleton className="w-[192px] max-w-full" />
          </h3>
          <div className="pt-4">
            <div className="shrink-0 bg-border h-[1px] w-full"></div>
          </div>
        </div>
        <div className="p-6 pt-0 grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="leading-none">
                <Skeleton className="w-[32px] max-w-full" />
              </label>
              <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0"></div>
            </div>
            <div className="space-y-2">
              <label className="leading-none">
                <Skeleton className="w-[64px] max-w-full" />
              </label>
              <div className="flex h-10 w-full items-center justify-between border border-input px-3 py-2 [&amp;>span]:line-clamp-1">
                <span>
                  <Skeleton className="w-[120px] max-w-full" />
                </span>
                <SVGSkeleton className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[48px] max-w-full" />
            </label>
            <div className="flex h-10 w-full border border-input px-3 py-2 file:border-0"></div>
          </div>
          <div className="space-y-2">
            <label className="leading-none">
              <Skeleton className="w-[88px] max-w-full" />
            </label>
            <div className="flex min-h-[80px] w-full border border-input px-3 py-2"></div>
          </div>
        </div>
        <div className="items-center p-6 pt-0 flex justify-end">
          <div className="inline-flex items-center justify-center transition-colors h-10 px-4 py-2">
            <Skeleton className="w-[88px] max-w-full" />
          </div>
        </div>
      </div>
      <div className="border shadow-sm w-8/12 flex flex-col justify-between">
        <div>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="leading-none tracking-tight">
              <Skeleton className="w-[64px] max-w-full" />
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors">
                    <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Skeleton className="w-[32px] max-w-full" />
                    </th>
                    <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Skeleton className="w-[64px] max-w-full" />
                    </th>
                    <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Skeleton className="w-[48px] max-w-full" />
                    </th>
                    <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Skeleton className="w-[88px] max-w-full" />
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0"></tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className="py-4 px-6 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="w-[168px] max-w-full" />
              <span>
                <Skeleton className="w-[40px] max-w-full" />
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </>
);

const ExpensesSkeleton = () => (
  <div className="flex justify-center w-full h-full p-10">
    <LoadingSkeleton />
  </div>
);

export default ExpensesSkeleton;