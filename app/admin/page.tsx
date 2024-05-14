"use server";
import { Button } from "@/components/ui/button";
import { createCar } from "../actions";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function AdminDashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createCarWithId = createCar.bind(null, {
    userId: user?.id as string,
  });
  return (
    <>
      {user ? (
        <>
          <h1 className="text-3xl font-bold mt-10 px-10">Admin Dashboard</h1>
          <div className="w-2/3 mt-20 flex items-center justify-between mx-auto px-10">
            <div>
              <form action={createCarWithId}>
                <Button
                  type="submit"
                  className="bg-primary px-6 py-2 rounded-lg"
                >
                  Add Car
                </Button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="w-1/3 mt-20 flex items-center justify-between mx-auto px-4">
          <Button size="lg">
            <RegisterLink className="w-full">Register</RegisterLink>
          </Button>
          <Button size="lg">
            <LoginLink className="w-full">Login</LoginLink>
          </Button>
        </div>
      )}
    </>
  );
}
