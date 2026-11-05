"use client";

import { useState } from "react";

type GjendjaLokacionit =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function Vendtakimi() {
  const [teksti, setTeksti] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [gabimi, setGabimi] = useState("");
  const [gjendja, setGjendja] = useState<GjendjaLokacionit>("idle");
  const [saktesia, setSaktesia] = useState<number | null>(null);

  function konfirmoVendtakimin() {
    const tekstIPastruar = teksti.trim();

    if (!tekstIPastruar) {
      setGabimi("Shkruaj vendtakimin para konfirmimit.");
      return;
    }

    setVendtakimi(tekstIPastruar);
    setGabimi("");
  }

  function kerkoVendndodhjen() {
    setGabimi("");
    setSaktesia(null);

    if (!navigator.geolocation) {
    setGjendja("unavailable");
    return;
    }

    setGjendja("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSaktesia(Math.round(position.coords.accuracy));
        setGjendja("success");
      },
      (error) => {
        if (error.code === 1) {
          setGjendja("denied");
        } else if (error.code === 3) {
          setGjendja("timeout");
        } else {
          setGjendja("unavailable");
        }
      },
      { timeout: 10000 }
    );
  }

  let mesazhiLokacionit = "";

  switch (gjendja) {
    case "loading":
      mesazhiLokacionit = "Po kerkojme vendndodhjen...";
      break;
    case "success":
      mesazhiLokacionit = "Pozicioni u mor";
      break;
    case "denied":
      mesazhiLokacionit =
        "Leja u refuzua. Shkruaj vendtakimin vete.";
      break;
    case "timeout":
      mesazhiLokacionit =
        "Koha mbaroi. Provo perseri ose shkruaj vendtakimin.";
      break;
    case "unavailable":
      mesazhiLokacionit =
        "Vendndodhja nuk eshte e disponueshme. Shkruaj vendtakimin vete.";
      break;
    default:
      mesazhiLokacionit = "";
  }

  return (
    <section>
      <h2>Vendtakimi i Artes</h2>

      <label htmlFor="meeting-input">Shkruaj vendtakimin</label>

      <input
        id="meeting-input"
        data-testid="meeting-input"
        type="text"
        value={teksti}
        onChange={(event) => {
          setTeksti(event.target.value);
          setGabimi("");
        }}
        placeholder="p.sh. Biblioteka"
      />

      <button
        type="button"
        data-testid="confirm-meeting"
        onClick={konfirmoVendtakimin}
      >
        Konfirmo ne telefon
      </button>

      <p data-testid="meeting-error" role="alert">
        {gabimi}
      </p>

      <p>
        Vendtakimi i konfirmuar:{" "}
        <strong data-testid="confirmed-meeting">
          {vendtakimi || "Ende nuk eshte zgjedhur"}
        </strong>
      </p>

      <button
        type="button"
        data-testid="locate-me"
        onClick={kerkoVendndodhjen}
        disabled={gjendja === "loading"}
      >
        {gjendja === "loading"
          ? "Duke kerkuar..."
          : "Perdor vendndodhjen time"}
      </button>

      <p
        data-testid="location-status"
        data-state={gjendja}
        role="status"
        aria-live="polite"
      >
        {mesazhiLokacionit}
      </p>

      {saktesia !== null && (
        <p data-testid="location-accuracy">
          Saktesia: {saktesia} m
        </p>
      )}
    </section>
  );
}