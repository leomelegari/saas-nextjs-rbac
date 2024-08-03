import { Slash } from 'lucide-react'
import Image from 'next/image'

import Logo from '@/assets/logo.svg'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import ProjectSwitcher from './project-switcher'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permission = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between ">
      <div className="flex items-center gap-3 ">
        <Image src={Logo} alt="Company logo" className="size-8" />

        <Slash className="size-4 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permission?.can('get', 'Project') && (
          <>
            <Slash className="size-4 -rotate-[24deg] text-border" />
            <ProjectSwitcher />
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </div>
  )
}
