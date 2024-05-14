import { createBrandPage } from "@/app/actions";
import { CreateBottomBar } from "@/app/components/Buttons/CreateBottomBar";
import SelectBrand from "@/app/components/SelectBrand";

import { Label } from "@/components/ui/label";

export default function BrandRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-2/3 items-center justify-center mt-10 mx-auto">
        <Label className="font-medium text-xl">Select car brand</Label>
      </div>
      <form action={createBrandPage}>
        <input type="hidden" name="carId" value={params.id} />
        <SelectBrand />

        <CreateBottomBar />
      </form>
    </>
  );
}
