import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode, Suspense } from "react";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}

function Navbar() {
  return (
    <div className="flex h-12 shadow bg-transparent z-10 ">
      <nav className="flex gap-4 container">
        <Link href={"/"} className="mr-auto text-lg hover:underline px-2">
          home
        </Link>
        <Suspense>
          <SignedIn>
            <Link
              href={"/courses"}
              className="hvoer:bg-accent/10 flex items-center px-2 "
            >
              My courses
            </Link>
            <Link
              href={"/purchases"}
              className="hvoer:bg-accent/10 flex items-center px-2 "
            >
              My purchases
            </Link>
            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: "100%", height: "100%" },
                  },
                }}
              ></UserButton>
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
            <SignedOut>
                <Button className="self-center" asChild>
                    <SignInButton>Sign In</SignInButton>
                </Button>
            </SignedOut>
        </Suspense>
      </nav>
    </div>
  );
}
