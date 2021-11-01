import Image from 'next/image';
import Link from 'next/Link';

import logoSquare from 'public/img/logo_square.png';

export default function Navbar() {
  return <nav className="navbar has-shadow has-navbar-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item">
        <Link href="/">
          <>
            <Image
              src={logoSquare}
              alt="Gastronome logo"
              layout="intrinsic"
            />
            <span>&emsp;Recipe Browser </span>
          </>
        </Link>
      </a>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
}
