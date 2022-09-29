import './App.css';
import Header from "./components/Header/Header";
import ActivityList from "./pages/ActivityList";
import {useEffect, useState} from "react";
import Questions from "./components/Questions/Questions";


function App() {
    const [isOpenMobileSidebar, setOpenMobileSidebar] = useState(false)
    
    // mobile sidebar toggle handler
    function toggleOpenSidebar(){
        setOpenMobileSidebar(!isOpenMobileSidebar)
    }
    
    function handleChangeWindow(){
        // close mobile sidebar if window resize and innerWidth greater than 776px
        if(window.innerWidth >= 776) {
            setOpenMobileSidebar(false)
        }
    }
    
    useEffect(()=>{
        // initial check
        handleChangeWindow()
        
        window.addEventListener("resize", handleChangeWindow)
        
        // destroy resize event component onmount
        return ()=> window.addEventListener("resize", handleChangeWindow)
    }, [])
    
  return (
    <div className="container">
        <Header
            onToggleMobileSidebar={toggleOpenSidebar}
        />
        
        <ActivityList
            onToggleMobileSidebar={toggleOpenSidebar}
            isOpenMobileSidebar={isOpenMobileSidebar}
        />
        
        
    </div>
  );
}

export default App;
