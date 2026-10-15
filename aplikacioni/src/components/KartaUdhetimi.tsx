import Link from "next/link"
import { Udhetim } from "../lib/udhetimet";

type Props = {
    udhetimi: Udhetim;
}

export default function KartaUdhetimi({ udhetimi }: Props) {
    return (
        <div>
        <h2>
        { udhetimi.nisja } → { udhetimi.destinacioni }
    </h2>

        
                < p > Ora: { udhetimi.ora } </p>
                    < p > Vende të lira: { udhetimi.vende } </p>
                     < p > Vendtakimi: { udhetimi.vendtakimi } </p>

                        < Link href = {`/udhetimi/${udhetimi.id}`
}>
    Shiko detajet
        </Link>
        </div>
  )
}