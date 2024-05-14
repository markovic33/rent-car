"use client";
import React, { useState, useEffect } from "react";
import { getBrand } from "@/app/actions";
import CarCard from "../CarCard";

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

export default function Search() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  useEffect(() => {
    async function fetchCars() {
      try {
        const carsData = await getBrand();
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchCars();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  const filteredCars = cars.filter((car) => car.brand === selectedBrand);

  return (
    <div className="w-full mb-10">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-primary  font-semibold tracking-tight  text-2xl">
          Explore cars you like
        </h2>
        <form className="flex">
          <select
            name="carBrand"
            value={selectedBrand}
            onChange={handleChange}
            className="ml-4 px-2 py-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a brand</option>
            {cars.map((car) => (
              <option key={car.id} value={car.brand}>
                {car.brand}
              </option>
            ))}
          </select>
        </form>
      </div>
      {filteredCars.length > 0 && (
        <div className="rounded-lg bg-orange-300 grid items-center mx-auto justify-center lg:grid-cols-4 lg:items-center lg:justify-center lg:mx-auto md:grid-cols-2 gap-4 w-full h-full p-2">
          {filteredCars.map((car) => (
            <div key={car.id}>
              <CarCard
                carId={car.id}
                brand={car.brand}
                model={car.model || ""}
                imagePath={car.photo || ""}
                price={car.price || 0}
                fuel={car.fuel || ""}
                seats={car.seats || 0}
                stick={car.stick || ""}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
