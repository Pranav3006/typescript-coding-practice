// primitives.ts   →  npx tsx primitives.ts
const username: string = "pranav.qa";
const retries: number = 3;          // whole numbers and decimals are both "number"
const timeoutMs: number = 30_000;   // underscores just help reading
const isHeadless: boolean = true;
const nothingYet: null = null;      // "intentionally empty"
let notAssigned: undefined = undefined; // "not set yet"
const bigOrderId: bigint = 9_007_199_254_740_993n; // beyond the safe number range
const uniqueKey: symbol = Symbol("session");