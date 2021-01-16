import { useEffect, useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (parameterReceived) => {
    setCurrentPage(parameterReceived);
    // console.log(currentPage);
  };

  if (currentPage === "Home") {
    return (
      <div>
        <NavTabs
          // currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <Home />
      </div>
    );
  }
  if (currentPage === "About") {
    return (
      <div>
        <NavTabs
          // currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <About />
      </div>
    );
  }
  if(currentPage === "Blog"){
    return(
      <div>
      <NavTabs
        // currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Blog/>
    </div>
    )
  }
  if(currentPage === "Contact"){
    return(
      <div>
      <NavTabs
        // currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Contact/>
    </div>
    )
  }
};

export default PortfolioContainer;
