import Tasks from "./tasks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task and Issue Tracker",
  description:
    "",
};

export default function TaskPage() {
  return (
    <div className=" px-20 py-5 bg-gradient-to-r from-[#fefae0] to-[#faedcd] h-screen">
      <div className="">
        <Tasks />
      </div>
    </div>
  );
}