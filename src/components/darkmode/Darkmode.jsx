import React,{useEffect} from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import "./darkmode.css";

const Dark = () => {
    
    const setDarkMode=()=>{
        document.querySelector('body').setAttribute('data-theme','dark');
        localStorage.setItem("selectedTheme","dark");
    };
    const setLightMode=()=>{
        document.querySelector('body').setAttribute('data-theme','light');
        localStorage.setItem("selectedTheme","light");
    };
    
    const toggleTheme=(e)=>{
        if(e.target.checked){setDarkMode();}
        else{setLightMode();}
    };

    useEffect(() => {
        // Apply the theme from localStorage on component mount
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme === "dark") {
            document.querySelector("body").setAttribute("data-theme", "dark");
            document.getElementById("darkmode-toggle").checked = true; // Set toggle state
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }, []); // Runs only once on mount


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <FiSun className="sun svg" />
                <IoMoonOutline className="moon svg"  />
            </label>
        </div>
    );
};

export default Dark;
