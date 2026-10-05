export type Udhetimi = {
    id: number
    shoferi: string
    nisja: string
    destinacioni: string
    data: string
    ora: string
    vendtakimi: string
    vende: number
}

export const udhetimet: Udhetimi[] = [
    {
        id: 1,
        shoferi: "Dreni",
        nisja: "Prishtinë",
        destinacioni: "AAB",
        data: "06.10.2026",
        ora: "08:00",
        vendtakimi: "Stacioni i autobusëve",
        vende: 2,
    },
    {
        id: 2,
        shoferi: "Arta",
        nisja: "Fushë Kosovë",
        destinacioni: "AAB",
        data: "06.10.2026",
        ora: "08:15",
        vendtakimi: "Te stacioni kryesor",
        vende: 1,
    },
    {
        id: 3,
        shoferi: "Blerimi",
        nisja: "Lipjan",
        destinacioni: "AAB",
        data: "06.10.2026",
        ora: "07:45",
        vendtakimi: "Qendra e qytetit",
        vende: 0,
    },
]