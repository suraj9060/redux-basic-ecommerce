import React,{useEffect, useState} from 'react'
import { Navbar, Container, Nav,  Table } from "react-bootstrap"
import  ShoppingCartIcon  from "@mui/icons-material/ShoppingCart";
import { Badge } from '@mui/material';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import {REMOVE} from "../redux/action/Action"

const Header = () => {
  const [price, setPrice] = useState(0)
  
   
    
  const getData = useSelector(state => state.cartreducer.Carts);
  // console.log(getData)
  const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
  };
  
  const rmv = (id) => {
    dispatch(REMOVE(id))
  }

  const total = () => {
    let price = 0;
    getData.map((ele, k)=>{
      price = ele.price *ele.qnty + price
    });
    setPrice(price)
  };

   useEffect(() => {
     total();
   }, [total]);
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
            badgeContent={getData.length}
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
          {getData.length ? (
            <div
              className="cart_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt="img"
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>
                              <strong>Price</strong> ₹{e.price}
                            </p>
                            <p>Quantity {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i className="fas fa-trash smalltrash" onClick={()=>rmv(e.id)}></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash largetrash" onClick={()=>rmv(e.id)}></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className='text-center'>Total : ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                onClick={handleClose}
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 4,
                  right: 20,
                  cursor: "pointer",
                }}
              ></i>

              <p>Your cart is empty</p>
              <ShoppingCartIcon
                style={{ color: "green", fontSize: "5rem", padding: "20px" }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
}

export default Header