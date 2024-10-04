import {useEffect,useState} from "react";
import Services from "./Services"
export default function TopServices(){
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update the state based on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return(
      
        <>
        <div className="typewriter">
            <h3>Our Top Services</h3>
        </div>
        <div className="d-flex flex-row justify-content-center">
        <Services/>
        {!isMobile && <Services/>}
        </div>
        </>
    )
}