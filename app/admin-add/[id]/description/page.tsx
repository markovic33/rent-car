"use server";

import { createDescriptionPage } from "@/app/actions";
import { CreateBottomBar } from "@/app/components/Buttons/CreateBottomBar";

import { CreateSubmit } from "@/app/components/Buttons/SubmitButtins";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function DescriptionRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="">
      <div className="w-2/3 mx-auto">
        <h2 className="mt-10 text-3xl font-semibold tracking-tight ">
          Car description
        </h2>
      </div>

      <form action={createDescriptionPage}>
        <input type="hidden" name="carId" value={params.id} />
        <div className="w-3/5 mx-auto mt-10 ">
          <Label className="font-medium text-xl">Model of Car</Label>
          <Input
            required
            type="text"
            name="carModel"
            className="w-full bg-white "
            placeholder="example: 640"
          />
        </div>

        <div className="w-3/5 mx-auto mt-10 mb-36 gap-y-4 ">
          <div className="flex items-center gap-x-4  mx-auto">
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Type of fuel</Label>
              <Input
                required
                type="text"
                name="fuel"
                className="w-full bg-white "
                placeholder="example: diesel"
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Average Consumption</Label>
              <Input
                required
                type="text"
                name="avgFuel"
                className="w-full bg-white "
                placeholder="example: 7L"
              />
            </div>
          </div>

          <div className="flex items-center gap-x-4 mt-10 mx-auto">
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Number of Seats</Label>
              <Input
                required
                type="number"
                name="seats"
                className="w-full bg-white "
                placeholder="example: 5"
                min={2}
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Type of stick</Label>
              <Input
                required
                type="text"
                name="carStick"
                className="w-full bg-white "
                placeholder="example: manuel"
              />
            </div>
          </div>

          <div className="flex items-center gap-x-4 mt-10 mx-auto">
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Price per day</Label>
              <Input
                required
                type="number"
                name="price"
                className="w-full bg-white "
                placeholder="Price in USD "
                min={10}
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="font-medium text-xl">Image</Label>
              <Input
                required
                type="file"
                name="img"
                className="w-full bg-white "
              />
            </div>
          </div>
        </div>

        <CreateBottomBar />
      </form>
    </div>
  );
}
