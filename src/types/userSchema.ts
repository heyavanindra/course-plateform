import { z } from "zod";

export const userSchema = z.object({
  id: z.string().optional(),
  clerkUserId: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["admin", "user"]),
  imageUrl: z.string().nullable(),
  deletedAt: z.date().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  
});


/* 
model users {
  id                      String                    @id @default(uuid())
  clerkUserId             String                    @unique
  email                   String
  name                    String
  role                    role                      @default(user)
  imageUrl                String
  deletedAt               DateTime                  @db.Timestamptz(3)
  createdAt               DateTime                  @default(now()) @db.Timestamptz(3)
  updatedAt               DateTime                  @updatedAt @db.Timestamptz(3)
  userCourseAccess        userCourseAccess[]
  purchase                purchase[]
  userLessonCompleteTable userLessonCompleteTable[]
}
*/
