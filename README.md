# AI Diary (Expo Router, TypeScript)

This project bootstraps an Expo SDK 52+ app using Expo Router and TypeScript. It includes branded UI components, mocked integrations for Supabase, RevenueCat, notifications, audio recording, and offline storage helpers.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set environment variables**
   Copy `.env.example` to `.env` and fill in your Supabase and RevenueCat keys. Expo will load `EXPO_PUBLIC_*` keys at runtime.

3. **Run the app**
   ```bash
   npm start
   ```
   Use the Expo CLI prompts to launch iOS, Android, or web.

4. **Type checking & linting**
   ```bash
   npm run typecheck
   npm run lint
   ```

5. **Build**
   Configure [EAS](https://docs.expo.dev/build/setup/) for production builds and run:
   ```bash
   eas build -p ios
   eas build -p android
   ```

## Features
- Expo Router layout with auth, onboarding, tabs (timeline, journal, reset, insights, profile), dream logging, and paywall routes.
- Branded components (`Card`, `Button`, `PaywallModal`, `StreakBadge`, `Charts`) styled with Inter and muted teal palette.
- Supabase client/auth helper, mock API shims for transcription, reflection, and insights.
- RevenueCat purchase/restore stubs, notification scheduling helpers, audio recording via Expo AV/FileSystem.
- SQLite + MMKV storage utilities, AI helper functions, Zustand + Jotai stores for user/trial and offline queue workflows.
- Database starter schema in `schema.sql` and E2E readiness checklist in `E2E-checklist.md`.

## Folder overview
- `app/` – Expo Router screens.
- `components/` – shared UI.
- `lib/` – integrations (auth, api stubs, storage, audio, notifications, theme).
- `stores/` – Zustand/Jotai state.
- `assets/` – add Inter font files and app imagery here.

## Notes
- Replace placeholder icons/splash assets in `app.json` with your branding.
- Inter font files are stubbed in `assets/fonts/`; drop in real font binaries before release.
- API modules are mocked to keep the template offline-first; wire them up to your services as needed.
