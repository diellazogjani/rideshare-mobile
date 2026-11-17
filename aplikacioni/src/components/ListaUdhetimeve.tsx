
"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import KartaUdhetimi from "@/components/KartaUdhetimi";
import { ruajPreferiminAction } from "@/app/actions-preferimet";
import type { Udhetim } from "@/lib/udhetimet";

type Props = {
  udhetimet: Udhetim[];
  preferimetFillestare: string[];
};

export default function ListaUdhetimeve({
  udhetimet,
  preferimetFillestare,
}: Props) {
  const router = useRouter();

  const [preferimet, setPreferimet] = useState(preferimetFillestare);
  const [numri, setNumri] = useState(preferimetFillestare.length);
  const [nePritje, setNePritje] = useState<string[]>([]);
  const [mesazhet, setMesazhet] = useState<Record<string, string>>({});

  const klikimetAktive = useRef(new Set<string>());

  async function ruajPreferimin(udhetimId: string) {
    if (
      klikimetAktive.current.has(udhetimId) ||
      preferimet.includes(udhetimId)
    ) {
      return;
    }

    klikimetAktive.current.add(udhetimId);

    setPreferimet((paraprakisht) => [...paraprakisht, udhetimId]);
    setNumri((paraprakisht) => paraprakisht + 1);
    setNePritje((paraprakisht) => [...paraprakisht, udhetimId]);
    setMesazhet((paraprakisht) => ({
      ...paraprakisht,
      [udhetimId]: "Po ruhet...",
    }));

    try {
      const rezultati = await ruajPreferiminAction(udhetimId);

      if (rezultati !== "ruajtur") {
        setPreferimet((paraprakisht) =>
          paraprakisht.filter((id) => id !== udhetimId)
        );
        setNumri((paraprakisht) => paraprakisht - 1);

        const mesazhi =
          rezultati === "hyr"
            ? "Duhet te kyçesh per ta ruajtur."
            : rezultati === "udhetim"
              ? "Ky udhetim nuk ekziston."
              : "Nuk u ruajt. Provo perseri.";

        setMesazhet((paraprakisht) => ({
          ...paraprakisht,
          [udhetimId]: mesazhi,
        }));

        return;
      }

      setMesazhet((paraprakisht) => ({
        ...paraprakisht,
        [udhetimId]: "U ruajt me sukses!",
      }));

      router.refresh();
    } catch {
      setPreferimet((paraprakisht) =>
        paraprakisht.filter((id) => id !== udhetimId)
      );
      setNumri((paraprakisht) => paraprakisht - 1);

      setMesazhet((paraprakisht) => ({
        ...paraprakisht,
        [udhetimId]: "Nuk u ruajt. Provo perseri.",
      }));
    } finally {
      klikimetAktive.current.delete(udhetimId);
      setNePritje((paraprakisht) =>
        paraprakisht.filter((id) => id !== udhetimId)
      );
    }
  }

  return (
    <section>
      <p>Te preferuarat: {numri}</p>

      <div className="trip-list">
        {udhetimet.map((udhetim) => (
          <KartaUdhetimi
            key={udhetim.id}
            udhetimi={udhetim}
            eshtePreferuar={preferimet.includes(udhetim.id)}
            nePritje={nePritje.includes(udhetim.id)}
            mesazhi={mesazhet[udhetim.id] ?? ""}
            ruajPreferimin={ruajPreferimin}
          />
        ))}
      </div>
    </section>
  );
}
