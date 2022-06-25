import Link from "next/link";

const linkStyle ={
    marginRight: 15
}
const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}> HOME </a>
        </Link>

        <Link href="/about">
            <a style={linkStyle}> about </a>
        </Link>
    </div>
)
export default Header