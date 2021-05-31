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
import { useEffect, useRef, useState } from "react"
import Header from "../components/header"
import Quotes from "../components/quote"
import Sponsors from "../components/sponsors"
import Schedule from "../components/schedule"

const IndexPage = () => {
  const [tabSelected, setTabSelected] = useState("about");
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const sponsorRef = useRef(null);
  const aboutBottomRef = useRef(null);


  const scrollToRef = (ref) => {
    window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});
  }

  const handleScroll = () => {
    if (window.pageYOffset <= aboutBottomRef.current.offsetTop && tabSelected !== "about") {
      setTabSelected("about");
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabSelected])


  return (
    <Layout>
      <Seo title="Home" />
      <Header tabSelected={tabSelected} setTabSelected={setTabSelected} scrollToRef={scrollToRef} contactRef={contactRef} sponsorRef={sponsorRef} aboutRef={aboutRef} />
      <Landing aboutRef={aboutRef} />
      <About aboutBottomRef={aboutBottomRef} />
    </Layout>
  );
}



export default IndexPage;
