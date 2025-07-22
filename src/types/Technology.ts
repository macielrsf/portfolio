interface BaseTechnology {
  name: string;
  slug?: string;
  icon: string;
  appIcon: string;
  startDate: string; // ISO date string (YYYY-MM-DD)
}

export type CreateTechnology = BaseTechnology;

export type UpdateTechnology = Partial<BaseTechnology>;

export type Technology = BaseTechnology & {
  _id: string;
};
