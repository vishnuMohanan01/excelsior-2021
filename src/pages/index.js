import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
    <About />
  </Layout>
)

export default IndexPage
