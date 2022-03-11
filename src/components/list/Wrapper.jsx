import React from "react";
// import "./Wrapper.css"

const Wrapper = ({children}) => {
    return <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        {children}
    </div>
}

export default Wrapper;