"use client"
import React, { useState, useEffect } from 'react';

const TopMenuBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    const handleMouseMove = (e: MouseEvent) => {
        if (e.clientY < 50) {
            setIsVisible(true);
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const menuStyle = `
        text-slate-700
        fixed top-0 w-full p-6 h-20
        bg-slate-400
        font-semibold
        pr-12
        flex flex-row items-center justify-between
        transition-all duration-300 ease-in-out
        transform ${isVisible ? 'translate-y-0 opacity-98' : '-translate-y-full opacity-0'}
        `;
    
    const menuItemStyle = `
        text-l
        font-semibold
        text-slate-100
        hover:text-white
        transition-all duration-200 ease-in-out
        cursor-pointer
        `;

    const dropdownMenuStyle = `
        flex flex-col gap-2 p-4
        bg-slate-400 shadow-lg
        absolute top-full right-0
        text-slate-200
        w-full
        transition-all duration-200 ease-in-out
        transform ${dropdownVisible ? 'opactity-100' : 'opacity-0'}
        ${dropdownVisible ? '': 'hidden'}
        `;

    const dropdownItemStyle = `
        text-l
        text-slate-200
        hover:text-slate-500
        transition-all duration-200 ease-in-out
        `;


    return (
        <div className={menuStyle}>
            <div className='flex flex-row'>
                {
                    (
                    <svg className="mt-1 mr-4 w-6 h-6 cursor-pointer visible md:invisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>)
                }

                <h1 className='text-2xl text-slate-500'>
                    {/* &lt; */}
                    <span className="text-slate-100">Matt Kwiatkowski</span>
                    {/* &gt; */}
                </h1>
            </div>

            <div className='hidden md:flex flex-row gap-6'>
                <a href="#aboutme"><h2 className={menuItemStyle}>About Me</h2></a>
                
                <a href="#portfolio"><h2 className={menuItemStyle}>Portfolio</h2></a>
                {/* <a href="#aboutme"><h2 className={menuItemStyle}>Research</h2></a> */}
                <a href="#contact"><h2 className={menuItemStyle}>Contact</h2></a>
            </div>
            <div className={dropdownMenuStyle}>
                <a href="#aboutme"><h2 className={dropdownItemStyle}>About Me</h2></a>
                <a href="#portfolio"><h2 className={dropdownItemStyle}>Portfolio</h2></a>
                {/* <a href="#aboutme"><h2 className={dropdownItemStyle}>Research</h2></a> */}
                <a href="#contact"><h2 className={dropdownItemStyle}>Contact</h2></a>
            </div>
        </div>
    );
};

export default TopMenuBar;
