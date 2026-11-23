const totalDays = 120;
const currentDay = 1;
const daysRemaining = totalDays - currentDay;

console.log(`Days remaining in my plan: ${daysRemaining}`);

// How much of the plan is done
const percentComplete = (currentDay / totalDays) * 100;
console.log(`Plan completed: ${percentComplete.toFixed(1)}%`);

// Which phase am I in?
let phase;
if (currentDay <= 30) {
  phase = "Phase 1: JavaScript for Testers";
} else if (currentDay <= 60) {
  phase = "Phase 2: TypeScript and Playwright Core";
} else if (currentDay <= 90) {
  phase = "Phase 3: Framework Design and API Testing";
} else {
  phase = "Phase 4: CI/CD, Stability, and Real Work";
}
console.log(`Current phase: ${phase}`);

// A tester-style check: is the repo set up?
const repoCreated = true;
const firstCommitDone = true;

if (repoCreated && firstCommitDone) {
  console.log("Day 1 status: PASS");
} else {
  console.log("Day 1 status: FAIL");
}