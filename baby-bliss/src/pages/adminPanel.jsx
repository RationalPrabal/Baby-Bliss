
import axios from "axios";
import { useState} from "react";

function adminPanel({data}) {
    const [formData, setFormData] = useState({
  
        img: "",
        title: "",
        price: "",
        mrp:"",
        discount:"",
        size:"",
      });

      const[remove,setRemove]=useState(false)  
    const[val,setVal]=useState("")
    const [add, setAdd] = useState(false)
    const [userdata, setUserata] = useState([])
    
  
  
  
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
    

    const handleCancel = () => {
      setFormData({ img:"", title:"", price:"" , mrp:"", discount:"",size:""});
      setAdd(false)
      setRemove(false)
    };


  
  
    {/* //////////////////  ADD FUNCTION ///////////////*/}
  
    const handleAdd = (e) => {
      e.preventDefault();
      axios.post(`${process.env.baseURL}/all`, formData)
        .then(res => {
          console.log(res)
        //   setData([...userdata, res.data])
        
        })
        .catch(err => console.log(err))
    }
  
  {/* //////////////////   DELET FUNCTION ///////////////*/}


  
    const handleDelete = (id) => {
      axios.delete(`${process.env.baseURL}/all/${id}`)
        .then(res => {
          console.log(res)
        
        })
        .catch(err => console.log(err))
    }



  return (
    <>

     <div class="container">
        <h2 className="heading">Admin Panel</h2>
        <div className="btn-admin">
        <button className="delete-admin" onClick={()=>{
            setRemove(true)
            setAdd(true)
           
        
        }}>DELETE
        </button>

        <button className="add-admin"onClick={()=>setAdd(true)}>ADD PRODUCTS</button>
        </div>
        {remove && <div className="remove-div">

            <input  type="number" id="price" name="price" placeholder="ENTER PRODUCT ID" value={val} onChange={(e)=>setVal(e.target.value)} />
            <button className="delete-admin" onClick={()=>{
                
                handleDelete(val)
              setRemove(false)
              setAdd(false)
              setVal("")
            
            }}>REMOVE</button>
        </div>

        }


    { !add ?(
            <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1" id="bold">Customer Id</div>
                <div class="col col-2" id="bold">Username</div>
                <div class="col col-3" id="bold">Name</div>
                <div class="col col-2" id="bold">Mobile No.</div>
                <div class="col col-3" id="bold">Email ID</div>
                
            </li>

                {data.map(el => (
                <li class="table-row">
                <div class="col col-1" data-label="Job Id">{el.phn}</div>
                <div class="col col-2" data-label="Customer Name">{el.user}</div>
                <div class="col col-3" data-label="Amount">{el.name}</div>
                <div class="col col-1" data-label="Job Id">{el.phn}</div>
                <div class="col col-2" data-label="Customer Name">{el.email}</div>
           
                
                </li>
                ))}

            </ul>
        ):

        ( 
        
        <form className="form-admin" onSubmit={handleAdd}>

            <div >
            <div id="main">
              <h3>Image</h3>
              <input className="input-admin" placeholder="PRODUCTS IMAGE " type="text" id="img" name="img" value={formData.img} onChange={handleChange} required/>
            </div>

            <div>
              <h3>Title</h3>
              <input className="input-admin"  placeholder="PRODUCTS TITLE" type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>


            <div>
              <h3>Price</h3>
              <input className="input-admin"   placeholder="PRODUCTS PRICE " type="text" id="price" name="price" value={formData.price} onChange={handleChange} required />
            </div>

            <div>
              <h3>Price</h3>
              <input className="input-admin"   placeholder="PRODUCTS MRP " type="text" id="mrp" name="mrp" value={formData.mrp} onChange={handleChange} required />
            </div>

            <div>
              <h3>Discount</h3>
              <input className="input-admin"  placeholder=" PRODUCTS DISCOUNT " type="text" id="discount" name="discount" value={formData.discount} onChange={handleChange} required/>
            </div>


            <div>
              <h3>Size</h3>
              <input className="input-admin" placeholder="PRODUCTS SIZE " type="text" id="size" name="size" value={formData.size} onChange={handleChange} required/>
            </div>
  
          <div className="btn-group">
          <button className="add-admin" type="submit">SAVE</button>
            <button className="delete-admin" onClick={handleCancel}>CANCEL</button>
         </div>
           
            </div>
        </form>
       )
    }
           
       </div>       

    </>
  );
}

export default adminPanel;





export const getServerSideProps= async()=>{

    let res =await fetch(`${process.env.baseURL}/user`)
    let data = await res.json();
 
     return{
       props:{
         data:data,
       }
     }
 
 }



