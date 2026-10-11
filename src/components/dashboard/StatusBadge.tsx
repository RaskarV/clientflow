import { Badge, type Tone } from "@/components/ui/Badge";
import { formatStatus } from "@/lib/utils";

const toneByStatus: Record<string, Tone> = {
  NEW: "blue",
  IN_REVIEW: "amber",
  PROPOSAL_SENT: "amber",
  WON: "green",
  LOST: "red",
  PLANNING: "gray",
  IN_PROGRESS: "blue",
  ON_HOLD: "amber",
  COMPLETED: "green",
  TODO: "gray",
  DONE: "green",
};

// One badge for every status type (enquiry, project, task).
export function StatusBadge({ status }: { status: string }) {
  return <Badge tone={toneByStatus[status] ?? "gray"}>{formatStatus(status)}</Badge>;
}
