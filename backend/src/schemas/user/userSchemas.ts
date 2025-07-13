import { Type, Static } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object({
  email: Type.String({ format: 'email' }),
  username: Type.String({ minLength: 8, maxLength: 16 }),
  displayName: Type.String({ minLength: 8, maxLength: 32 }),
  avatarUrl: Type.String(),
  provider: Type.String(),
  providerId: Type.String()
});

export type CreateUserInput = Static<typeof CreateUserSchema>;