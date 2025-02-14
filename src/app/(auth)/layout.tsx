
import { ReactNode } from "react";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
   <div className="min-h-screen flex flex-col justify-center items-center">
    {children}
   </div>
  );
}

