import Link from "next/link";
import Vendtakimi from "../../components/Vendtakimi";

export default function Java08Test() {
    return (
        <main>
            <Link href="/">Kthehu te lista</Link>

            <h1>Testimi Java 08</h1>

            <h2>Ferizaj → AAB</h2>
            <p>Ora: 08:15</p>
            <p>Vendtakimi: Stacioni i autobusave</p>

            <Vendtakimi />
        </main>
    );
}