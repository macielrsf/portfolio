interface BaseProject {
  title: string;
  logo: string;
  mockup: string;
  repository: string;
  slug?: string;
  siteUrl: string;
  videoUrl: string;
  stack: string[];
}

export type CreateProject = BaseProject;

export type UpdateProject = Partial<BaseProject>;

export type Project = BaseProject & {
  _id: string;
};
