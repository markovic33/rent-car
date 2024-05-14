import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Armchair, Fuel, Joystick } from "lucide-react";
import { Button } from "@/components/ui/button";

interface carProps {
  carId: string;
  imagePath: string;
  model: string;
  brand: string;
  price: number;
  fuel: string;
  seats: number;
  stick: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export default function CarCard({
  carId,
  fuel,
  brand,
  imagePath,
  model,
  price,
  seats,
  stick,
  startDate,
  endDate,
  location,
}: carProps) {
  return (
    <Link href={`/home/${carId}`}>
      <Card className="  relative group hover:shadow-xl hover:scale-95">
        <CardHeader className="relative h-[200px] ">
          <Image
            src={`https://qhyyfsfmibewapzcrviz.supabase.co/storage/v1/object/public/images/${imagePath}`}
            alt={brand ?? "Brand"}
            fill
            className="object-contain h-full"
          />
        </CardHeader>
        <CardContent className="mb-4">
          <div className="w-full flex flex-col items-center justify-start">
            <div className="flex items-center gap-x-2 tracking-tight line-clamp-1">
              <h2 className=" line-clamp-1 font-medium text-sm lg:text-xl">
                {brand}
              </h2>
              <h2 className="line-clamp-1 font-semibold text-sm lg:text-xl">
                {model}
              </h2>{" "}
            </div>
            <div className="">
              <h2 className=" text-sm lg:text-xl">
                {price}$ /<span className="text-primary"> Per day</span>{" "}
              </h2>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <>
            <div className="w-full flex items-center justify-between px-2">
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <Fuel size={16} />
                <p className="text-sm text-muted-foreground">{fuel}</p>
              </div>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <Armchair size={16} />
                <p className=" text-sm text-muted-foreground">{seats}</p>
              </div>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <Joystick size={16} />
                <p className="text-sm text-muted-foreground">{stick}</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <h2>{location}</h2>
              <h2>{startDate}</h2>
              <h2>{endDate}</h2>
            </div>
          </>
        </CardFooter>
        <Button className="absolute w-full h-[60px] bottom-3 right-0 bg-gray-800 hover:bg-primary text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Make reservation
        </Button>
      </Card>
    </Link>
  );
}
