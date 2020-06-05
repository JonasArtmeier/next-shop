import Link from 'next/link';
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';

export default function Header() {
  return (
    <nav className="nav">
      <div className="navBar">
        <div className="home">
          <Link href="/index">
            <a className="navButton">
              <img
                className="logo"
                alt="funny logo and home botton"
                src="/bear-logo-only.png"
              ></img>
            </a>
          </Link>
        </div>
        <div className="products">
          <span id="my-label" className="navButton">
            Products
          </span>
          <Listbox defaultValue="Products" className="navButton">
            {''}
            <ListboxOption value="Boys" className="navButton">
              <Link href="/boys">
                <a className="navButton">Boys</a>
              </Link>
            </ListboxOption>{' '}
            <ListboxOption value="Girls" className="navButton">
              <Link href="/girls">
                <a className="navButton">Girls</a>
              </Link>
            </ListboxOption>{' '}
          </Listbox>
        </div>

        {/* <div className="products">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <Link href="/products">
              <a className="navButton">Products</a>
            </Link>
          </a>
        </div> */}
        <div className="userButton">
          <Link href="/login">
            <a className="navButton">Login</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav {
          color: black;
          height: 73px;
          position: fixed;
          top: 0;
          width: 100%;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          background-color: #fffdf9;
          transition: background-color 0.18s, height 0.18s;
          box-shadow: 2px 2px;
          z-index: 100;
        }
        .navBar {
          color: lightgrey;
          height: 50px;
          width: 80%;
          margin: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-top: 5px;
        }
        .home {
          width: 118px;
          height: 28px;
          margin: auto;
        }
        .navButton {
          font-family: LL Circular Book Web, Muli, Arial, sans-serif;
          font-weight: 300;
          font-style: normal;
          text-rendering: optimizeLegibility;
          padding: 0 20px;
          font-size: 18px;
          line-height: 40px;
          color: #34414f;
          margin: auto;
          height: 28px;
          z-index: 100;
        }
        .products {
          width: 118px;
          height: 28px;
          margin: auto;
          z-index: 100;
        }
        .userButton {
          width: 118px;
          height: 28px;
          margin: auto;
        }

        .logo {
          box-sizing: border-box;
          width: 120%;
        }
      `}</style>
    </nav>
  );
}
