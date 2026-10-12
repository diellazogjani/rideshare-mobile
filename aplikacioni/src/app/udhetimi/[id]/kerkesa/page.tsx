import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function Kerkesa({ params }: Props) {
    const { id } = await params;

    return (
        <main>
        <Link href= {`/udhetimi/${id}`
}>
        ← Kthehu te detajet
    </Link>

    < h1 > Kërkesa për vend </h1>

        < p > Simulim: Në pritje </p>

            < p > Kërkesa është simuluar me sukses.</p>

                < Link href = "/" >
                    Kthehu te lista
                        </Link>
                        </main>
  );
}
