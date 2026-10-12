import Link from "next/link";
import { gjejUdhetimin } from "../../../lib/udhetimet";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export const dynamic = "force-dynamic";

export default async function DetajetUdhetimit({ params }: Props) {
    const { id } = await params;
    const udhetimi = await gjejUdhetimin(id);

    if (!udhetimi) {
        return (
            <main>
            <Link href= "/" >← Kthehu te lista </Link>
                < h1 > Udhëtimi nuk u gjet </h1>
                    </main>
    );
    }

    return (
        <main>
        <Link href= "/" >← Kthehu te lista </Link>

            < h1 > Detajet e udhëtimit </h1>

                <h2>
    { udhetimi.nisja } → { udhetimi.destinacioni }
    </h2>

        < p > Ora: { udhetimi.ora } </p>
            < p > Vendtakimi: { udhetimi.vendtakimi } </p>
                < p > Vende të lira: { udhetimi.vende } </p>

    {
        udhetimi.vende > 0 ? (
            <a href= { "/udhetimi/" + udhetimi.id + "/kerkesa" } >
            Kërko vend
                </a>
      ) : (
            <button disabled >
            Nuk ka vende të lira
                </button>
      )
    }
    </main>
  );
}
