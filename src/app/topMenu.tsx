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
        bg-slate-300
        flex flex-row items-center justify-between
        transition-all duration-300 ease-in-out
        transform ${isVisible ? 'translate-y-0 opacity-95' : '-translate-y-full opacity-0'}
        `;
    
    const menuItemStyle = `
        text-l
        text-slate-700
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

                <h1 className='text-2xl'>
                    Matt Kwiatkowski
                </h1>
            </div>

            <div className='hidden md:flex flex-row gap-6'>
                <h2 className={menuItemStyle}>Item 1</h2>
                <h2 className={menuItemStyle}>Item 2</h2>
                <h2 className={menuItemStyle}>Item 3</h2>
                <h2 className={menuItemStyle}>Item 4</h2>
            </div>
            <div className={dropdownMenuStyle}>
                <h2 className={dropdownItemStyle}>Item 1</h2>
                <h2 className={dropdownItemStyle}>Item 2</h2>
                <h2 className={dropdownItemStyle}>Item 3</h2>
                <h2 className={dropdownItemStyle}>Item 4</h2>
            </div>
        </div>
    );
};

export default TopMenuBar;
