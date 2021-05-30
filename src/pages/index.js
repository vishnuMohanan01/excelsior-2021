import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
