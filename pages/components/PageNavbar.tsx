import Link from "next/link";
import Image from "next/image";

function PageNavbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="navbar__logo">
            <Link href="/">
              <a>
                <Image
                  src="/images/header__icon.png"
                  height={32}
                  width={32}
                  alt="header icon"
                />
              </a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/">
              <a className="navbar__item__link">Главная</a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/todo">
              <a className="navbar__item__link">Задачи</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          background: #7465bf;
          padding: 2rem 5rem;
        }
        .navbar {
          display: flex;
          width: 100%;
          max-width: 1192px;
          list-style-type: none;
        }
        .navbar__logo {
          margin-right: auto;
        }
        .navbar__item:last-child {
          margin-left: 1rem;
        }
        .navbar__item__link {
          text-decoration: none;
          color: #fff;
        }
        .navbar__item__link:hover {
          border-bottom: 2px solid #fff;
        }
      `}</style>
    </>
  );
}

export default PageNavbar;
