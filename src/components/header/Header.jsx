
import React, { useState, useEffect } from 'react'
import "./Header.css"
import navlogo1 from "../../assets/Logo (3).png"
import navlogo2 from "../../assets/Logo (4).png"
import navlogo3 from "../../assets/nav1.png"
import navlogo4 from "../../assets/nav2.png"
import navlogo5 from "../../assets/nav3.png"
import navlogo6 from "../../assets/nav4.png"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Switch } from "antd";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { pathname } = useLocation()
  const bg = pathname === "/media" ? "bg-slate-300 backdrop-blur-sm text-black" : "bg-[#ffffffdd]"
  const links = ["Каталог", "Доставка", " Условия", "Контакты"]
  const number = ["+ 375 736 463"]
  return (
    <header id='header' className={`header h-[70px]  flex gap-5 p-5 items-center mt-[12px] ${bg}`}>
      <div className='container  justify-between items-center'>
        <nav className="navbar bg-inherit py-5 flex items-center justify-between">
          <div className="flex gap-1 items-center navbar__img justify-center">
            <div>
              <Link to={"/"}>
                <img src={navlogo1} alt="" />
              </Link>
            </div>
            <div>
              <Link className='logo' to={"/"}>
                <img src={navlogo2} alt="" />
              </Link>
            </div>
          </div>
          <div className={`nav__collect items-center flex justify-center gap-6 ${isMenuOpen ? "show" : ""}`} >
            <ul className="navbar__collection flex gap-12">
              <li>
                <Link className='hover:text-[#C61F1F] ease-in-out flex flex-col items-center' to={"/"}>
                  <img src={navlogo3} alt="" />
                  <p className='text-[12px]  text-[#d8d5d5] font-medium'>Home</p>
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#C61F1F] ease-in-out flex flex-col items-center' to={"/cinema"}>
                  <img src={navlogo4} alt="" />
                  <p className='text-[12px]  text-[#d8d5d5] font-medium'>Movies</p>
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#C61F1F] ease-in-out flex flex-col items-center' to={"/detail"}>
                  <img src={navlogo5} alt="" />
                  <p className='text-[12px]  text-[#d8d5d5] font-medium'>Detail</p>
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#C61F1F] ease-in-out flex flex-col items-center' to={"movie/:id"}>
                  <img src={navlogo6} alt="" />
                  <p className='text-[12px]  text-[#d8d5d5] font-medium'>Search</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__item flex items-center ">
            <select className='select' name="langs" id="langs">
              <option value="Russian">Russian</option>
              <option value="English">English</option>
              <option value="Uzb">Uzb</option>
            </select>
            <Switch onClick={myFunction()} checkedChildren="light"  unCheckedChildren="dark" defaultChecked />
          </div>
          <div onClick={toggleMenu} className="navbar__menu text-2xl">
            <AiOutlineMenuUnfold />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header