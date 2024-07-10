'use client'

import Link from "next/link"
import { HearthIcon } from "../icons/HearthIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { SearchIcon } from "../icons/SearchIcon"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon()
  },
  {
    name: "Search",
    href: "/routes/search",
    icon: SearchIcon()
  },
  {
    name: "Favorites",
    href: "/routes/favorites",
    icon: HearthIcon()
  }
]

export function NavLinks () {
  const pathname = usePathname()

  return (
    <>
      {
        links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <div className="flex flex-col items-center justify-center">
                <span className={`hover:text-indigo-500 hover:bg-slate-300 rounded-full py-1 px-3
                  ${pathname === link.href ? "bg-slate-300 text-indigo-500" : ""}`}>
                  {link.icon}
                </span>
                <span className="text-base font-medium">{link.name}</span>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}