import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Details.module.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ChildDetails from "../components/ChildDetails";

import { AddressModal } from "@/components/Address.Modal";
import Addresses from "@/components/Addresses";
import Order from "@/components/Order";
const Form = () => {
  const [show, setShow] = useState(false);
  const { getUserData, user } = useContext(CartContext);

  const [childData, setChildData] = useState({
    name: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChildData((el) => ({
      ...el,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`https://troubled-organized-denim.glitch.me/user/${user.id}`, {
        child: childData,
      })
      .then((res) => {
        console.log(res);
        alert("succesfully patch");
        getUserData(user.id);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <>
      {user && (
        <div className={styles.mainContainer}>
          {/*------------------- My Profile-------------------------------- */}

          <div className={styles.DetailsContainer}>
            <h1 className={styles.MyProfile}>My Profile</h1>

            <div className={styles.parentNameContainer}>
              <div className={styles.nameContainer}>
                <h3>{user.name}</h3>
                <p>Guardian</p>
              </div>

              <div>
                <img width="100px" height="120px" src={user.img} alt="" />
              </div>
            </div>

            {/*------------------------------------------------------------------- CONATACT----------------------------------------------- */}

            <h1 className={styles.Contact}> My Contact </h1>
            <div className={styles.ContactMain}>
              <div className={styles.parentContactContainer}>
                <div className={styles.ContactContainer}>
                  <p className={styles.Email}>Email:</p>
                  <p className={styles.EmailValue}>{user.email}</p>
                </div>
                {user.phn ? (
                  <div className={styles.ContactContainer}>
                    <p className={styles.Email}>Mobile No:</p>
                    <p className={styles.EmailValue}>{user.phn}</p>
                  </div>
                ) : (
                  <div div className={styles.ContactContainer}>
                    <p className={styles.Email}>Mobile:</p>
                    <p className={styles.EmailValue}>Not in Database</p>
                  </div>
                )}
                <div className={styles.ContactContainer}>
                  <p className={styles.Email}>Total Orders:</p>
                  <p className={styles.EmailValue}>{user.orders.length}</p>
                </div>
                <div className={styles.ContactContainer}>
                  <p className={styles.Email}>Cart Items:</p>
                  <p className={styles.EmailValue}>{user.cart.length}</p>
                </div>

                <div className={styles.ContactContainer}>
                  <p className={styles.Email}>Wishlist Items:</p>
                  <p className={styles.EmailValue}>{user.wishlist.length}</p>
                </div>
              </div>

              <div className={styles.msgContainer}>
                <p className={styles.msgHead}>
                  Your Mobile Number is not Verified
                </p>
                <p className={styles.msg}>
                  By verifying your mobile number with us you can now
                  Shop'n'Earn Club Cash at our FirstCry.com stores too! To earn
                  Club Cash on store purchases, simply provide your verified
                  mobile number at the time of billing.
                </p>
              </div>
            </div>

            {/* ------------------------------------CHILD DETAILS -------------------------------------------------------------*/}

            <div className={styles.ChildDetails}>
              <h1 className={styles.Contact}> Child Details </h1>

              <div>
                <ChildDetails />
              </div>

              <div className={styles.mainBox}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.Input}>
                    <label>Name :</label>
                    <input
                      className={styles.boxInput1}
                      type="text"
                      placeholder="Enter Your Child Name"
                      name="name"
                      value={childData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.InputBirth}>
                    <label>DOB :</label>
                    <input
                      className={styles.boxInput}
                      type="date"
                      placeholder="Date Of Birth"
                      name="dob"
                      value={childData.dob}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.Input}>
                    <label>Gender :</label>
                    <div className={styles.radioLabel}>
                      <label>
                        {" "}
                        <input
                          type="radio"
                          name="gender"
                          value="girl"
                          checked={childData.gender === "girl"}
                          onChange={handleInputChange}
                        />
                        Girl
                      </label>
                      <label>
                        {" "}
                        <input
                          type="radio"
                          name="gender"
                          value="boy"
                          checked={childData.gender === "boy"}
                          onChange={handleInputChange}
                        />
                        Boy
                      </label>
                    </div>
                  </div>

                  <div className={styles.Input}>
                    <div>
                      <label>Weigth :</label>
                      <input
                        className={styles.KG}
                        placeholder="KG"
                        type="number"
                        name="weight"
                        value={childData.weight}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div cl>
                      <label>Height :</label>
                      <input
                        className={styles.KG}
                        placeholder="CM"
                        type="number"
                        name="height"
                        value={childData.height}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className={styles.btnDiv}>
                    <button className={styles.Btn} type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* -----------------MY ADDRESS BOOK --------------------- */}

            <div>
              <h1 className={styles.Contact}> My Address Book </h1>
              <AddressModal />
              {user?.addresses.map((address) => (
                <Addresses address={address} />
              ))}
            </div>
            <div>
              <h1 className={styles.Contact}> My Orders </h1>
              {user?.orders.map((order) => (
                <Order order={order} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
