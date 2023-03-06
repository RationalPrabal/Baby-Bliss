import React, { useState} from "react";
import axios from 'axios';
import styles from  '../styles/Details.module.css'
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import ChildDetails from "../components/ChildDetails";

const Form = () => {
const [show,setShow]=useState(false)
  const {user}= useContext(CartContext);
  // console.log("userid",user)
  const [childData, setChildData] = useState({
    name: '',
    dob: '',
    gender: '',
    weight: '',
    height:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChildData((el) => ({
      ...el,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`https://troubled-organized-denim.glitch.me/user/${user.id}`,{child:childData})
      .then((res) => {
        console.log(res);
        alert("succesfully patch")
        setShow(true)
      })
      .catch((err) => {
        console.log(err);
        alert(err.message)
      });
  };

  
  return (
    <>

      
    {user &&

  
    <div className={styles.mainContainer}>

                <div className={styles.barContainer}>
                     
                     
                     <h1 className={styles.Htag}>My Account</h1>

                        <div className={styles.HeadingsCaontainer}>

                          <h2 className={styles.Headings}>My Orders</h2>
                             <div >
                                 <p className={styles.pTags}>Order History</p>
                                <p className={styles.pTags}>Manage Returns</p>
                                <p className={styles.pTags}>Quick Reorder</p>
                                <p className={styles.pTags}>Track Order</p>
                                <p className={styles.pTags}>Your Queries</p>
                            </div>
                    
                        
                          </div>

                          {/* side 2 */}

                        <div className={styles.HeadingsCaontainer}>

                          <h2 className={styles.Headings}>Cash in My Account</h2>
                            <div >
                                <p className={styles.pTags}>Club Cash</p>
                                <p className={styles.pTags}>Cash refund</p>
                                <p className={styles.pTags}>My Payment Details</p>
                                <p className={styles.pTags}>Cashback Codes</p>
                                <p className={styles.pTags}>My Refunds</p>
                                <p className={styles.pTags}>My FPL Vouchers</p>
                            </div>


                          </div>

                            {/* side 3 */}

                        <div className={styles.HeadingsCaontainer}>

                            <h2 className={styles.Headings}>My Profile</h2>
                              <div >
                                  <p className={styles.pTags}>Personal Details</p>
                                  <p className={styles.pTags}>Contact Details</p>
                                  <p className={styles.pTags}>Child Details</p>
                                  <p className={styles.pTags}>My Address Book</p>
                                  <p className={styles.pTags}>Change Password</p>
                                  <p className={styles.pTags}>Manage Subscription</p>

                                  <h2 className={styles.ProfileHeadings}>Guaranteed Savings</h2>
                                  <h2 className={styles.ProfileHeadings}>Intelli Education</h2>
                                  <p className={styles.pTags}>Intellibaby Subscriptions</p>
                                  <p className={styles.pTags}>Intellikit Subscriptions</p>

                                  <h2 className={styles.ProfileHeadings}>Gift Certificates</h2>
                                  <h2 className={styles.ProfileHeadings}>Invites & Credits</h2>
                                  <h2 className={styles.ProfileHeadings}>My Reviews & Uploads</h2>

                                  <h2 className={styles.ProfileHeadings}>Logout</h2>

                              </div>
                            </div>
                    </div>


                    


             {/*------------------- My Profile-------------------------------- */}

           

                 <div className={styles.DetailsContainer}>

                    <h1 className={styles.MyProfile}>My Profile</h1>
                   
                       <div className={styles.parentNameContainer}>
                       
                               
                              <div className={styles.nameContainer}>
                                    <h3>{user.name}</h3>
                                     <p>Guardian</p>
                              </div>


                              <div>
                                    <img width='100px' height='120px' src={user.img} alt="" />
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
                              { user.phn?(<div className={styles.ContactContainer}>
                                    <p className={styles.Email}>Mobile No:</p>
                                    <p className={styles.EmailValue}>{user.phn}</p>

                              </div>) :(

                                  <div div className={styles.ContactContainer}>

                                  <p className={styles.Email}>Mobile:</p>
                                    <p className={styles.EmailValue}>Not in Database</p>
                                  </div>
                              )}


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
                                   
                                   <p className={styles.msgHead}>Your Mobile Number is Verified</p>
                                   <p className={styles.msg}>By verifying your mobile number with us you can now Shop'n'Earn Club Cash at our FirstCry.com stores too! To earn Club Cash on store purchases, simply provide your verified mobile number at the time of billing.</p>
                                      
                                </div>

                       </div>

                               
         {/* ------------------------------------CHILD DETAILS -------------------------------------------------------------*/}

                  <div className={styles.ChildDetails}>
                                  
                       <h1 className={styles.Contact}> Child Details </h1>

                       {show===true?(
                        <div>
                        <ChildDetails setShow={setShow}/>
                    </div>  
                       ):(

                        <div className={styles.mainBox}>
                        <form onSubmit={handleSubmit}> 
                          
                           <div className={styles.Input}>
                              <label>Name :</label>
                              <input  className={styles.boxInput1} type="text" placeholder="Enter Your Child Name"
                                 name="name"  value={childData.name}
                                  onChange={handleInputChange} />

                           </div>


                           <div  className={styles.InputBirth}>
                              <label>DOB :</label>
                              <input className={styles.boxInput} type="date" placeholder="Date Of Birth" 
                                  name="dob"
                                  value={childData.dob}
                                  onChange={handleInputChange}
                                 
                              />

                           </div>
                         
                         <div  className={styles.Input}>
                           <label >Gender :</label>
                           <div className={styles.radioLabel}>
                           
                            <label> <input type="radio" 
                                   name="gender"
                                   value="girl"
                                   checked={childData.gender === 'girl'}
                                   onChange={handleInputChange}
                            />Girl</label> 
                            <label> <input type="radio" 
                            
                            name="gender"
                            value="boy"
                            checked={childData.gender === 'boy'}
                            onChange={handleInputChange}
                            />Boy</label> 
                            </div>
                         </div>

                         <div  className={styles.Input}>

                          
                           <div >
                             <label >Weigth :</label>
                             <input className={styles.KG} placeholder="KG" type="number" 
                                 name="weight"
                                 value={childData.weight}
                                 onChange={handleInputChange}
                                    
                            />
                              </div>

                              <div cl>

                             <label >Height :</label>
                             <input className={styles.KG}  placeholder="CM" type="number" 
                                  name="height"
                                  value={childData.height}
                                  onChange={handleInputChange} 
                             
                            />
                           </div> 
                         
                         </div>
                            
                            <div className={styles.btnDiv}>
                              <button className={styles.Btn} type="submit">Save</button>
                            </div>
             
                        </form>          
           </div>
                       )

                       }

                            

                                    

                      </div>


                                {/* -----------------MY ADDRESS BOOK --------------------- */}

                          <div>
                                 <h1 className={styles.Contact}> My Address Book </h1>

                                
                          </div>


           </div>

    </div>
 } 



       
    </>
  )

}

export default Form;







  