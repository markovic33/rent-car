import prisma from "@/lib/db";

import CarCard from "./CarCard";
import { unstable_noStore as noStore } from "next/cache";

interface iAppProps {
  image: string;
  location: string;
  price: number;
  homeId: string;
  pathName: string;
}

async function getData() {
  noStore();
  const cars = await prisma.car.findMany({
    where: {
      addedType: true,
      addedBrand: true,
      addedDescription: true,
      addedAdress: true,
    },
    select: {
      photo: true,
      id: true,
      model: true,
      brand: true,
      price: true,
      fuel: true,
      seats: true,
      stick: true,
    },
  });
  return cars;
}

export default async function ListCars() {
  const data = await getData();

  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4">
        {data.map((car) => (
          <CarCard
            key={car.id}
            carId={car.id}
            brand={car.brand as string}
            model={car.model as string}
            imagePath={car.photo as string}
            price={car.price as number}
            fuel={car.fuel as string}
            seats={car.seats as number}
            stick={car.stick as string}
          />
        ))}
      </div>
    </>
  );
}
