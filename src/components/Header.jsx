import React,{useState} from 'react'
import { Navbar, Container, Nav, NavLink } from "react-bootstrap"
import  ShoppingCartIcon  from "@mui/icons-material/ShoppingCart";
import { Badge } from '@mui/material';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add To Cart{" "}
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/cart" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon
              style={{ color: "white", fontSize: 30, cursor: "pointer" }}
            />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem" , padding:10 , position:"relative" }}>
            <i onClick={handleClose} className="fas fa-close smallclose" style={{position:"absolute", top:4,right:20,cursor:"pointer" }}></i>
            
              <p>Your cart is empty</p>
              <ShoppingCartIcon style={{ color: "green", fontSize: "5rem", padding:"20px" }} />
            
          </div>
        </Menu>
      </Navbar>
    </div>
  );
}

export default Header