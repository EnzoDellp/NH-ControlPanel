export type User = {
  id: string;
  user: string;
  password: string;
};
export type DraftUser = Omit<User, "id">;
