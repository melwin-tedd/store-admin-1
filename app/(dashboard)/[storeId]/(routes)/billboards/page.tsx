import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { BillboardClient } from "./components/billboardClient";

const BillboardsPage = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
