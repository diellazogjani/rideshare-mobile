import Link from "next/link"
import { Udhetimi } from "../lib/udhetimet"

type Props = {
    udhetimi: Udhetimi
}

export default function KartaUdhetimi({ udhetimi }: Props) {
    return (
        <div>
        <h2>
        { udhetimi.nisja } → { udhetimi.destinacioni }
    </h2>

        < p > Shoferi: { udhetimi.shoferi } </p>
            < p > Data: { udhetimi.data } </p>
                < p > Ora: { udhetimi.ora } </p>
                    < p > Vende të lira: { udhetimi.vende } </p>

                        < Link href = {`/udhetimi/${udhetimi.id}`
}>
    Shiko detajet
        </Link>
        </div>
  )
}