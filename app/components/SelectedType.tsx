"use client";

import { Card, CardHeader } from "@/components/ui/card";

import { carTypes } from "@/lib/carArrays";
import Image from "next/image";
import { useState } from "react";

export default function SelectedType() {
  const [selectedType, setSeletedType] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="w-2/3 mx-auto mt-10 ">
      <div className="grid grid-cols-3 gap-x-10 items-center justify-center mx-auto ">
        <input type="hidden" name="type" value={selectedType as string} />
        {carTypes.map((car) => (
          <div className="cursor-pointer" key={car.id}>
            <Card
              onClick={() => setSeletedType(car.name)}
              className={
                selectedType === car.name ? "border-2 border-primary " : ""
              }
            >
              <CardHeader className="flex items-center ">
                <Image
                  src={car.img}
                  alt={car.name}
                  height={32}
                  width={32}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="">{car.name}</h3>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
