import { useState } from "react";
import Nav from "../Nav/Nav"
import { Menu } from 'lucide-react';

export default function Header() {
    const [ toggle, setToggle ] = useState<boolean>(false)

    return (
        <header className={`flex items-center justify-between sticky top-4 bg-[#0B153C] ${toggle ? 'h-full' : ''}`}>
            <div>
                <h1 className='text-xl md:text-3xl font-bold'>Vaccination.ng</h1>
                <div className="w-32 h-[5px] bg-[#17C2EC]"></div>
            </div>
            
           <div >
                {/**show if mobile */}
                <Menu className="md:hidden" size={30} onClick={()=> setToggle(!toggle)}/>

                {/**show if md */}
                <Nav onToggle={toggle}/>
           </div>

        </header>
    )
}