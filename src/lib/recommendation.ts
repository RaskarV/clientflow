// Skill-based employee recommendation engine.
// Pure functions: no database, no React. Easy to unit test.

import type { Employee, Recommendation } from "@/types";

// Weights sum to 1. Tune them here, in one place.
export const WEIGHTS = {
  skillMatch: 0.45,
  availability: 0.25,
  workloadFit: 0.2,
  experience: 0.1,
} as const;

const MAX_ACTIVE_PROJECTS = 5; // at this many projects, workloadFit is 0
const EXPERIENCE_CAP = 20; // 20+ completed projects counts as full experience

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

// How well the employee covers the required skills (weighted by proficiency).
function skillMatch(employee: Employee, requiredSkills: string[]): number {
  if (requiredSkills.length === 0) return 0;
  const total = requiredSkills.reduce((sum, required) => {
    const found = employee.skills.find(
      (s) => s.name.toLowerCase() === required.toLowerCase(),
    );
    return sum + (found ? found.level / 5 : 0);
  }, 0);
  return clamp01(total / requiredSkills.length);
}

function availability(employee: Employee): number {
  if (employee.capacityHours <= 0) return 0;
  const free = employee.capacityHours - employee.allocatedHours;
  return clamp01(free / employee.capacityHours);
}

function workloadFit(employee: Employee): number {
  return clamp01(1 - employee.activeProjects / MAX_ACTIVE_PROJECTS);
}

function experience(employee: Employee): number {
  return clamp01(employee.completedProjects / EXPERIENCE_CAP);
}

// Returns employees ranked best-first, each with a score and a breakdown.
export function recommendEmployees(
  requiredSkills: string[],
  employees: Employee[],
): Recommendation[] {
  return employees
    .map((employee) => {
      const breakdown = {
        skillMatch: skillMatch(employee, requiredSkills),
        availability: availability(employee),
        workloadFit: workloadFit(employee),
        experience: experience(employee),
      };
      const score =
        100 *
        (WEIGHTS.skillMatch * breakdown.skillMatch +
          WEIGHTS.availability * breakdown.availability +
          WEIGHTS.workloadFit * breakdown.workloadFit +
          WEIGHTS.experience * breakdown.experience);
      return { employee, score: Math.round(score), breakdown };
    })
    .sort((a, b) => b.score - a.score);
}
