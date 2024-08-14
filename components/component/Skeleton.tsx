interface SkeletonProps {
  className: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => (
  <div aria-live="polite" aria-busy="true" className={className}>
    <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
      ‌
    </span>
    <br />
  </div>
);

const SVGSkeleton: React.FC<SkeletonProps> = ({ className }) => (
  <svg
    className={className + " animate-pulse rounded bg-gray-300"}
  />
);

export { Skeleton, SVGSkeleton };
