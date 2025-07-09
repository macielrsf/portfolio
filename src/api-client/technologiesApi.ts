import { API } from './api'

import { CreateTechnology, UpdateTechnology, Technology } from '../types/Technology'
import { technologies } from '../data/technologies'

export const getTechnologies = async (): Promise<Technology[]> => {
  //const response = await API.get('/technologies')
  return technologies
}

export const getTechnologyById = async (
  id: string
): Promise<Technology> => {
  const response = await API.get(`/technologies/${id}`)
  return response.data
}

export const getTechnologyBySlug = async (
  slug: string
): Promise<Technology> => {
  const response = await API.get(`/technologies/search/${slug}`)
  return response.data
}

export const createTechnology = async (
  technology: CreateTechnology
): Promise<Technology> => {
  const response = await API.post('/technologies', technology)
  return response.data
}

export const updateTechnology = async (
  technology: UpdateTechnology,
  id: string
): Promise<Technology> => {
  const response = await API.patch(`/technologies/${id}`, technology)
  return response.data
}

export const deleteTechnology = async (
  id: string
): Promise<Technology> => {
  const response = await API.delete(`/technologies/${id}`)
  return response.data
}
