import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";


const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
    book: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number (10 digits required)";
    }
    if (!formData.book.trim()) newErrors.book = "Book name is required";
    if (!formData.quantity.trim() || isNaN(formData.quantity) || formData.quantity <= 0) {
      newErrors.quantity = "Enter a valid quantity";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully!");
      
      // Clear form data after order
      setFormData({
        name: "",
        email: "",
        address: "",
        mobile: "",
        book: "",
        quantity: "",
      });

      setErrors({}); // Clear errors if any

      setOrderPopup(false); // Close popup after ordering
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="overlay">
          <div className="popup">
            {/* Header */}
            <div className="popup-header">
              <h1>Order Your Book</h1>
              <IoCloseOutline className="close-icon" onClick={() => setOrderPopup(false)} />
            </div>

            {/* Body */}
            <form className="popup-body" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}

              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
              {errors.address && <p className="error">{errors.address}</p>}

              <input type="number" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
              {errors.mobile && <p className="error">{errors.mobile}</p>}

              <input type="text" name="book" placeholder="Book Name" value={formData.book} onChange={handleChange} />
              {errors.book && <p className="error">{errors.book}</p>}

              <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
              {errors.quantity && <p className="error">{errors.quantity}</p>}

              <button type="submit" className="order-btn">Order Now</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
