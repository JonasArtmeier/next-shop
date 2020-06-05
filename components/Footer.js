import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative">
      <div className="footer">
        <p className="paragraph">Powered by</p>
        <a
          href="https://github.com/krozzle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="/bear-logo.png" alt="Logo" />
        </a>
        <br />
        <div className="footLink">
          <ul className="footLink">
            <li className="listStyle">
              <a href="/">Order Status</a>
            </li>
            <li className="listStyle">
              <a href="/">Shipping and Delivery</a>
            </li>
            <li className="listStyle">
              <a href="/">Returns</a>
            </li>
            <li className="listStyle">
              <a href="/">Contact Us</a>
            </li>
            <li className="listStyle">
              <a href="/">Payment Options</a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .relative {
          }
          .footer {
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100;
            border-top: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: black;
            margin-top: 15px;
            margin-bottom: 0;
            background-color: transparent;

            background-color: #fffdf9;
          }
          .logo {
            display: flex;
            justify-content: space-around;
            align-items: stretch;
          }
          .image {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 2em;
            width: 2em;
          }
          .paragraph {
            margin-right: 0.45em;
          }
          .footLink {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 75%;
          }
          .listStyle {
            list-style-type: none;
          }
        `}
      </style>
    </div>
  );
}
