import NavList from "./NavList"

interface NavOnclick {
    onToggle: boolean
}

export default function Nav({ onToggle }: NavOnclick) {
    return (
        <nav className={`md:flex items-center gap-5 font-semibold ${onToggle ? 'block' : 'hidden'}`}>
            <NavList href="" label="Home" />
            <NavList href="" label="Services"/>
            <NavList href="" label="Schedule"/>
            <NavList href="" label="Contact us"/>
        </nav>
    )
}