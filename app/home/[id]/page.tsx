import { createReservation } from "@/app/actions";
import CreateReservationButton from "@/app/components/Buttons/CreateReservationButton";
import CarPageIdLeft from "@/app/components/CarPageIdLeft";
import { SelectCalendar } from "@/app/components/CarPageIdRightCalendar";
import { SelectAddress } from "@/app/components/CarPageIdRightSelect";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { addresses } from "@/lib/carArrays";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function getData(carId: string) {
  const data = await prisma.car.findUnique({
    where: {
      id: carId,
    },
    select: {
      photo: true,
      model: true,
      brand: true,
      price: true,
      fuel: true,
      seats: true,
      stick: true,
      avgFuel: true,
      adress: true,
      Reservation: {
        where: {
          carId: carId,
        },
      },
    },
  });
  return data;
}

export default async function CarPage({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-[75%] mx-auto border border-primary my-[50px] px-2 py-6 rounded-lg shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-6 mx-auto">
        <div className="lg:flex-3">
          <CarPageIdLeft
            brand={data?.brand as string}
            model={data?.model as string}
            photo={data?.photo as string}
            price={data?.price as number}
            fuel={data?.fuel as string}
            avgFuel={data?.avgFuel as string}
            seats={data?.seats as number}
            stick={data?.stick as string}
          />
        </div>

        <div className="w- flex flex-col">
          <div className="lg:flex-1">
            <form
              action={createReservation}
              className="flex flex-col w-full items-center mt-4 gap-y-4"
            >
              <SelectAddress />
              <input type="hidden" name="carId" value={params.id} />
              <input type="hidden" name="userId" value={user?.id} />

              <SelectCalendar reservation={data?.Reservation} />

              {user?.id ? (
                <CreateReservationButton />
              ) : (
                <Button className="w-full">
                  <Link href="/api/auth/login">Make a reservation</Link>
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
