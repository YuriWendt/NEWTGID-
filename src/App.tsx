import { useEffect, useState } from "react";
import { Loader } from "./components/loader";
import { Navbar } from "./components/navbar"
import { useLoader } from "./hooks/useLoader";
import { Home } from "./pages/home"


function App() {

  const [showContent, setShowContent] = useState(false);
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2000ms = 2 segundos
  }, []);

  return (
    <>
      {!showContent && <Loader />}
      {showContent && (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  )
}

export default App
