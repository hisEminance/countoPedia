import React from "react";

export default function Button ({label, onClick, className}) {
 return ( 
    <button className={`w-100 mt-2 ${className}`} onClick={onClick}>{label}</button>
 ); 
}
