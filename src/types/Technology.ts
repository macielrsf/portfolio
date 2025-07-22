interface BaseTechnology {
  name: string;
  slug?: string;
  icon: string;
  appIcon: string;
  experience: number;
}

export type CreateTechnology = BaseTechnology;

export type UpdateTechnology = Partial<BaseTechnology>;

export type Technology = BaseTechnology & {
  _id: string;
};
