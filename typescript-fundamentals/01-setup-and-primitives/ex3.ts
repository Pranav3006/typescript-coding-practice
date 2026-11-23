const rawWorkers: string | undefined = process.env.WORKERS;
const rawCi: string | undefined = process.env.CI;

const isCi: boolean = rawCi === "true";
const workers: number = Number(rawWorkers ?? (isCi ? "2" : "4"));

if (!Number.isInteger(workers) || workers < 1) {
  throw new Error(`WORKERS must be a whole number of 1 or more, got "${rawWorkers}"`);
}
console.log(`CI=${isCi} → running with ${workers} workers`);