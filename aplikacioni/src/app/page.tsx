
import Link from "next/link";
import ListaUdhetimeve from "@/components/ListaUdhetimeve";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";
import { lexoPreferimet } from "@/lib/preferimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  let udhetimet: Udhetim[];
  let preferimetFillestare: string[];

  try {
    udhetimet = await lexoUdhetimet();
    preferimetFillestare = await lexoPreferimet();
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p><Link href="/panel">Hyr / Paneli im</Link></p>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <Link className="action" href="/">Provo përsëri</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>RideShare · Udhëtimet për AAB</h1>
      <p><Link href="/panel">Hyr / Paneli im</Link></p>
      <p>Burimi: Neon · të dhëna fiktive për ushtrime</p>

      {udhetimet.length === 0 ? (
        <p>Nuk ka udhëtime për momentin.</p>
      ) : (
        <ListaUdhetimeve
          udhetimet={udhetimet}
          preferimetFillestare={preferimetFillestare}
        />
      )}
    </main>
  );
}
