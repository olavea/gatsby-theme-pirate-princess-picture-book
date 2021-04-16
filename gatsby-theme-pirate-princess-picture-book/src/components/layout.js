import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"




const Layout = ({children, data}) => {

  return (
    <StaticQuery
      query ={graphql`
        query PaulTheNavigatorQuery {
          allFile(sort : {
            fields: name,
            order: ASC
          }) {
            edges {
              node {
                name
              }
              next {
                name
              }
              previous {
                name
              }
            }
          }
        }
      `}

      render={data => (

        <div>
        <header>
          <nav>

            <Link to={data.allFile.edges.previous.name}> previous</Link>
            <Link to="/02"> next</Link>

          </nav>
        </header>
        <main>{children}</main>
        <footer><p>Written, read and hand drawn by Lillian (6 🦄) Raae-Vea </p></footer>
      </div>

      )}
  />
  )
}
;

export default Layout

