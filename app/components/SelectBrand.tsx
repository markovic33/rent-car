"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { car_brands } from "@/lib/carArrays";
import Image from "next/image";
import { useState } from "react";

export default function SelectBrand() {
  const [slevtedBrand, setSelectedBrand] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="w-3/5 mx-auto mt-10 mb-36 ">
      <div className="grid grid-cols-3 gap-x-10 items-center justify-center gap-y-2 mx-auto ">
        <input type="hidden" name="brand" value={slevtedBrand as string} />

        {car_brands.map((car) => (
          <div className="" key={car.id}>
            <Card
              onClick={() => setSelectedBrand(car.brand)}
              className={
                slevtedBrand === car.brand ? "border-2 border-primary " : ""
              }
            >
              <CardHeader className="flex items-center gap-x-2">
                <Image
                  src={car.img}
                  alt={car.brand}
                  height={32}
                  width={32}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="">{car.brand}</h3>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
