"use client";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastSimple() {
  const handleButtonClick = () => {
    toast.success("Your reservation successfully completed");
  }; // Displays a success message

  return (
    <Button className="w-full bg-primary" onClick={handleButtonClick}>
      Make a reservation
    </Button>
  );
}
