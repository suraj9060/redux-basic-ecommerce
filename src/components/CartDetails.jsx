import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CartDetails = () => {

  const [data , setData] = useState([])
 console.log(data)
  const { id } = useParams()
  // console.log(id)
    const getData = useSelector((state) => state.cartreducer.Carts);
    // console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

  useEffect(() => {
    compare()
  },[id])


  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {
            data.map((element) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={element.imgdata}
                      alt=""
                    />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {element.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹ {element.price}
                          </p>
                          <p>
                            <strong>Dishex</strong> : {element.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹ 500
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              ★{element.rating}
                            </span>
                          </p>

                          <p>
                            <strong>Order Review</strong>{" "}
                            <span>{element.somedata}</span>
                          </p>

                          <p>
                            <strong>Rating :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  fontSize: 25,
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })
        }




          
        </div>
      </section>
    </div>
  );
}

export default CartDetails