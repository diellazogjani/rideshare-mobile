
"use server";

import { revalidatePath } from "next/cache";
import { ruajPreferimin } from "@/lib/preferimet";

export async function ruajPreferiminAction(
  udhetimId: string
): Promise<"ruajtur" | "hyr" | "udhetim" | "gabim"> {
  try {
    if (
      process.env.NODE_ENV === "development" &&
      process.env.JAVA09_SIMULO_GABIM === "1"
    ) {
      return "gabim";
    }

    const rezultati = await ruajPreferimin(udhetimId);

    if (rezultati === "ruajtur") {
      revalidatePath("/");
      revalidatePath(`/udhetimi/${udhetimId}`);
    }

    return rezultati;
  } catch {
    return "gabim";
  }
}
