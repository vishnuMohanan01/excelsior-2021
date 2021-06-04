import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"
import Guests from "../components/guests"
import Contact from "../components/contact"
import TechEvents from "../components/techEvents"
import NonTechEvents from "../components/nonTechEvents"
import Pack from "../components/packs"
import { useEffect, useRef, useState } from "react"
import Header from "../components/header"
import Quotes from "../components/quote"
import Sponsors from "../components/sponsors"
import Schedule from "../components/schedule"
import FAQ from "../components/faq"
import Events from "../components/alumnisTalk"
import SideNavBar from "../components/sideNavBar"
import Logos from "../components/logos"

const IndexPage = () => {
  const [tabSelected, setTabSelected] = useState("about");
  const [sideNavBarsStatus, setSideNavBarStatus] = useState(false);

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
      <Header setSideNavBarStatus={setSideNavBarStatus} tabSelected={tabSelected} setTabSelected={setTabSelected} scrollToRef={scrollToRef} contactRef={contactRef} sponsorRef={sponsorRef} aboutRef={aboutRef} />
      <SideNavBar sideNavBarStatus={sideNavBarsStatus} />
      <Landing aboutRef={aboutRef} />
      <About aboutBottomRef={aboutBottomRef} />
      <Logos />
      <Guests />
      <Quotes />
      <Pack />
      <Schedule />
      <TechEvents />
      <NonTechEvents />
      <Events />
      <Sponsors sponsorRef={sponsorRef}/>
      <Contact contactRef={contactRef} />
      <FAQ />
    </Layout>
  );
}



export default IndexPage;
