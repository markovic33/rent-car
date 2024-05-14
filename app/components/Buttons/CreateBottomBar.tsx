import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CreateSubmit } from "./SubmitButtins";

export const CreateBottomBar = () => {
  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
      <div className="flex items-center h-full justify-between mx-auto px-5 lg:px-10 ">
        <Button className="" variant="outline" size="lg" asChild>
          <Link href={"/"}>Cancel</Link>
        </Button>
        <CreateSubmit />
      </div>
    </div>
  );
};
