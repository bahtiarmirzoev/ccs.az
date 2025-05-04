import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Feedback = z.infer<typeof feedbackSchema>;

export type FeedbackWithId = Feedback & {
  id: string;
  status: "PENDING" | "IN_PROGRESS" | "RESOLVED";
  createdAt: Date;
  updatedAt: Date;
}; 