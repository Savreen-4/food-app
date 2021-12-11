import React, { useState, useEffect } from 'react';

const Home = props => {
    
    const [data, setData] = useState({});
    const [city, setCity] = useState([]);
    const [alldata, setAlldata] = useState([]);
 
    const handleSubmit = (e) => {
        data['city']= city;
        alldata.splice(0,1,data)
        localStorage.setItem('array',JSON.stringify(alldata))
        alert(' ok ')
        props.history.push('/listing')
    }

    const handleCity = (e) => {
        if(city.includes(e.target.value)){
            let idx = city.indexOf(e.target.value)
            city.splice(idx,1)
            return;
        }else 
        {
            setCity([...city, e.target.value])
        }
    }

    return (
        <div>
            <h1>CHOICE OF FOOD</h1>
            <label>Food: </label>
            <br/>
            <input type="radio" value="italian" name="italian" onChange={(e)=>setData({...data, food: e.target.value})} />Italian
            <input type="radio" value="chinese" name="chinese" onChange={(e)=>setData({...data, food: e.target.value})}  />Chinese
            <br />



            <label>City :</label>
            <br/>
            <label>Chandigarh</label>
            <input type="checkbox" name="city" value="chandigarh" onChange={handleCity} />
            <label>Panchkula</label>
            <input type="checkbox" name="city" value="panchkula" onChange={handleCity} />
            <label>Mohali</label>
            <input type="checkbox" name="city" value="mohali" onChange={handleCity} />
            <br />


        
            <label>Rating: </label>
            <br/>
            <select name="rating" onChange={(e)=>setData({...data, rating: e.target.value})} >
                <option value="5 star">5 Star</option>
                <option value="4 star">4 Star</option>
                <option value="3 star">3 Star</option>
            </select><br/>
            <button type="submit" onClick={handleSubmit} style={{marginTop:70}}>Submit</button>
        </div>
    );
}

export default Home;