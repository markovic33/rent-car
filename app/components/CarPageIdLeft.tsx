import { Armchair, Fuel, Joystick } from "lucide-react";
import Image from "next/image";

interface CarPageProps {
  brand: string;
  model: string;
  price: number;
  photo: string;
  avgFuel: string;
  fuel: string;
  seats: number;
  stick: string;
}

export default function CarPageIdLeft({
  brand,
  model,
  fuel,
  seats,
  stick,
  price,
  avgFuel,
  photo,
}: CarPageProps) {
  return (
    <div className="flex flex-col w-full ">
      <Image
        src={`https://qhyyfsfmibewapzcrviz.supabase.co/storage/v1/object/public/images/${photo}`}
        alt={photo ?? "Brand"}
        width={500}
        height={500}
        className="object-contain h-full"
      />
      <div className="w-full flex flex-col px-10 justify-start my-4">
        <div className="flex flex-col lg:flex-row lg:gap-x-8 gap-x-2 tracking-tight line-clamp-1">
          <h2 className=" line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Brand:{" "}
            <span className="ml-2 font-semibold text-black">{brand}</span>
          </h2>
          <h2 className="line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Model:{" "}
            <span className=" ml-2 font-semibold text-black">{model}</span>
          </h2>{" "}
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8  gap-x-2 tracking-tight line-clamp-1">
          <h2 className=" line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Price:{" "}
            <span className=" ml-2 font-semibold text-black">
              {price} / <span className="text-primary">per day</span>
            </span>
          </h2>
          <h2 className=" line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Avg Cons :{" "}
            <span className=" ml-2 font-semibold text-black">{avgFuel} </span>
          </h2>
        </div>
      </div>

      <div className="hidden lg:flex w-full px-10  items-center justify-between mt-4">
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

      <div className="lg:hidden w-full flex flex-col px-10 justify-start mb-4 ">
        <div className="flex flex-col lg:flex-row lg:gap-x-8 gap-x-2 tracking-tight line-clamp-1">
          <h2 className=" line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Fuel: <span className="ml-2 font-semibold text-black">{fuel}</span>
          </h2>
          <h2 className="line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Avg Cons:{" "}
            <span className=" ml-2 font-semibold text-black">{avgFuel}</span>
          </h2>{" "}
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8  gap-x-2 tracking-tight line-clamp-1">
          <h2 className=" line-clamp-1 font-semibold text-muted-foreground text-sm lg:text-xl">
            Stick:{" "}
            <span className=" ml-2 font-semibold text-black">{stick}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
