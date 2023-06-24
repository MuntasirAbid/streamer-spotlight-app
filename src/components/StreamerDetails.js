import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StreamerRecord = () => {
 const { streamerId } = useParams();
 const [streamer, setStreamer] = useState(null);

 useEffect(() => {
  fetchStreamer();
 }, []);

 const fetchStreamer = async () => {
  try {
   const response = await axios.get(`http://localhost:10000/streamers/${streamerId}`);
   setStreamer(response.data);
  } catch (error) {
   console.error('Error fetching streamer:', error);
  }
 };

 return (
  <div>
   {streamer ? (
    <>
     <h1>Streamer Record</h1>
     <h3>{streamer.name}</h3>
     <p>{streamer.description}</p>
     <p>Platform: {streamer.platform}</p>
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

export default StreamerRecord;
