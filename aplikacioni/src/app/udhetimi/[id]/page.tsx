"use client"

import Link from "next/link"
import { useState } from "react"
import { udhetimet } from "../../../lib/udhetimet"

type Props = {
    params: Promise<{
        id: string
    }>
}

export default function DetajetUdhetimit({ params }: Props) {
    const [id, setId] = useState<string | null>(null)

    if (id === null) {
        params.then((p) => setId(p.id))
        return <main>Po ngarkohet...</main>
    }

    const udhetimi = udhetimet.find(
        (u) => u.id === Number(id)
    )

    if (!udhetimi) {
        return (
            <main>
            <Link href= "/" >← Kthehu te lista </Link>

                < h1 > Udhëtimi nuk u gjet </h1>
                    </main>
    )
    }

    return (
        <main>
        <Link href= "/" >← Kthehu te lista </Link>

            < h1 > Detajet e udhëtimit </h1>

                <h2>
    { udhetimi.nisja } → { udhetimi.destinacioni }
    </h2>

        < p > Shoferi: { udhetimi.shoferi } </p>
            < p > Data: { udhetimi.data } </p>
                < p > Ora: { udhetimi.ora } </p>
                    < p > Vendtakimi: { udhetimi.vendtakimi } </p>
                        < p > Vende të lira: { udhetimi.vende } </p>

    {
        udhetimi.vende > 0 ? (
            <Link href= {`/udhetimi/${udhetimi.id}/kerkesa`}>
                Kërko vend
                    </Link>
      ) : (
        <button disabled > Nuk ka vende të lira </button>
      )
}
</main>
  )
}