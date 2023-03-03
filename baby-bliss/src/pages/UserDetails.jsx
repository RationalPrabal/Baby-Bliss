import React from "react";


import styles from  '../styles/Details.module.css'


const Form = ({data}) => {
  
  
  return (
    <>

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
                                    <h3>YOGESH NISHAD</h3>
                                     <p>Guardian</p>
                              </div>


                              <div>
                                    <img width='100px' height='120px' src="https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg" alt="" />
                              </div>
                              
                       </div>

                        {/*----------------------- CONATACT----------------------------- */}

                       <h1 className={styles.Contact}> My Contact </h1>
                       <div className={styles.ContactMain}>

                       <div className={styles.parentContactContainer}>
                              <div className={styles.ContactContainer}>
                                    <p className={styles.Email}>Email:</p>
                                    <p className={styles.EmailValue}>yogiatoy27518@gmail.com</p>

                              </div>
                              <div className={styles.ContactContainer}>
                                    <p className={styles.Email}>Mobile No:</p>
                                    <p className={styles.EmailValue}>7999959808</p>

                              </div>
                              
                       </div>

                                <div className={styles.msgContainer}>
                                   
                                   <p className={styles.msgHead}>Your Mobile Number is Verified</p>
                                   <p className={styles.msg}>By verifying your mobile number with us you can now Shop'n'Earn Club Cash at our FirstCry.com stores too! To earn Club Cash on store purchases, simply provide your verified mobile number at the time of billing.</p>
                                      
                                </div>

                       </div>

                               
                               {/* ---------------------CHILD DETAILS --------------------*/}

                       <div className={styles.ChildDetails}>
                                  
                       <h1 className={styles.Contact}> Child Details </h1>

                            <div className={styles.mainBox}>
                                       <form > 
                                         
                                          <div className={styles.Input}>
                                             <label>Name :</label>
                                             <input  className={styles.boxInput1} type="text" placeholder="Enter Your Child Name"  />

                                          </div>


                                          <div  className={styles.InputBirth}>
                                             <label>DOB :</label>
                                             <input className={styles.boxInput} type="text" placeholder="Date Of Birth" />

                                          </div>
                                        
                                        <div  className={styles.Input}>
                                          <label >Gender :</label>
                                          <div className={styles.radioLabel}>
                                           <label> <input type="radio" />Girl</label> 
                                           <label> <input type="radio" />Boy</label> 
                                           </div>
                                        </div>

                                        <div  className={styles.Input}>

                                          <label >Weigth :</label>
                                          <div className={styles.weightLabel}>
                                           <label className={styles.labels}> <input className={styles.KG} placeholder="KG" type="number" />KG</label> 
                                           <label className={styles.labels}> <input className={styles.KG}  placeholder="CM" type="number" />CM</label>
                                           </div>

                                        </div>
                                           
                                           <div className={styles.btnDiv}>
                                             <button className={styles.Btn}>Save</button>
                                           </div>
                            
                                       </form>
                                         
                         </div>

                      </div>


                                {/* -----------------MY ADDRESS BOOK --------------------- */}

                          <div>
                          <h1 className={styles.Contact}> My Address Book </h1>

                          </div>


           </div>

    </div>

       
    </>
  )

}

export default Form;



  