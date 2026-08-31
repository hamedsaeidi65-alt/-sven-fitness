# Sven Fitness V4.6 — GitHub Pages Image Reliability Fix

- 25 dedicated exercise SVGs are now embedded directly inside `index.html` as data URIs.
- Exercise images no longer depend on `assets/exercises` being uploaded correctly.
- Added automatic schematic fallback if any image fails to render.
- Service Worker cache bumped to `sven-v4.6` and no longer requires exercise asset files during install.
- Workout plan, six-pack priority, and progressive overload logic remain unchanged.

Sven Fitness V4.5 — Dedicated Exercise Images

Changes from V4.4:
- 25 movements used in the four-day Six-Pack Priority plan now have one-to-one local exercise visual assets.
- Each visual shows START and END positions and the correct equipment context.
- No shared/fallback image is used for any movement in the four-day plan.
- Assets are bundled under assets/exercises/ and precached for offline PWA use.
- Existing manual plan, 13 direct weekly ab sets, RIR and Progressive Overload logic are preserved.

## V4.8 — Workout Console cleanup
- Removed the exercise image card from the live workout screen.
- Removed the involved-muscles/anatomy image card from the live workout screen.
- Muscle chips in exercise metadata remain available as compact text information.
- Removed exercise image assets from the package; workout execution now prioritizes sets, load, reps, RIR and progressive overload.


## V4.9 — Rest Timer Design D
- Removed circular rest timer.
- Added large flat timer with slim segmented-style progress bar.
- Primary set action is full width; secondary rest control is compact.
- Next exercise and finish workout remain secondary footer actions.


## V4.10 — Premium Workouts / Concept 2
- Redesigned Workouts page using approved Concept 2 hierarchy.
- Today card with one primary Start CTA.
- Compact weekly plan rows.
- Removed prototype/version/promotional copy from main UI.
- Existing manual plan and workout engine preserved.
