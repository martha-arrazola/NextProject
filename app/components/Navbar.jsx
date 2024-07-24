import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar py-5 bg-cyan-900 text-white font-bold text-xl flex items-center justify-center">
            <Link href="/">Home</Link>
        </nav>
    );
}
