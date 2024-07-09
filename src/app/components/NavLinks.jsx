import Link from "next/link"
import { HearthIcon } from "../icons/HearthIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { SearchIcon } from "../icons/SearchIcon"

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

  return (
    <>
      {
        links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <div className="flex flex-col items-center justify-center">
                {link.icon}
                <span className="text-lg font-medium">{link.name}</span>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}