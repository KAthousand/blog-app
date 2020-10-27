import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import KyleComponent from "../../components/KyleComponent/KyleComponent";
import "../KyleScreen/KyleScreen.css";

function KyleScreen(props) {
  return (
    <Layout>
      <div className="kyle-screen">
        <KyleComponent />
      </div>
    </Layout>
  );
}

export default KyleScreen;
