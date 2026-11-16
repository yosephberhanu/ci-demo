import { test } from "node:test";
import assert from "node:assert";
import pg from "pg";

const url = process.env.DATABASE_URL;

// Skipped on a laptop with no DATABASE_URL. Ask the room why it runs on the runner.
test("database answers", { skip: !url && "DATABASE_URL not set" }, async () => {
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  try {
    const { rows } = await client.query("select 1 as one");
    assert.strictEqual(rows[0].one, 1);
  } finally {
    await client.end();
  }
});
