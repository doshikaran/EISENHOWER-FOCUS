import Box from "@/components/box";
import Header from "@/components/header";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className=" h-screen bg-gradient-to-r from-[#fefae0] to-[#faedcd]">
      <main className="mb-8">
        <div className="max-w-screen-xl mx-auto py-3">
          <h2 className="text-xl font-bold tracking-widest text-[#344e41]">
            Welcome to Eisenhower Focus !{" "}
          </h2>
          <div className="mt-10 w-3/5">
            <p className="text-muted-foreground italic tracking-widest font-medium text-sm">
              I have two kinds of problems, the urgent and the important. The
              urgent are not important, and the important are never urgent!
            </p>
            <p className="text-right italic tracking-widest text-sm">
              - Dwight D. Eisenhower
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <Box />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
