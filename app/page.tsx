import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroBar from "./components/Hero/Hero";
import ListCars from "./components/ListingCars";

export default function Home({ params }: { params: { carId: string } }) {
  return (
    <div className="">
      <HeroBar />
      <ListCars />
    </div>
  );
}
