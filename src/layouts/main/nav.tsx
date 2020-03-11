/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

type NavLinkProps = {
  path: string
  children: string
}

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  const { pathname } = useRouter()

  const variant =
    pathname === path
      ? 'components.layout.nav.itemActive'
      : 'components.layout.nav.item'

  return (
    <Link href={path}>
      <a href={path} sx={{ variant }}>
        {children}
      </a>
    </Link>
  )
}

const links = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Casos',
    path: '/casos',
  },
]

const Nav: React.FC = () => {
  return (
    <nav sx={{ variant: 'components.layout.nav.container' }}>
      {links.map((l) => (
        <NavLink key={l.path} path={l.path}>
          {l.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
