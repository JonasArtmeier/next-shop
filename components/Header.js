import Link from 'next/link';

export default function Header() {
  return (
    <nav className="nav">
      <div className="navBar">
        <div className="products">
          <Link href="/products">
            <a className="navButton">Products</a>
          </Link>
        </div>
        <div className="home">
          <Link href="/index">
            <a className="navButton">
              <img
                className="logo"
                alt="funny logo and home botton"
                src="/bear-logo.png"
              ></img>
            </a>
          </Link>
        </div>
        <div className="userButton">
          <Link href="/user">
            <a className="navButton">User</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav {
          color: red;
          height: 83px;
          position: fixed;
          width: 100%;
          z-index: 100;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          background-color: #fffdf9;
          transition: background-color 0.18s, height 0.18s;
          align-items: center;
        }
        .navBar {
          height: 60px;
          padding: 39px 16px 16px;
          position: relative;
          max-width: 1209px;
          margin: auto;
          transition: padding 0.18s;
          display: flex;
          justify-content: space-around;
          vertical-align: middle;
          align-items: center;
          padding-top: 5px;
        }
        .home {
          display: flex;
          justify-content: space-around;
          align-items: center;
          vertical-align: middle;
          float: center;
          margin: 0;
          width: 118px;
          height: 28px;
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
          z-index: 2;
        }
        .products {
          width: 118px;
          height: 28px;
          margin: auto;
          float: left;
        }
        .userButton {
          width: 118px;
          height: 28px;
          margin: auto;
          float: right;
        }

        /* .logo {
            float: left;
            margin: auto;
            width: 118px;
            height: 28px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: auto;
          } */
      `}</style>
    </nav>
  );
}
