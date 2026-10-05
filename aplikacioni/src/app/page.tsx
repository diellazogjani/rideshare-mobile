import KartaUdhetimi from "../components/KartaUdhetimi"
import { udhetimet } from "../lib/udhetimet"

export default function Home() {
    return (
        <main>
        <h1>RideShare </h1>

        < h2 > Udhëtimet </h2>

      {
        udhetimet.map((udhetimi) => (
            <KartaUdhetimi
          key= { udhetimi.id }
          udhetimi = { udhetimi }
            />
      ))
    }
    </main>
  )
}