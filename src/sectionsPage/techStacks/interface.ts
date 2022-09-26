export interface StackItem {
  title: string;
  image: string;
}

export type StackProps =
  | "backend"
  | "frontend"
  | "mobile"
  | "databases"
  | "cloud"
  | "infrastructure"
  | "quality"
  | "data";
