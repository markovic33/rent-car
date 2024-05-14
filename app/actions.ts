"use server";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { supabase } from "./lib/supabase";

export async function createCar({ userId }: { userId: string }) {
  const data = await prisma.car.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.car.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/admin-add/${data.id}/type`);
  } else if (
    !data.addedType &&
    !data.addedBrand &&
    !data.addedDescription &&
    !data.addedAdress
  ) {
    return redirect(`/admin-add/${data.id}/type`);
  } else if (data.addedType && !data.addedBrand) {
    return redirect(`/admin-add/${data.id}/brand`);
  } else if (data.addedType && data.addedBrand && !data.addedDescription) {
    return redirect(`/admin-add/${data.id}/description`);
  } else if (
    data.addedType &&
    data.addedBrand &&
    data.addedDescription &&
    !data.addedAdress
  ) {
    return redirect(`/admin-add/${data.id}/adres`);
  } else if (
    data.addedType &&
    data.addedBrand &&
    data.addedDescription &&
    data.addedAdress
  ) {
    const data = await prisma.car.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/admin-add/${data.id}/type`);
  }
}

export async function createTypePage(formData: FormData) {
  const carId = formData.get("carId") as string;
  const carType = formData.get("type") as string;

  const data = await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      type: carType,
      addedType: true,
    },
  });
  return redirect(`/admin-add/${carId}/brand`);
}

export async function createBrandPage(formData: FormData) {
  const carId = formData.get("carId") as string;
  const carBrand = formData.get("brand") as string;

  const data = await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      brand: carBrand,
      addedBrand: true,
    },
  });

  return redirect(`/admin-add/${carId}/description`);
}

export async function createDescriptionPage(formData: FormData) {
  const carId = formData.get("carId") as string;
  const carModel = formData.get("carModel") as string;
  const carFuel = formData.get("fuel") as string;
  const carAvgFuel = formData.get("avgFuel") as string;
  const carSeats = formData.get("seats");
  const carStick = formData.get("carStick") as string;
  const carPrice = formData.get("price");
  const carImg = formData.get("img") as File;

  const { data: imageData } = await supabase.storage
    .from("images")
    .upload(`${carImg.name}-${new Date()}`, carImg, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  const data = await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      model: carModel,
      fuel: carFuel,
      avgFuel: carAvgFuel,
      seats: Number(carSeats),
      stick: carStick,
      price: Number(carPrice),
      photo: imageData?.path,
      addedDescription: true,
    },
  });
  return redirect(`/admin-add/${carId}/adres`);
}

export async function createAdressPage(formData: FormData) {
  const carId = formData.get("carId") as string;
  const carAdress = formData.get("carAdress") as string;

  const data = await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      adress: carAdress,
      addedAdress: true,
    },
  });

  return redirect("/");
}

export async function createReservation(formData: FormData) {
  const userId = formData.get("userId") as string;
  const carId = formData.get("carId") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const location = formData.get("location") as string;

  const data = await prisma.reservation.create({
    data: {
      userId: userId,
      carId: carId,
      startDate: startDate,
      endDate: endDate,
      location: location,
    },
  });

  return redirect("/");
}

export async function listingReservation({ resId }: { resId: string }) {
  const data = await prisma.reservation.findMany({
    where: {
      id: resId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return redirect(`/admin-listing`);
}

export async function searchFilter(formData: FormData) {
  const brandCar = formData.get("brandCar") as string;
  const priceOrder = formData.get("priceOrder");
  const data = await prisma.car.findMany({
    where: {
      brand: brandCar !== "" ? brandCar : undefined,
    },
    orderBy: {
      price:
        priceOrder === "min to max"
          ? "asc"
          : priceOrder === "max to min"
          ? "desc"
          : undefined,
    },
  });
  return data;
}

interface Car {
  id: string;
  brand: string;
  model: string | null;
  photo: string | null;
  price: number | null;
  fuel: string | null;
  seats: number | null;
  stick: string | null;
  // Add other properties as needed
}

export async function getBrand(): Promise<Car[]> {
  const data = await prisma.car.findMany();
  return data.map((item) => ({
    id: item.id,
    brand: item.brand || "", // Handle null value for brand
    model: item.model || null,
    photo: item.photo || null,
    price: item.price || null,
    fuel: item.fuel || null,
    seats: item.seats || null,
    stick: item.stick || null,
    // Add other properties as needed
  }));
}
