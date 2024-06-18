import { Button } from "@/components/button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-[#fefae0] to-[#faedcd]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" font-semibold text-4xl text-center uppercase tracking-wider mb-10 text-[#243748]">
          Welcome to
          <span className=" text-[#243748]"> Eisenhower Focus !</span>
        </h1>
        <h1 className="font-semibold text-xl text-center  text-gray-500 tracking-widest">
          Streamline Your Tasks, Boost Your Productivity.
        </h1>
        <div className="mt-8"></div>

        <div className="flex justify-center">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-[#344e41] text-white tracking-wider uppercase">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2} />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button className="bg-[#344e41] text-white tracking-wider uppercase">
                Go to Dashboard
                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2} />
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
