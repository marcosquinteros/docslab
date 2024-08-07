import { Aside } from "@/components/component/Aside";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Aside />
      {children}
    </div>
  );
}
