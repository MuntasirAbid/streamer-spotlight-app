import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const StreamersDetails = () => {
 const srteamersData = useLoaderData()

 console.log(srteamersData);

 const [streamer, setStreamer] = useState(null);

 // useEffect(() => {
 //  fetchStreamer();
 // }, []);

 // const fetchStreamer = async () => {
 //  try {
 //   const response = await axios.get(`http://localhost:10000/streamers/${streamerId}`);
 //   setStreamer(response.data);
 //  } catch (error) {
 //   console.error('Error fetching streamer:', error);
 //  }
 // };

 return (
  <div>
   {srteamersData ? (
    <>
     <h1>Streamer Details</h1>
     <h3>{srteamersData.name}</h3>
     <p>{srteamersData.description}</p>
     <p>Platform: {srteamersData.platform}</p>
     <img
      src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
      alt="Streamer"
     />
    </>
   ) : (
    <p>Loading streamer...</p>
   )}
  </div>
 );
};

export default StreamersDetails;
