import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Productdeatis.css";
import Search from "../Search/Search";
import { MdCheck } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { statusChnage } from "../../redux/action";
import EditProductModalContent from "../EditProductModalContent/EditProductModalContent";
const Productdeatis = () => {
  const [edit, setedit] = useState(false);
  const [editvalue, setEditvalue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((sel) => sel.data);
  console.log("data is ", data);
  const handleCrossIconClick = (id, productName) => {
    Swal.fire({
      title: "Missing!",
      text: `is misssing ${productName} ?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("id is", id);
        dispatch(statusChnage(id, "missing-urgent"));
        console.log("User clicked Yes");
      } else {
        dispatch(statusChnage(id, "missing"));
        console.log("id is", id);
        console.log("User clicked No");
      }
    });
  };
  //edit
  const handleEditClick = (ele) => {
    setedit(true);
    setEditvalue(ele);
  };

  //edit end

  //handle the checkk button
  const handleCheck = (id) => {
    dispatch(statusChnage(id, "approved"));
  };
  return (
    <>
      <div className="productdeatis-outer">
        {edit && (
          <EditProductModalContent setedit={setedit} editvalue={editvalue} />
        )}
        <div className="productdeatis-inner">
          <Search />
          <table>
            <thead>
              <tr>
                <th>Product </th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((ele, i) => (
                  <tr key={i}>
                    <td style={{ width: "20px" }}>
                      <img
                        src={ele.img}
                        alt={ele.product_name} // Make sure to include an alt attribute for accessibility
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </td>

                    <td>{ele.product_name}</td>
                    <td>{ele.price}</td>
                    <td>{ele.quantity}</td>
                    <td>{ele.quantity * ele.price}</td>
                    <td>
                      <div className="table-status-box">
                        <div>
                          {!ele.status && <span>Pending...</span>}
                          {ele.status === "approved" && (
                            <button className="approved">Approved</button>
                          )}
                          {ele.status === "missing-urgent" && (
                            <button className="missing-urgent">
                              Missing-Urgent
                            </button>
                          )}
                          {ele.status === "missing" && (
                            <button className="missing">Missing</button>
                          )}
                        </div>
                        <div>
                          <MdCheck
                            style={{
                              color:
                                ele.status === "approved" ? "green" : undefined,
                            }}
                            className="corect-icon table-icon fa-lg"
                            onClick={() => handleCheck(ele.id)}
                          />
                          <FaTimes
                            style={{
                              color:
                                ele.status === "missing"
                                  ? "rgb(253 15 15 / 72%)"
                                  : ele.status === "missing-urgent"
                                  ? "rgba(211, 11, 11, 0.72)"
                                  : undefined, // Provide a default color or remove this line if not needed
                            }}
                            className="cross-icon table-icon fa-sm"
                            onClick={() =>
                              handleCrossIconClick(ele.id, ele.product_name)
                            }
                          />

                          <span
                            onClick={(e) => handleEditClick(ele)}
                            className="edit-icon table-icon"
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Productdeatis;
