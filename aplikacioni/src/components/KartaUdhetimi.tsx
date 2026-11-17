
import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

type Props = {
  udhetimi: Udhetim;
  eshtePreferuar: boolean;
  nePritje: boolean;
  mesazhi: string;
  ruajPreferimin: (udhetimId: string) => void;
};

export default function KartaUdhetimi({
  udhetimi,
  eshtePreferuar,
  nePritje,
  mesazhi,
  ruajPreferimin,
}: Props) {
  return (
    <div>
      <h2>
        {udhetimi.nisja} → {udhetimi.destinacioni}
      </h2>

      <p>Ora: {udhetimi.ora}</p>
      <p>Vende te lira: {udhetimi.vende}</p>
      <p>Vendtakimi: {udhetimi.vendtakimi}</p>

      <Link href={`/udhetimi/${udhetimi.id}`}>
        Shiko detajet
      </Link>

      <div>
        <button
          type="button"
          onClick={() => ruajPreferimin(udhetimi.id)}
          disabled={eshtePreferuar || nePritje}
          aria-label={
            eshtePreferuar
              ? "Udhetimi eshte ne preferime"
              : "Ruaj udhetimin ne preferime"
          }
        >
          {nePritje ? "Po ruhet..." : eshtePreferuar ? "★ E preferuar" : "☆ Ruaj si te preferuar"}
        </button>

        {mesazhi && <p role="status">{mesazhi}</p>}
      </div>
    </div>
  );
}
