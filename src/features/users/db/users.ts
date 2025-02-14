import { userSchema } from "@/types/userSchema";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
type input = z.input<typeof userSchema>;
type updateUserType = z.infer<typeof userSchema>;
export async function insertUser(data: input) {
  // zod varification

  const userSchemaSafeParse = userSchema.safeParse(data);
  console.log(userSchemaSafeParse)
  if (userSchemaSafeParse.success === false) {
    throw new Error("Invalid data");
  }
  // insert user into database
  const prisma = new PrismaClient();
  const user = prisma.users.upsert({
    where: {
      clerkUserId: data.clerkUserId,
    },
    update: data,
    create: data,
  });

  // check if user is inserted

  if (user == null) {
    throw new Error("User not found");
  }

  return user;
  // ...
}

export async function updateUser(
  { clerkUserId }: { clerkUserId: string },
  data: Partial<updateUserType>
) {
  // zod varification
  const userSchemaSafeParse = userSchema.safeParse(data);
  if (userSchemaSafeParse.success === false) {
    throw new Error("Invalid data");
  }
  // insert user into database
  const prisma = new PrismaClient();
  const updatedUser = prisma.users.update({
    where: {
      clerkUserId: clerkUserId,
    },
    data: data,
  });

  if (updatedUser == null) {
    throw new Error("User not found");
  }

  return updatedUser;

  // check if user is inserted

  // ...
}

export async function deleteUser(clerkUserId: string) {
  const prisma = new PrismaClient();
  const deletedUser = prisma.users.update({
    where: {
      clerkUserId:clerkUserId,
    },
    data: {
      name: "deleted User",
      email: "deletedAccount@gmail.com",
      deletedAt: new Date(),
      clerkUserId: "deletedUser",
      imageUrl: null,
    },
  });
  if (deletedUser == null) {
    throw new Error("User not found");
  }
  return deletedUser;
}
