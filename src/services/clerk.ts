import { clerkClient } from "@clerk/nextjs/server";

export type role = "admin" | "user";
const client = await clerkClient();
export default async function syncClerkMetadata(user: {
  id: string;
  clerkUserId: string;
  role: role;
}) {
  return client.users.updateUserMetadata(user.clerkUserId, {
    publicMetadata: {
      dbId: user.id,
      role: user.role,
    },
  });
}
