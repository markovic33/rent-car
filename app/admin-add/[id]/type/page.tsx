import { createTypePage } from "@/app/actions";
import { CreateBottomBar } from "@/app/components/Buttons/CreateBottomBar";
import SelectedType from "@/app/components/SelectedType";

import { Label } from "@/components/ui/label";

export default function TypeRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-2/3 items-center justify-center mt-10 mx-auto">
        <Label className="font-medium text-xl">Select Type Car</Label>
      </div>
      <form action={createTypePage}>
        <input type="hidden" name="carId" value={params.id} />
        <SelectedType />

        <CreateBottomBar />
      </form>
    </>
  );
}
