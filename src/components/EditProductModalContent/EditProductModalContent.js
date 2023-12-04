import React, { useState, useEffect } from "react";
import "./EditProductModalContent.css";
import pimage from "../../image/Applegreensmith.png";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { editProduct } from "../../redux/action";
import { useDispatch } from "react-redux";

const EditProductModalContent = ({ setedit, editvalue }) => {
  const { id, product_name, price, img } = editvalue;
  console.log("image is", img);
  const [quantityValue, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity(quantityValue + 1);
  };

  const handleDecrement = () => {
    if (quantityValue > 1) {
      setQuantity(quantityValue - 1);
    }
  };

  const handleModalClose = () => {
    setedit(false);
  };

  const totalPrice = quantityValue * price;

  const handleSave = () => {
    dispatch(editProduct(id, quantityValue));
    setedit(false);
  };

  useEffect(() => {
    // Disable scrolling on the background when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-inner">
          <div className="modal-close" onClick={handleModalClose}>
            <FaTimes
              style={{ cursor: "pointer", fontSize: "2rem", color: "red" }}
            />
          </div>
          <h3 style={{ textAlign: "center" }}>{product_name} </h3>
          <div className="modal-inner-first">
            <div className="modal-image">
              <img src={img} alt="Product Image" style={{ width: "100%" }} />
            </div>
            <div className="modal-content">
              <div className="modal-content-left">
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Total</h3>
              </div>
              <div className="modal-content-right">
                <p>{price}</p>
                <div className="button-box">
                  <CiCirclePlus
                    onClick={handleIncrement}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      fontSize: "30px",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  />
                  <span>{quantityValue}</span>
                  <CiCircleMinus
                    onClick={handleDecrement}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      fontSize: "30px",
                      cursor: "pointer",
                      borderRadius: "30px",
                    }}
                  />
                </div>
                <p>{totalPrice}</p>
              </div>
            </div>
          </div>
          <div className="btn-save-cancel">
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModalContent;
