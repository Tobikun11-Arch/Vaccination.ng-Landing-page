import { useState, useEffect } from "react";
import Nav from "../Nav/Nav"
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [ toggle, setToggle ] = useState<boolean>(false)

    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ""; 
        }
    }, [toggle]);

    return (
        <header className={`fixed py-4 px-6 lg:py-4 lg:px-10 w-full flex items-center z-50 justify-between bg-[#0B153C] ${toggle && 'h-screen flex justify-center items-center z-50'}`}>
            <div className={`${toggle && 'fixed top-4 left-5'}`}>
                <h1 className='text-xl md:text-3xl font-bold'>Vaccination.ng</h1>
                <div className="w-32 h-[5px] bg-[#17C2EC]"></div>
            </div>

           <div>
                {/**show if mobile */}
                <X className={`fixed top-5 right-5 ${!toggle && 'hidden'}`} onClick={()=> setToggle(!toggle)}/>
                <Menu className={`lg:hidden ${toggle && 'hidden'}`} size={30} onClick={()=> setToggle(!toggle)}/>

                {/**show if md */}
                <Nav onToggle={toggle}/>
           </div>

        </header>
    )
}