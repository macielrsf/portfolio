interface BaseSkill {
  name: string;
  icon: string;
}

export type CreateSkill = BaseSkill;

export type UpdateSkill = Partial<BaseSkill>;

export type Skill = BaseSkill & {
  _id: string;
};
