'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { getCurrentOrganization } from '@/auth/auth'
import { createProjectHttp } from '@/http/create-project'

// import { createProjectHttp } from '@/http/create-project'

const projectSchema = z.object({
  name: z.string().min(4, { message: 'Please, include at least 4 characters' }),
  description: z.string(),
})

export async function createProjectAction(data: FormData) {
  // usei safeParse para lidar com o erro posteriormente. Se usassemos o parse apenas e houvessem erros, ele seria disparado imediatamente
  const result = projectSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, description } = result.data

  try {
    await createProjectHttp({
      org: getCurrentOrganization()!,
      name,
      description,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      return { success: false, message, errors: null }
    }

    console.error(error)
    return {
      success: false,
      message: 'Unexpected error, try again',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Successfully saved the project',
    errors: null,
  }
}
