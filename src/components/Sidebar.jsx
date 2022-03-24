import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser,FaLaptop,FaDollarSign,FaBook,FaBookOpen,FaMoneyBillAlt,FaCalendar} from "react-icons/fa";

import {  BiSearch } from "react-icons/bi";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";
const routes = [
  {
    path: "/Registrar",
    name: "Registrar",
    icon: <FaHome />,
    subRoutes: [
      {
        path: "/Registrar/deshboard",
        name: "Deshboard ",
       
      },
      {
        path: "/Registrar/faculty",
        name: "faculty",
      
      },
      {
        path: "/Registrar/Department",
        name: "Department",
        
      },
      {
        path: "/Registrar/Roles",
        name: "Roles",
        
      },
      {
        path: "/Registrar/StaffList",
        name: "Staff List",
     
      },
      {
        path: "/Registrar/StaffAttendance",
        name: "Staff Attendance",
        
      },
      {
        path: "/Registrar/Admins",
        name: "Admins",
        
      },
    ],
  },

  {
     
    path: "/Examination",
    name: "Examination",
    icon: <FaLaptop/>,
    subRoutes: [
      {
        path: "/Examination/Internal",
        name: "Internal",
       
      },
      {
        path: "/Examination/External",
        name: "External",
     
      },
      {
        path: "/Examination/Practical",
        name: "Practical",
        
      },
      {
        path: "/Examination/Viva",
        name: "Viva",
      
      },
      {
        path: "/Examination/Project",
        name: "Project",
       
      },
      {
        path: "/Examination/ExamAttendance",
        name: "Exam Attendance",
        
      },
    ],
  },
  {
    path: "/students",
    name: "Students",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/students/Deshboard",
        name: "Deshboard ",
 
      },
      {
        path: "/students/StudentDeatails",
        name: "Student Deatails",
      
      },
      {
        path: "/students/Exam Result",
        name: "Exam Result",
        
      },
      {
        path: "/students/FeeVoucher",
        name: "Fee Voucher",
        
      },
      {
        path: "/students/FeeStatus",
        name: "Fee Status",
        
      },
      {
        path: "/students/Attendance",
        name: "Attendance",
        
      },
    ],
  },
  {
    path: "/accounting",
    name: "Accounting",
    icon: <FaDollarSign />,
    subRoutes: [
      {
        path: "/accounting/Dashboard",
        name: "Dashboard",
        
      },
      {
        path: "/accounting/AccountingHead ",
        name: "Accounting Head ",
       
      },
      {
        path: "/accounting/Invoice",
        name: "Invoice",
    
      },
      {
        path: "/accounting/SalaryList",
        name: "Salary List",
     
      },
    ],
  },
  {
    path: "/library",
    name: "Library",
    icon: <FaBook />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Dashboard",
    
      },
      {
        path: "/settings/2fa",
        name: "Books List",
     
      },
      {
        path: "/settings/billing",
        name: "Library Head",
        
      },
    ],
  },
  {
    path: "/subjectmaster",
    name: "Subject Master",
    icon: <FaBookOpen/>,
    subRoutes: [
      {
        path: "/subjectmaster/Dashboard",
        name: "Dashboard",
       
      },
      {
        path: "/subjectmaster/SubjectHead",
        name: "Subject Head",
       
      },
      {
        path: "/subjectmaster/SubjectList",
        name: "Subject List",
    
      },
    ],
  },
  
  {
    path: "/feeshead",
    name: "FeesHead",
    icon: <FaMoneyBillAlt />,
       subRoutes: [
      {
        path: "/feeshead/Dashboard",
        name: "Dashboard",
        
      },
      {
        path: "/feeshead/FeesHead",
        name: "Fees Head ",
       
      },
      {
        path: "/feeshead/FeeVoucher",
        name: "Fee Voucher",
        
      },
    ],
  },
  {
    path: "/teachingscheme",
    name: " TeachingScheme",
    icon: <FaCalendar/>,
       subRoutes: [
      {
        path: "/teachingscheme/Deshboard",
        name: "Deshboard ",
        
      },
      {
        path: "/teachingscheme/TeachingSchemeHead",
        name: "Teaching Scheme Head",
        
      },
      {
        path: "/teachingscheme/SchemesList",
        name: "Schemes List",
       
      },
    ],
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
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
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
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
                  DDU
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
      </div>
    </>
  );
};

export default SideBar;
