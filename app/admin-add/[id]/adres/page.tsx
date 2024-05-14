"use client";
import { createAdressPage } from "@/app/actions";
import { CreateBottomBar } from "@/app/components/Buttons/CreateBottomBar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addresses } from "@/lib/carArrays";
import { useState } from "react";

export default function AdresRoute({ params }: { params: { id: string } }) {
  const [locationValue, setLocationValue] = useState("");

  return (
    <>
      {" "}
      <div className="">
        <div className="w-2/3 mx-auto mt-10 text-3xl font-semibold">
          <h2 className="">Where is car located?</h2>
        </div>

        <form action={createAdressPage}>
          <input type="hidden" name="carId" value={params.id} />
          <input type="hidden" name="carAdress" value={locationValue} />
          <div className="w-3/5 mx-auto">
            <div className="mb-5">
              <Select
                required
                onValueChange={(value) => setLocationValue(value)}
              >
                <SelectTrigger className="w-full bg-white mt-10">
                  <SelectValue placeholder="Select adress" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Adress</SelectLabel>
                    {addresses.map((item) => (
                      <SelectItem key={item.id} value={item.name}>
                        {item.city}, {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CreateBottomBar />
        </form>
      </div>
    </>
  );
}
