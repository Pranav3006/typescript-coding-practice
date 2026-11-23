// inference.ts   →  npx tsx inference.ts
let browserName = "chromium"; // TypeScript infers: string
const workers = 4;            // infers the literal type 4, because a const never changes
let headless = true;          // infers: boolean
// browserName = 42;          // ❌ TS2322

let statusCode: number;       // no value yet, so annotate it yourself
statusCode = 200;

function buildTestTitle(feature: string, caseId: number) {
  return `[${caseId}] ${feature}`;   // return type inferred: string
}