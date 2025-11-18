# E2E Checklist

- [ ] Install deps (`npm install`) and ensure Expo SDK 52 CLI available.
- [ ] Verify `.env` populated with Supabase and RevenueCat keys.
- [ ] Run `npm start` and confirm navigation across auth → onboarding → tabs routes.
- [ ] Trigger voice journal start/stop and ensure transcript placeholder renders.
- [ ] Test dream reflection action button executes without error.
- [ ] Schedule reset notification and confirm permission prompt.
- [ ] Open paywall from profile and deep link route `/paywall`.
- [ ] Confirm offline queue badge renders when queueing a reset.
- [ ] Validate Inter fonts load and branding colors match muted teal palette.
- [ ] Run `npm run typecheck` and `npm run lint` (or equivalent) cleanly.
- [ ] Build with `eas build` for target platforms.
