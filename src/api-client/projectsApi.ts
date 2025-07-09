import { API } from './api'

import { Project, UpdateProject, CreateProject } from '../types/Project'
import { projects } from '../data/projects'

export const getProjects = async (): Promise<Project[]> => {
  //const response = await API.get('/projects')
  return projects
}

export const getProjectById = async (id: string): Promise<Project> => {
  const response = await API.get(`/projects/${id}`)
  return response.data
}

export const getProjectsBySlug = async (
  slug: string
): Promise<Project[]> => {
  const response = await API.get(`/projects/technology/${slug}`)
  return response.data
}

export const getProjectByRepository = async (
  repository: string
): Promise<Project> => {
  const response = await API.get(`/projects/repository/${repository}`)
  return response.data
}

export const createProject = async (
  project: CreateProject
): Promise<Project> => {
  const response = await API.post('/projects', project)
  return response.data
}

export const updateProject = async (
  project: UpdateProject,
  id: string
): Promise<Project> => {
  const response = await API.patch(`/projects/${id}`, project)
  return response.data
}

export const deleteProject = async (id: string): Promise<Project> => {
  const response = await API.delete(`/projects/${id}`)
  return response.data
}
