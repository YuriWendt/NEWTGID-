import { useEffect, useState } from "react";
import { Loader } from "./components/loader";
import { Navbar } from "./components/navbar"
import { useLoader } from "./hooks/useLoader";
import { Home } from "./pages/home"
import { MainRoutes } from "./routes";


function App() {

  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  return (
    <>
      {!showContent && <Loader />}
      {showContent && (
        <>
          <Navbar />
          <MainRoutes />
        </>
      )}
    </>
  )
}

export default App
