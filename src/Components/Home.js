import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import './Home.css'

const Home = () => {

    const [search, setsearch] = useState("")

    const [first, setfirst] = useState([])

    useEffect(() => {
        db.collection("Services").onSnapshot((tap) =>
            setfirst(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
        );
    }, [])

    console.log(search);

    return (
        <>
            <div class=" container">
                <div class=' row'>
                    <div className='SEARCH' ><input onChange={(e) => setsearch(e.target.value)} type="search" class="search-field" placeholder="Type Services..." />
                        <button className='btnn'>Search</button></div>
                </div>
            </div>
            {first.filter((e) => {
            if (search == "") {
              return "";
            } else if (
              e.data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 )
           {
              return e;
            }
          })
            .map((e) => (
                <>
                    <div class='conn container'>
                        <div class='boxss row'>
                            <div className='rr col-lg-6'>
                                <img className='imagess' src={e.data.img} />
                            </div>
                            <div className='rct col-lg-6'>
                                <h4>{e.data.title}</h4>
                                <h6>{e.data.details}</h6>
                                <h5>₹ {e.data.price}</h5>
                                <button className='btnnn'>Best Deals</button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>

    )
}

export default Home
