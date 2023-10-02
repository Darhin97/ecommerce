import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //check user
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  //check if there is a store
  const store = await prismadb.store.findFirst({
    where: {
      userId: userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  //otherwise
  return <>{children}</>;
}
