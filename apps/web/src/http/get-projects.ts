import { api } from './api-client'

interface GetprojectsResponse {
  projects: {
    description: string
    slug: string
    id: string
    name: string
    avatarUrl: string | null
    organizationId: string
    ownerId: string
    createdAt: Date
    owner: {
      id: string
      name: string | null
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(slug: string) {
  const result = await api
    .get(`organizations/${slug}/projects`)
    .json<GetprojectsResponse>()

  return result
}
