import { Outlet, useNavigation } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const LayOut = () => {
  const Navigation = useNavigation();

  console.log(Navigation);

  if (Navigation.state === "loading") {
    return (
      <div className="movieLoader">

        <div className="filmReel">
          🎞️
        </div>

        <h2>Loading Movie...</h2>

        <div className="loadingDots">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};