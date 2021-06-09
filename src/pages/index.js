import * as React from "react"


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
import FAQ from "../components/faq"
import Events from "../components/alumnisTalk"
import SideNavBar from "../components/sideNavBar"
import Logos from "../components/logos"
import Footer from "../components/footer"
import Learn from "../components/exLearn"
import Talks from "../components/exTalks"
import Demo from "../components/exDemo"
import Psych from "../components/exPsych"

const IndexPage = () => {
  const [tabSelected, setTabSelected] = useState("about");
  const [sideNavBarsStatus, setSideNavBarStatus] = useState(false);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const sponsorRef = useRef(null);
  const aboutBottomRef = useRef(null);
  const guestsRef = useRef(null);
  const workshopsRef = useRef(null);
  const scheduleRef = useRef(null);
  const alumniRef = useRef(null);
  const faqRef = useRef(null);
  const packsRef = useRef(null);


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
      <Header setSideNavBarStatus={setSideNavBarStatus}
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
              scrollToRef={scrollToRef}
              contactRef={contactRef}
              sponsorRef={sponsorRef}
              aboutRef={aboutRef}
              guestsRef={guestsRef}
              scheduleRef={scheduleRef}
              alumniRef={alumniRef}
              faqRef={faqRef}
              sideNavBarStatus={sideNavBarsStatus}
      />
      <SideNavBar
        sideNavBarStatus={sideNavBarsStatus}
        setSideNavBarStatus={setSideNavBarStatus}
        setTabSelected={setTabSelected}
        scrollToRef={scrollToRef}
        contactRef={contactRef}
        sponsorRef={sponsorRef}
        aboutRef={aboutRef}
        guestsRef={guestsRef}
        packsRef={packsRef}
        scheduleRef={scheduleRef}
        alumniRef={alumniRef}
        faqRef={faqRef}
        workshopsRef={workshopsRef}
      />
      <Landing aboutRef={aboutRef} setSideNavBarStatus={setSideNavBarStatus} />
      <About aboutBottomRef={aboutBottomRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Logos setSideNavBarStatus={setSideNavBarStatus} />
      <Guests guestsRef={guestsRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Quotes setSideNavBarStatus={setSideNavBarStatus} />
      <Pack packsRef={packsRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Schedule scheduleRef={scheduleRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Learn learnRef={workshopsRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Talks setSideNavBarStatus={setSideNavBarStatus} />
      <Demo setSideNavBarStatus={setSideNavBarStatus} />
      <Psych setSideNavBarStatus={setSideNavBarStatus} />
      <Sponsors sponsorRef={sponsorRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Events alumniRef={alumniRef} setSideNavBarStatus={setSideNavBarStatus} />
      <FAQ faqRef={faqRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Contact contactRef={contactRef} setSideNavBarStatus={setSideNavBarStatus} />
      <Footer setSideNavBarStatus={setSideNavBarStatus} />
    </Layout>
  );
}



export default IndexPage;
