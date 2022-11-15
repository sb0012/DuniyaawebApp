import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReverseGeoLocation = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("")
    const [responsedata, setResponseData] = useState([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log(position);
            
        })
        let finalAPIEndPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
        
        axios.get(finalAPIEndPoint)
            .then((res) => {
                console.log(res.data);
                setResponseData(res.data.localityInfo.administrative);
            })
    }, [])
    return (
        <div className='App'>
        {
            responsedata.slice().reverse().map((item,id)=>{
                return(
                   
                   <p key={id} style={{display:"inline-block"}}>

                 {item.name}{", " }
                   </p>
                   
                   
                  
                   
                )

            })
        }
        
    </div>
    )
}
export default ReverseGeoLocation
