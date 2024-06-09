import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'

import { getCurrentOrganization } from '@/auth/auth'
import { getOrganizations } from '@/http/get-organizations'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export async function OrganizationSwitcher() {
  const cookiesOrg = getCurrentOrganization()
  const { organizations } = await getOrganizations()

  const currentOrg = organizations.find((org) => org.slug === cookiesOrg)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-[168px] items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary">
        {currentOrg ? (
          <>
            <Avatar className="mr-2 size-4">
              {currentOrg.avatarUrl && (
                <AvatarImage src={currentOrg.avatarUrl} />
              )}
              <AvatarFallback />
            </Avatar>
            <span className="truncate text-left">{currentOrg.name}</span>
          </>
        ) : (
          <span className="text-muted-foreground">Select organization</span>
        )}
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[200px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          {organizations.map((org) => {
            return (
              <DropdownMenuItem key={org.id} asChild>
                <Link href={`/org/${org.slug}`}>
                  <Avatar className="mr-2 size-4">
                    {org.avatarUrl && <AvatarImage src={org.avatarUrl} />}
                    <AvatarFallback />
                  </Avatar>
                  <span className="line-clamp-1">{org.name}</span>
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/create-organization">
            <PlusCircle className="mr-2 size-4" />
            Create new
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
