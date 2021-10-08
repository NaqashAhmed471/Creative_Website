import style from "./Topbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({ hamburgerOpen, setHamburgerOpen }) => {
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className={hamburgerOpen ? `${style.active}` : `${style.topbar}`}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <a href="#intro" className={style.logo}>
            genius.
          </a>
          <div className={style.itemContainer}>
            <PersonIcon className={style.icon} />
            <span>+44 924 12 74</span>
          </div>
          <div className={style.itemContainer}>
            <MailIcon className={style.icon} />
            <span>safak@genius.com</span>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.hamburger} onClick={toggleHamburger}>
            <span
              className={hamburgerOpen ? `${style.cross}` : `${style.line}`}
            ></span>
            <span
              className={hamburgerOpen ? `${style.cross}` : `${style.line}`}
            ></span>
            <span
              className={hamburgerOpen ? `${style.cross}` : `${style.line}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
