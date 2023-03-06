
import React from "react";

import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import styles from '../styles/Details.module.css'

const childDetails = ({setShow}) => {
  
  const {user}= useContext(CartContext);
  // console.log("data",user)

  return (
   

<div className={styles.MainContainer}>
  

<div div className={styles.OddContainer}>

<p className={styles.Child}>NAME:</p>
  <p className={styles.ChildValue}>{user.child.name}</p>
</div>

<div div className={styles.ContactContainer}>
  <p className={styles.Child}>DOB:</p>
  <p className={styles.ChildValue}>{user.child.dob}</p>
</div>


<div div className={styles.OddContainer}>
  <p className={styles.Child}>GENDER:</p>
  <p className={styles.ChildValue}>{user.child.gender}</p>
</div>


<div div className={styles.ContactContainer}>
  <p className={styles.Child}>WEIGHT:</p>
  <p className={styles.ChildValue}>{user.child.weight}</p>
</div>

<div div className={styles.OddContainer}>
  <p className={styles.Child}>HEIGHT:</p>
  <p className={styles.ChildValue}>{user.child.height}</p>
</div>
   <button  className={styles.AddBtn} onClick={()=>setShow(false)}>ADD</button>
</div>
  )
}

export default childDetails