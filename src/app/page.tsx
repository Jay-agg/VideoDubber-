import Content from "@/components/Content";
import HeaderNavbar from "@/components/Header";
import OnBoarding from "@/components/Onboarding";
import PathBar from "@/components/TrackPage";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeaderNavbar />

      <OnBoarding />
      <PathBar />
      <div className="flex justify-center">
        <Content />
      </div>
    </div>
  );
};

export default Home;
