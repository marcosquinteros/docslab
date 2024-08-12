import { ReactNode } from "react";
import { Aside } from "@/components/component/Aside";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Aside />
      {children}
    </div>
  );
}