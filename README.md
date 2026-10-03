# VOZICIS IMMOBILIEN

German and English real estate advisory website built with React, TypeScript and Vite.

## Development

Use Node.js 22 or later. Run `npm ci`, then `npm run dev`.

## Validation

Run `npm run lint` and `npm run build`.

## Vercel

Import this repository. The repository root is the project root.
vercel.json configures Vite, npm ci, npm run build, and the dist output directory.
No API keys or environment variables are needed for this frontend.

Consultation and strategy-check forms currently simulate submission; they are
not connected to email or a CRM. Property listings and business claims are
supplied sample content and require owner validation as verified offers.
