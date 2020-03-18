/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaHome, FaNewspaper } from 'react-icons/fa'
import { IconType } from 'react-icons'

type NavLinkProps = {
  path: string
  children: string
  icon: IconType
}

const NavLink: React.FC<NavLinkProps> = ({ path, children, icon: Icon }) => {
  const { pathname } = useRouter()

  const variant =
    pathname === path
      ? 'components.layout.nav.itemActive'
      : 'components.layout.nav.item'

  return (
    <Link href={path}>
      <a href={path} sx={{ variant }}>
        <Icon />
        {children}
      </a>
    </Link>
  )
}

const links = [
  {
    title: 'Inicio',
    path: '/',
    icon: FaHome,
  },
  {
    title: 'Noticias',
    path: '/noticias',
    icon: FaNewspaper,
  },
]

const Nav: React.FC = () => {
  return (
    <nav sx={{ variant: 'components.layout.nav.container' }}>
      {links.map((l) => (
        <NavLink key={l.path} path={l.path} icon={l.icon}>
          {l.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
