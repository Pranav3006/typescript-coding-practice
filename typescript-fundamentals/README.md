# 01 – Setup, Primitive Types and Type Inference

## What
My first TypeScript lesson: how TypeScript relates to JavaScript, the primitive types,
`let` vs `const`, type inference, and reading test settings safely from environment variables.

TypeScript 7.0.2 · tsx 4.23.15 · Node 22+ · Windows PowerShell

## Files
| File | What it shows |
|---|---|
| `hello.ts` | First TypeScript file with type annotations |
| `primitives.ts` | `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`; `let` vs `const` |
| `inference.ts` | How TypeScript infers types, and when to annotate |
| `js-bug.js` / `ts-fix.ts` | A string-vs-number bug JavaScript misses and TypeScript catches |
| `api-config.ts` | Typed config from env vars (`string \| undefined`, `??`, `Number()`) |
| `ex1.ts`, `ex2.ts`, `ex3.ts` | Exercises: annotations, `formatDuration`, worker count from `WORKERS` / `CI` |

## How to run
From the repo root (once):
```powershell
npm install
```
Run a file:
```powershell
cd typescript-fundamentals\01-setup-and-primitives
npx tsx hello.ts
$env:BASE_URL = "https://staging.shop.test"; $env:RETRIES = "2"; npx tsx api-config.ts
$env:CI = "true"; npx tsx ex3.ts
Remove-Item Env:BASE_URL, Env:RETRIES, Env:CI -ErrorAction SilentlyContinue
```
Type-check everything (from the repo root):
```powershell
npm run typecheck
```
> `tsx` runs code **without** checking types, so always run `npm run typecheck` before committing.

## What I learned
- TypeScript = JavaScript + types. Types are checked before the code runs, then erased.
- Use `const` by default and `let` only when the value changes. Never use `var`.
- Let TypeScript infer local variables. Always type function parameters.
- Environment variables are always `string | undefined`: give a default with `??` and convert with `Number()`.
- Types check the *kind* of value, not whether it makes sense (`NaN` is still a `number`), so add runtime checks too.
- How to read errors: `TS2322` wrong type assigned, `TS2345` wrong argument, `TS7006` untyped parameter, `TS2591` missing Node types.

## Interview question
**Why can code with type errors still run in a test project?**
Runners like `tsx` and Playwright strip types without checking them. So I add a separate
`tsc --noEmit` step locally and in CI, so a type error fails the build instead of slipping through.