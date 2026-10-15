import Link from "next/link";
import Hyrja from "@/components/Hyrja";
import { profiliIm } from "@/lib/lejet";
import { ruajOren } from "./actions";

export const dynamic = "force-dynamic";

const mesazhet: Record<string, string> = {
  hyr: "Hyr në llogari para se të ndryshosh udhëtimin.",
  ndaluar: "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.",
  fushe: "Shkruaj një orë të vlefshme, p.sh. 08:25.",
  ruajtur: "Ora u ruajt me sukses.",
  databaza: "Nuk u lidhëm me databazën. Kontrollo Neon dhe provo përsëri.",
};

export default async function Panel({
  searchParams,
}: {
  searchParams: Promise<{ m?: string }>;
}) {
  const { m } = await searchParams;
  let p;

  try {
    p = await profiliIm();
  } catch {
    return (
      <main className="app-shell">
        <h1>Paneli im</h1>
        <p role="alert">{mesazhet.databaza}</p>
        <Link href="/">Kthehu te udhëtimet</Link>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <h1>Paneli im</h1>

      {m && mesazhet[m] && <p role="status">{mesazhet[m]}</p>}

      {!p ? (
        <p>Hyr me GitHub për të parë profilin tënd.</p>
      ) : (
 
















            <>
            <p>
            Përshëndetje, { p.emri }.Roli yt është: <strong>{ p.roli } </strong>.
                </p>
                <p>
             ID ime GitHub: <code>{ p.id } </code>
            </p>
            </>

      )}

      <Hyrja brenda={Boolean(p)} />

      {p?.roli === "shofer" ? (
        <form action={ruajOren}>
          <h2>Ndrysho orën e udhëtimit</h2>
          <input type="hidden" name="id" value="2" />
          <label htmlFor="ora">Ora e re</label>{" "}
          <input
            id="ora"
            name="ora"
            type="time"
            defaultValue="08:15"
 
















           required
          />{" "}
          <button type="submit">Ruaj orën</button>
        </form>
      ) : p ? (
        <p>Si udhëtar, mund t'i shohësh udhëtimet, por nuk mund ta ndryshosh orën e shoferit.</p>
      ) : null}

      <p><Link href="/">Kthehu te udhëtimet</Link></p>
    </main>
 









 );
}
