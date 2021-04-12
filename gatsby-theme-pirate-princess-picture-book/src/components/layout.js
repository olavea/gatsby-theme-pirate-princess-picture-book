import React from "react"
import {Link} from "gatsby"


const Layout = ({children}) => (
    <div>
      <header>
        <nav>
          <Link to="/">Slash is home 🎩</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
);

export default Layout