# PlayWright API Testing

API testing suite built with [Playwright](https://playwright.dev/) covering the four core HTTP methods.

## Test Coverage

| Method | File |
|--------|------|
| GET | `tests/APIexampleGet.spec.ts` |
| POST | `tests/APIexamplePost.spec.ts` |
| PUT | `tests/APIexamplePut.spec.ts` |
| DELETE | `tests/APIexampleDelete.spec.ts` |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

## Installation

```bash
npm install
```

## Running Tests

Run all API tests:

```bash
npx playwright test
```

Run a specific method:

```bash
npx playwright test tests/APIexampleGet.spec.ts
npx playwright test tests/APIexamplePost.spec.ts
npx playwright test tests/APIexamplePut.spec.ts
npx playwright test tests/APIexampleDelete.spec.ts
```

Run with the interactive UI:

```bash
npx playwright test --ui
```

## Configuration

See [`playwright.config.ts`](playwright.config.ts) for project configuration.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/api-testing) — API testing framework
- TypeScript
