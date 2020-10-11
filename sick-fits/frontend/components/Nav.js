import Link from 'next/link'
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles data-test="nav">
        <Link href="/items">
            <a>Items</a>
        </Link>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/orders">
            <a>Orders</a>
        </Link>
        <Link href="/account">
            <a>Account</a>
        </Link>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
  </NavStyles>
)

export default Nav;