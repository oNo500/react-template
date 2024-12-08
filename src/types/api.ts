export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
  name: string;
  role: string;
  // .. other
}>;

export type AuthResponse = Entity<{
  token: string;
}>;
