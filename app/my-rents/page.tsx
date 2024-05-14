import CarCard from "../components/CarCard";
import prisma from "@/lib/db";
import { NoItems } from "../components/NoItems";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import CarCardRents from "../components/CarCardRents";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.reservation.findMany({
    where: {
      userId: userId,
    },
    select: {
      Car: {
        select: {
          id: true,
          model: true,
          brand: true,
          price: true,
          fuel: true,
          seats: true,
          stick: true,
          photo: true,
        },
      },
      startDate: true,
      endDate: true,
      location: true,
    },
  });
  return data;
}

export default async function MyReservationRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) return redirect("/api/auth/login");
  const data = await getData(user.id);

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">
        Your Reservations
      </h2>

      {data.length === 0 ? (
        <NoItems
          title="You dont have any reservations"
          description="Please add your reservations to see them right here "
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <>
              <CarCardRents
                key={item.Car?.id}
                carId={item.Car?.id as string}
                brand={item.Car?.brand as string}
                model={item.Car?.model as string}
                imagePath={item.Car?.photo as string}
                price={item.Car?.price as number}
                fuel={item.Car?.fuel as string}
                seats={item.Car?.seats as number}
                stick={item.Car?.stick as string}
                location={item.location as string}
                startDate={
                  item.startDate
                    ? new Date(item.startDate).toLocaleDateString()
                    : ""
                }
                endDate={
                  item.endDate
                    ? new Date(item.endDate).toLocaleDateString()
                    : ""
                }
              />
            </>
          ))}
        </div>
      )}
    </section>
  );
}
