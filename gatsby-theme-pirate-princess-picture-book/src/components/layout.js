import React from "react"
import {Link} from "gatsby"


const Layout = ({children}) => (
    <div>
      <header>
        <nav>
          <Link to="/">Change page by changing page number in the browser for example 02 🎩</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer><p>Written, read and hand drawn by Lillian (6 🦄) Raae-Vea </p></footer>
    </div>
);

export default Layout