import { handleLead } from "@/lib/leads";

export async function POST(request) {
  return handleLead(request, "tracking-request");
}
