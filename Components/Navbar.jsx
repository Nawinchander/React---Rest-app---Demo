// import React from 'react'
import { BsCart2, BsCartX } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { CommentRounded, PhoneRounded, ShoppingCartRounded } from "@mui/icons-material"
import { useState } from "react"

const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false)
  // const [openSubMenu, setOpenSubMenu] = useState(false)
  const menuOption = [
    {
      text: 'Home',
      icon:<HomeIcon />,
    },
    {
      text: 'About',
      icon:<InfoIcon />,
    },
    {
      text: 'Testimonals',
      icon:<CommentRoundedIcon />,
    },
    {
      text: 'Contact',
      icon:<PhoneRoundedIcon />,
    },
    {
      text: 'Cart',
      icon:<ShoppingCartRoundedIcon />,
    }
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt=""></img>
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <a href="#">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Booking Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open = {openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{width: 250}}
          role= "presentation"
          onClick ={() => setOpenMenu(false)}
          onKeyDown = {() => setOpenMenu(false)}>
            <List>
              {menuOption.map((option, index) => (
                <ListItem button key ={option.text}>
                  <ListItemIcon>
                    {option.icon}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar