"use client";
import { useState } from "react";
import { addresses } from "@/lib/carArrays";

export function SelectAddress() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full">
      <label>Select an Address</label>
      <select
        className="w-full rounded py-1 px-2"
        onChange={handleChange}
        value={selectedValue}
      >
        <option disabled defaultValue="Select an adress">
          Select an address
        </option>
        {addresses.map((item) => (
          <option key={item.id} value={item.address as string}>
            {item.address as string}
          </option>
        ))}
      </select>
      <input type="hidden" name="location" value={selectedValue as string} />
    </div>
  );
}
