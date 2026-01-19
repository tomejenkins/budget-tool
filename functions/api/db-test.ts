import { db } from "./_utils/db";

export async function onRequestGet() {
  const sql = db();
  const rows = await sql`select 1 as ok`;
  return new Response(JSON.stringify({ rows }), {
    headers: { "content-type": "application/json" },
  });
}
