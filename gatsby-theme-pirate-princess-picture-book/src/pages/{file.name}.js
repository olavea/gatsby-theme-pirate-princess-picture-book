import {graphql} from "gatsby"
import React from "react"
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"

const ShowDate = ({data}) => {
  const treasureChest = data
  const pickAxe = getImage(treasureChest.imageSharp)
    return (
        <Layout>
        <GatsbyImage image={pickAxe} alt="A picture book page" />
        </Layout>

  )
}


export const query = graphql`
    query WerlinDollaridFindsDates(
        $id: String
    ) {
        file(id: {eq: $id}) {
            name
        }
        imageSharp {
            gatsbyImageData(layout: CONSTRAINED)
        }
    }
`;
export default ShowDate;