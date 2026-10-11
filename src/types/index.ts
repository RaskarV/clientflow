// Shared TypeScript types. Later these will mirror the Prisma models.

export type EnquiryStatus = "NEW" | "IN_REVIEW" | "PROPOSAL_SENT" | "WON" | "LOST";
export type ProjectStatus = "PLANNING" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface Skill {
  name: string;
  level: number; // 1 (beginner) to 5 (expert)
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  skills: Skill[];
  capacityHours: number; // weekly capacity
  allocatedHours: number; // hours already booked
  activeProjects: number;
  completedProjects: number;
}

export interface Enquiry {
  id: string;
  clientName: string;
  company: string;
  email: string;
  projectType: string;
  budget: number;
  timeline: string;
  features: string[];
  requiredSkills: string[];
  status: EnquiryStatus;
  createdAt: string; // ISO date
  description: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  projects: number;
}

export interface Project {
  id: string;
  name: string;
  clientName: string;
  status: ProjectStatus;
  progress: number; // 0-100
  deadline: string; // ISO date
  team: string[];
}

export interface Task {
  id: string;
  title: string;
  projectName: string;
  assignee: string;
  status: TaskStatus;
  due: string; // ISO date
}

export interface ScoreBreakdown {
  skillMatch: number; // 0-1
  availability: number; // 0-1
  workloadFit: number; // 0-1
  experience: number; // 0-1
}

export interface Recommendation {
  employee: Employee;
  score: number; // 0-100
  breakdown: ScoreBreakdown;
}
