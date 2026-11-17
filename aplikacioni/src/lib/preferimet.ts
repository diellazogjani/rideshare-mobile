import "server-only";
import { getSql } from "./db";
import { profiliIm } from "./lejet";

export async function lexoPreferimet(): Promise<string[]> {
  const profili = await profiliIm();

  if (!profili) return [];

  const sql = getSql();

  const rows = await sql`
    SELECT udhetim_id
    FROM preferimet
    WHERE perdorues_id = ${profili.id}
  `;

  return rows.map((row) => String(row.udhetim_id));
}

export async function ruajPreferimin(
  udhetimId: string
): Promise<"ruajtur" | "hyr" | "udhetim"> {
  const profili = await profiliIm();

  if (!profili) return "hyr";

  const sql = getSql();

  const rows = await sql`
    INSERT INTO preferimet (perdorues_id, udhetim_id)
    SELECT ${profili.id}, id
    FROM udhetimet
    WHERE id = ${udhetimId}
    ON CONFLICT (perdorues_id, udhetim_id) DO NOTHING
    RETURNING udhetim_id
  `;

  if (rows.length === 1) return "ruajtur";

  const ekziston = await sql`
    SELECT id FROM udhetimet WHERE id = ${udhetimId}
  `;

  return ekziston.length === 1 ? "ruajtur" : "udhetim";
}