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


## V4.11 — Daily RTL Performance Card
- Home “Today” card redesigned from approved Concept 2.
- Card is fully RTL/right-aligned.
- Workout is selected automatically from the actual weekday: Saturday, Sunday, Monday, Tuesday.
- Wednesday–Friday show recovery/no scheduled resistance workout instead of the wrong workout.
- Broken hero exercise image is removed.
- Shows exercise count, estimated duration, session type and Progressive Overload status.


## V4.12 — Coach Removed
- Removed the “مربی هوشمند / SVEN AI” card from Home.
- Removed the “مربی” tab from bottom navigation.
- Bottom navigation is now a balanced 4-column layout: Home, Workouts, Progress, Profile.
- Coach page is no longer reachable from the UI.
- Existing workout, progression and daily-plan logic is unchanged.
- JS syntax check: PASS.


## V4.13 — Fixed Home Today Card
- Rebuilt the Home “تمرین امروز” card as a dedicated independent component.
- Fully RTL/right-aligned.
- No hero image dependency.
- Shows weekday-aware workout title, exercise count, estimated duration, strength session type and Progressive Overload goal.
- Wednesday–Friday display recovery state.
- Coach remains removed from Home and bottom navigation.
- JS syntax check: PASS.


## V4.14 — Functional Home Tabs
- Home tabs now actually switch content.
- “تمرین امروز” shows the weekday-aware daily workout.
- “برنامه هفتگی” shows the real manual four-day plan and can launch each day.
- Home “پیشرفت” is intentionally a compact summary only.
- Bottom-nav Progress page remains the full analytical Progress page.
- Home progress summary uses real saved session data: sessions, volume, time, best set, latest session.
- Fixed stale Home hero references that could cause runtime errors after earlier redesigns.
- JS syntax check: PASS.


## V4.15 — Wednesday Home Fat Burn
- Added Wednesday as a real weekday-aware session.
- 35-minute low-impact home cardio, no equipment and no jumping.
- 4 rounds: 45 sec work / 15 sec transition; 60 sec between rounds.
- Movements: March in Place, Step Touch, Standing Knee Drive, Side Step + Reach, Low-Impact Jack, Standing Cross Crunch, Fast Feet.
- Target intensity: RPE 5–6/10 to raise energy expenditure without turning the day into another hard strength/HIIT session.
- Existing users are migrated automatically: Wednesday is appended without overwriting Saturday–Tuesday.
- Home Today card and Weekly Plan recognize Wednesday.
- JS syntax check: PASS.


## V4.16 — Full 7-Day Plan
- Thursday added: Home Conditioning + Core, ~30 min, 3 rounds, no equipment/no jumping, RPE 5/10.
- Friday added: Active Recovery at home, 20–25 min, mobility + easy movement, RPE 2–3/10.
- Thursday and Friday are recognized by the actual weekday in Today Workout.
- Weekly Plan now displays Saturday through Friday.
- Existing users are migrated by appending Wed/Thu/Fri without overwriting their Saturday–Tuesday strength plan.
- Friday remains intentionally low-load to protect Saturday strength performance.
- JS syntax check: PASS.


## V4.17 — Nutrition Dashboard / Concept B
- Added a dedicated Nutrition tab to bottom navigation.
- Implemented approved Concept B in RTL: calorie progress, protein/carbs/fat, meal timeline, remaining targets, dinner suggestion and food logging.
- Nutrition entries persist per day in localStorage.
- Initial daily targets: 2200 kcal, 170 g protein, 190 g carbs, 70 g fat.
- Meal rows support quick manual logging and immediate dashboard recalculation.
- JS syntax check: PASS.


## V4.18 — Adaptive Weekly Calories
- Added weekly weight check-in inside Nutrition.
- Sven compares the newest weekly weight with a prior weigh-in at least 5 days earlier.
- Target loss zone: approximately 0.4–0.9% of body weight per week.
- Slower than target: suggests -100 kcal/day.
- Faster than target: suggests +100 kcal/day.
- In target range: keeps calories unchanged.
- Calorie changes are NEVER automatic: user must tap “اعمال پیشنهاد” and confirm.
- Protein and fat stay stable; carbohydrate target is recalculated to keep calories/macros internally consistent.
- Initial target corrected to an internally consistent 2350 kcal: 180 g protein, 250 g carbs, 70 g fat.
- JS syntax check: PASS.


## V4.19 — 100-Food Library
- Added exactly 100 curated base foods suitable for Sven's fat-loss/high-protein nutrition workflow.
- Categories include protein, eggs/dairy, legumes, carbohydrates, vegetables, fruit, nuts/fats, snacks/supplements and composed meals.
- Each item includes serving reference, calories, protein, carbohydrates and fat.
- Search and category filters are built into a mobile bottom-sheet Food Library.
- Tapping a food opens amount + meal selection; nutrition recalculates automatically for the chosen amount.
- Foods can be added directly to breakfast, lunch, snack or dinner and immediately update the Nutrition Dashboard.
- Values are labeled as reference/approximate because brand and cooking method can change nutrition.
- Library count: 100.
- JS syntax check: PASS.

## V4.20 — Bottom Sheet Close Fix
- Fixed the × button on the food detail/add-to-meal sheet.
- Added explicit non-submit close buttons.
- Added delegated click handling for reliable iOS Safari behavior.
- Tapping the dark backdrop now closes both Food Library and Food Add sheets.
- Added swipe-down-to-close on both mobile bottom sheets.
- JavaScript syntax check: PASS.

## V4.21 — Food Sheet Close Hard Fix
- Root cause fixed: Food Library and Add Food sheets were located after the main script, so direct DOM listeners/swipe handlers could not bind at script execution time.
- Both sheets are now placed before the script.
- × buttons have direct listeners plus an inline Safari-safe fallback.
- × touch targets increased to at least 44×44 px.
- Dark backdrop closes the sheet directly.
- Swipe-down handlers can now bind because the sheets exist when JS initializes.
- JavaScript syntax check: PASS.

## V4.22 — Meal → Food Picker
- Tapping Breakfast, Lunch, Snack, or Dinner now opens the Food Library instead of a prompt.
- The tapped meal is remembered and preselected automatically.
- After choosing a food, the Add Food sheet opens with that meal already selected.
- Food amount and macros are still recalculated before saving.
- Main “ثبت غذا” button continues to open Food Library with Dinner as default.
- JavaScript syntax check: PASS.

## V4.23 — Editable Meal Items
- Meals now store individual foodItems with independent IDs instead of only aggregate macros/text.
- Each registered food appears as its own row under Breakfast/Lunch/Snack/Dinner.
- Tap a food row to edit amount or move it to another meal.
- × deletes only that food item after confirmation.
- Meal and daily calories/macros are recalculated from the remaining items after every edit/delete.
- Legacy aggregate meals are preserved as a removable legacy item rather than discarded.
- JavaScript syntax check: PASS.
