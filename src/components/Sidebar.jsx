import { NavLink } from "react-router-dom";
import { FaBars,FaSearchLocation, FaHome, FaPlaceOfWorship,FaLock, FaMoneyBill, FaUser,FaHandsHelping,FaMapMarkerAlt } from "react-icons/fa";
// import { FiLogIn } from "react-icons/fi";
import {  BiSearch,BiShow,BiPhotoAlbum } from "react-icons/bi";
import {  FcProcess} from "react-icons/fc";
// import {  IoLanguage} from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { MdEditLocation,MdLanguage,MdPhotoFilter} from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './Sidebar.css';
const routes = [
    
  {
    path: "/",
    name: "Homepage",
    icon: <FaHome />,
  },
  {
    path: "/About",
    name: "About",
    icon: <FaUser />,
  },
  {
    path: "/Login",
    name: "Login",
    icon: <AiOutlineLogin />,
  },
  {
    path: "/HelpingHands",
    name: "HelpingHands",
    icon: <FaHandsHelping />,
  },
  {
    path: "/AddNewPlace",
    name: "AddNewPlace",
    icon: <FaMapMarkerAlt />,
    subRoutes: [
      {
        path: "/Stepper",
        name: "Stepper",
        icon: <FaUser />,
      },
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/SearchedPlace",
    name: "SearchedPlace",
    icon: <FaSearchLocation />,
  },
  {
    path: "/EditPlace",
    name: "EditPlace",
    icon: <MdEditLocation />,
  },
  {
    path: "/AllPlaces",
    name: "AllPlaces",
    icon: <FaMapMarkerAlt />,
  },
  {
    path: "/MyPlaces",
    name: "MyPlaces",
    icon: <FaPlaceOfWorship />,
  },
  {
    path: "/Procedure",
    name: "Procedure",
    icon: <FcProcess />,
  },
  {
    path: "/Procedure1",
    name: "Procedure1",
    icon: <FcProcess />,
  },
  {
    path: "/Procedure2",
    name: "Procedure2",
    icon: <FcProcess />,
  },
  {
    path: "/PublicPlaceProcedure",
    name: "PublicPlaceProcedure",
    icon: <FaUser />,
  },
  {
    path: "/ShowPlaceProcedure",
    name: "ShowPlaceProcedure",
    icon: <BiShow />
},
    {
        path: "/PhotoeditorProcedure",
        name: "PhotoeditorProcedure",
        icon: <MdPhotoFilter />,
      },
      {
        path: "/PhotoEditor",
        name: "PhotoEditor",
        icon: <BiPhotoAlbum />,
      },

  {
    path: "/Language",
    name: "Language",
    icon: <MdLanguage/>,
    
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/HelpingHandProcedure",
    name: "HelpingHandProcedure",
    icon: <FaHandsHelping />,
  },
 
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.0,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.0,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "50px",

            transition: {
              duration: 0.0,
            //   type: "spring",
            //   damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
            
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
  
        };

export default SideBar;
