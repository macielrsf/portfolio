import { API } from './api'

import { skills } from '../data/skills'

import { CreateSkill, UpdateSkill, Skill } from '../types/Skill'

export const getSkills = async (): Promise<Skill[]> => {
  //const response = await API.get('/skills')
  return skills
} 

export const getSkillById = async (id: string): Promise<Skill> => {
  const response = await API.get(`/skills/${id}`)
  return response.data
}

export const createSkill = async (
  skill: CreateSkill
): Promise<Skill> => {
  const response = await API.post('/skills', skill)
  return response.data
}

export const updateSkill = async (
  skill: UpdateSkill,
  id: string
): Promise<Skill> => {
  const response = await API.patch(`/skills/${id}`, skill)
  return response.data
}

export const deleteSkill = async (id: string): Promise<Skill> => {
  const response = await API.delete(`/skills/${id}`)
  return response.data
}
