// api-config.ts
// Run: BASE_URL=https://staging.shop.test RETRIES=2 npx tsx api-config.ts
const rawBaseUrl: string | undefined = process.env.BASE_URL;
const rawRetries: string | undefined = process.env.RETRIES;
const rawHeadless: string | undefined = process.env.HEADLESS;

const baseUrl: string = rawBaseUrl ?? "http://localhost:3000"; // ?? = "use this if missing"
const retries: number = Number(rawRetries ?? "0");
const headless: boolean = (rawHeadless ?? "true") === "true";

if (Number.isNaN(retries)) {
  throw new Error(`RETRIES must be a number, got "${rawRetries}"`);
}
console.log(`Base URL : ${baseUrl}`);
console.log(`Retries  : ${retries} (type: ${typeof retries})`);
console.log(`Headless : ${headless} (type: ${typeof headless})`);