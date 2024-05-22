import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="z-10 absolute py-8 w-full padding-x">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat text-lg text-slate-gray leading-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          a <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
