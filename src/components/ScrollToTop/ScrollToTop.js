import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop(props) {
    const location = useLocation()
    useEffect(() => {
        document.body.scrollTop = 0
    }, [location])
    return ( 
        <>{props.children}</>
     );
}

export default ScrollToTop;