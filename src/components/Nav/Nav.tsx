import NavList from "./NavList"

interface NavOnclick {
    onToggle: boolean
}

export default function Nav({ onToggle }: NavOnclick) {
    return (
        <nav className={`lg:flex text-lg items-center gap-5 font-bold ${onToggle ? 'block' : 'hidden'}`}>
            <NavList href="#home" label="Home" />
            <NavList href="#services" label="Services"/>
            <NavList href="#schedule" label="Schedule"/>
            <NavList href="#contact" label="Contact us"/>
        </nav>
    )
}