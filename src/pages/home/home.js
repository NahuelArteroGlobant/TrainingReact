import React from "react";
import "./home.scss";
import Layout from "../../components/layout/layout";
import Footer from "../../components/footer/footer";
import SectionColumnist from "../../components/sectionColumnist/sectionColumnist";
import Section from "../../components/section/section";
import Aside from "../../components/aside/aside";

function Home() {
  return (
    <Layout>
      <Section />
      <Aside />
      <SectionColumnist />
      <Footer />
    </Layout>
  );
}
export default Home;
