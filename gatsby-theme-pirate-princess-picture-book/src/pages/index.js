import React from "react"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"

export default function IndexPage ({ imagePath = "book/pickaxes", audioPath }) {
    return (
      <>
        <Layout>
            <h1>Publish the Picture-Book your Pyrate Princess Makes:-D</h1>
            <StaticImage
            src="../../../example-book/book/pickaxes/00.png"
            alt="A book page"
            layout="fullWidth"

            />
        </Layout>
      </>
    )
}