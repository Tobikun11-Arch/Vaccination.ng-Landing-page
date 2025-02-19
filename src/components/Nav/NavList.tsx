
interface NavProps {
    href: string
    label: string
}

export default function NavList({ href, label }: NavProps) {
    return (
        <div className="flex flex-col items-center">
            <a href={href} className="hover:border-b-2 hover:border-[#17C2EC]">{label}</a>
        </div>
    )
}
