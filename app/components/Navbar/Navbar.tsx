import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-b-gray-400">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 py-2">
        <Link href="/" className="flex p-1 items-center justify-center gap-x-4">
          <Image
            src="/logo1.png"
            alt="logo"
            width={48}
            height={48}
            className="w-18 hidden lg:block "
          />
          <Image
            src="/logo1.png"
            alt="logo"
            width={48}
            height={48}
            className="w-12 block lg:hidden "
          />
          <p className="font-medium text-primary">Rent Luxury Car</p>
        </Link>
        <UserNav />
      </div>
    </nav>
  );
}
