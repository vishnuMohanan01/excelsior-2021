import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"
import Guests from "../components/guests"
import Contact from "../components/contact"
import Pack from "../components/packs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
    <About />
    {/*<Guests />*/}
    <Pack />
  </Layout>
)

export default IndexPage
