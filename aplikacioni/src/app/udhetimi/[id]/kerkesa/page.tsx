import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Kerkesa({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Kerkesa per vend</h1>
      <p>Simulim: Ne pritje</p>
      <p>Kerkesa eshte simuluar me sukses.</p>
      <Link href={"/udhetimi/" + id}>Kthehu te detajet</Link>
      <p><Link href="/">Kthehu te lista</Link></p>
    </main>
  );
}

