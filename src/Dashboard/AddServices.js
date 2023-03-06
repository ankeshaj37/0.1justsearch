import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Components/firebase'
import './AddServices.css'



const AddServices = () => {
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [details, setdetails] = useState('')
    const [img, setimg] = useState('')
    const [services, setservices] = useState([])

    const submit =()=>{
    
            db.collection('Services').add({title:title,price:price,details:details,img:img})
            settitle('')
            setprice('')
            setdetails('')
            setimg('')
            setservices('')
      
         
          
    }

   

  return (
    <>
    <h2 className='text-center my-3'>Add Services</h2>
      <div className='formdiv'>
        <form class=" formmm row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Title</label>
            <input type="text" class="form-control" id="inputEmail4" value={title} onChange={(e)=>settitle(e.target.value)} />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Phone No</label>
            <input type="text" class="form-control" id="inputPassword4"    />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Images</label>
            <input type="text" class="form-control" id="inputAddress" value={img}  onChange={(e)=>setimg(e.target.value)} />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Dtails </label>
            <input type="text" class="form-control" id="inputAddress2" value={details}  onChange={(e)=>setdetails(e.target.value)} />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Price</label>
            <input type="text" class="form-control" id="inputCity" value={price}  onChange={(e)=>setprice(e.target.value)} />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Services</label>
            <select id="inputState" class="form-select" value={services}  onChange={(e)=>setservices(e.target.value)}  >
              <option selected>Choose Category</option>
              <option className='optionse' >Car Cleaning</option>
              <option className='optionse' >Home Cleaning</option>
              <option className='optionse' >Chandelier Cleaning</option>
              <option className='optionse' >Events</option>
              <option className='optionse' >Digital Support</option>
              <option className='optionse' >Decoration</option>
              <option className='optionse' >House Keeping</option>
              <option className='optionse' >Designer</option>
              <option className='optionse' >Programming</option>
              <option className='optionse' >Wedding</option>
              <option className='optionse' >Real Estate</option>
              <option className='optionse' >Ofice Boy Agency</option>
              <option className='optionse' >Fitness Traner</option>
              <option className='optionse' >Dance Music</option>
              <option className='optionse' >Sport Traner</option>
              <option className='optionse' >Caterers</option>
              <option className='optionse' >Shifting</option>
              <option className='optionse' >Others</option>
            </select>
          </div>
          <p></p>
          <div class="col-12">
            <Link onClick={submit} class="sscenter">submit</Link>
          </div>
        </form>
      </div>
     
    </>
  )
}

export default AddServices
