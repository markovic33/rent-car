import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full mx-auto border-t mt-10 border-t-gray-400 py-4">
      <div className=" mx-auto flex flex-col gap-y-2 justify-center items-center">
        <div className="flex items-center lg:mr-8">
          <div className="mx-4">Contact</div>
          <div className="mx-4">Rents</div>
          <div className="mx-4">Cars</div>
        </div>
        <div className="mt-4 lg:mt-0">
          <h2 className="text-center">All rights reserved Rent Car 20204.</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
