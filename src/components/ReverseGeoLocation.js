// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const ReverseGeoLocation = () => {
//     const [latitude, setLatitude] = useState("");
//     const [longitude, setLongitude] = useState("")
//     const [responsedata, setResponseData] = useState([]);
//     // const [temp, setTemp] = useState([]);

//     // useEffect(() => {
//     //     navigator.geolocation.getCurrentPosition((position) => {
//     //         setLatitude(position.coords.latitude);
//     //         setLongitude(position.coords.longitude);
//     //         console.log(position);
            
//     //     })
//     //     let finalAPIEndPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
        
//     //     axios.get(finalAPIEndPoint)
//     //         .then((res) => {
//     //             console.log(res.data);
//     //             setResponseData(res.data.localityInfo.administrative);
//     //         })
//     // }, [])

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//           setLatitude(position.coords.latitude);
//           setLongitude(position.coords.longitude);
//           console.log(position);
//         });
    
//         let finalAPIEndPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
    
//         axios.get(finalAPIEndPoint).then((res) => {
//           console.log(res.data);
//           setResponseData(res.data.localityInfo.administrative);
//         //   for(let i=0;i<4; i++)
//         //   {
//         //     setTemp(responsedata.name[i]);
//         //     console.log(temp);
//         //     // console.log(i);
//         //   }
          
//         });
//       }, [latitude, longitude]);

//     return (
//         <div className='App'>

//             <h1>{responsedata.city} {responsedata.principalSubdivision} {responsedata.countryName}</h1>
        
            
        
//         {/* {
//             temp.map((item,id)=>{
//                 return(
                   
//                    <p key={id} style={{display:"inline-block"}}>

//                     {item.name};
                    
//                    </p>
                   
                   
                  
                   
//                 )
                
//             })
            
//         } */}
        
//     </div>
//     )
// }
// export default ReverseGeoLocation


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const ReverseGeoLocation = () => {
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [responsedata, setResponseData] = useState([]);
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//       // console.log(position);
//     });

//     let finalAPIEndPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

//     axios.get(finalAPIEndPoint).then((res) => {
//       const [country, state, district, taluka] =
//         res.data.localityInfo.administrative;
//       setResponseData({
//         country: country.name,
//         state: state.name,
//         district: district.name,
//         taluka: taluka.name,
//       });
//     });
//   });
//   return (
//     <div className="App">
//       {responsedata.taluka}
//       {responsedata.district}
//       {responsedata.state}
//       {responsedata.country}
//     </div>
//   );
// };
// export default ReverseGeoLocation;

import axios from "axios";
import React, { useEffect, useState } from "react";

const ReverseGeoLocation = () => {
  const [responsedata, setResponseData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    let finalAPIEndPoint;
    navigator.geolocation.getCurrentPosition((position) => {
      finalAPIEndPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;

      axios.get(finalAPIEndPoint).then((res) => {
        setloading(false);
        const [country, state, district, taluka] =
          res.data.localityInfo.administrative;
        setResponseData({
          country: country.name,
          state: state.name,
          district: district.name,
          taluka: taluka.name,
        });
      });
    });
  }, []);
  return loading ? (
    <div className="App">loading...</div>
  ) : (
    <div className="App">
      {responsedata.taluka}
      {responsedata.district}
      {responsedata.state}
      {responsedata.country}
    </div>
  );
};
export default ReverseGeoLocation;