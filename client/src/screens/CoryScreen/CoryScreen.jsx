import React from "react";
import "../CoryScreen/CoryScreen.css"
import Layout from "../../components/shared/Layout/Layout";

const CoryScreen = () => {
  return (
    <Layout>
      <h2 className="cory-headline">This is Cory's screen</h2>
      <p className="cory-text" >This blog app sure has a lot of cats on it, but understandably, there may be dog people out there as well. Where are the dogs?</p>
    </Layout>
  )
}

export default CoryScreen