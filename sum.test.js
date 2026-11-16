import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./sum.js";

test("adds", () => assert.strictEqual(sum(2, 2), 5));
