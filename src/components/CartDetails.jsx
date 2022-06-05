import React from 'react'
import { Table } from 'react-bootstrap';

const CartDetails = () => {

  




  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          <div className="items_img">
            <img
              src="https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg"
              alt=""
            />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Restaurant</strong> : masai School
                  </p>
                  <p>
                    <strong>Price</strong> : ₹ 500
                  </p>
                  <p>
                    <strong>Dishex</strong> : masai School , biryani , Mughli
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
                      ★3.5
                    </span>
                  </p>

                  <p>
                    <strong>Order Review</strong>{" "}
                    <span>1175 + Order Placed From Here Recently</span>
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
                          cursor: 'pointer',
                          fontSize:25
                        }}
                      ></i>
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartDetails