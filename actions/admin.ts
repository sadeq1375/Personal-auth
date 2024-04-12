"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export const admin = async () => {
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  } else {
    return { error: "Forbidden Server Action!" };
  }
};
