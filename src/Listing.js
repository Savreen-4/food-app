import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom"

const Listing = () => {

    const [submitteddata,setSubmittedata] = useState([])
    const cities = ['mohali','chandigarh','panchkula'];
    const [isopen,setIsopen]= useState(false)
    let [arr,setArr] = useState([]);
    const [data,setData] = useState({
        food: '',
        rating: '',
        city: []
    })
    const[idx,setIdx] = useState(null)
    

    useEffect(()=>{
        getAllData();
    },[submitteddata])

    const getAllData = () => {
        let items = JSON.parse(localStorage.getItem('array'));
        setSubmittedata(items)
    }

    const handleDelete = index => {
        setSubmittedata(submitteddata.splice(index,1));
        localStorage.setItem('array',JSON.stringify(submitteddata))
    }

    const handleUpdate = (value) => {
          let val = JSON.parse(localStorage.getItem('array'))
          val.splice(idx,1,data)
          localStorage.setItem('array',JSON.stringify(val))
          alert(' updated ')
          setIsopen(false)
    }

    const handleEdit = (value,index) => {
        setData({...value})
        console.log(data);
        // console.log(value)
        setIsopen(true)
        arr.splice(0,1,value)
    }

    const handleCity = (e) => {
        if(data.city.includes(e.target.value)){
            let idx = data.city.indexOf(e.target.value)
            data.city.splice(idx,1)
            return;
        }else 
        {
           data.city.push( e.target.value)
            
        }
    }

    return (
    
            <div>
            <h1>DATA</h1>
            <table style={{marginLeft:220}}>
            <thead>
            <tr>
              <th>Food</th>
              <th>Rating</th>
              <th>City</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {
                submitteddata.map((value,index)=>{
                    return( 
                          <tr key={index}>
                          <td>{value.food}</td>
                          <td>{value.rating}</td>
                          <td>{value.city.join('-')}</td>
                          <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                          <td><button onClick={()=>handleEdit(value,index)}>Edit</button></td>
                          </tr>
                    )
                })
            }
            </tbody>  
            </table>

            <Modal isOpen={isopen}>
                {arr.map((value,index)=>{
                    return(
                        <div>
                          <label>Food: </label>
                          <input type="radio" value='italian' name="food" defaultChecked={value.food ==='italian'}  onChange={(e)=> setData({...data, food: e.target.value})} />Italian
                          <input type="radio" value='chinese' name="food" defaultChecked={value.food ==='chinese'} onChange={(e)=> setData({...data, food: e.target.value})} />Chinese
                          <br />   
                          <label>Rating: </label>
                          <select name="rating" defaultValue={value.rating}  onChange={(e)=>setData({...data, rating: e.target.value})} >
                          <option value='5 star' >5 Star</option>
                          <option value='4 star' >4 Star</option>
                          <option value='3 star' >3 Star</option>
                          </select>
                          <br />
                         {
                          cities.map((city, key) => (<div>
                          <span><label key={key}>
                          {city}:</label>
                          <input
                            type="checkbox"
                            value={city}
                            defaultChecked={value.city.includes(city)}
                            onChange={handleCity}
                          /></span>
                        </div>
                      ))}
                         <button onClick={()=>handleUpdate(value)}>Update</button>
                        </div>
                    )
                })}
            
            </Modal>
            <Link to ={"./"}><button style={{marginTop:70}}>black</button></Link>
        
        </div>
    );
}

export default Listing;





// setData([...data.city, e.target.value]) 