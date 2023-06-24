import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const StreamerList = () => {
 const { streamerId } = useParams()
 const [streamers, setStreamers] = useState([]);

 useEffect(() => {
  fetchStreamers();
 }, []);

 const fetchStreamers = async () => {
  try {
   const response = await axios.get('http://localhost:10000/streamers');
   setStreamers(response.data);
  } catch (error) {
   console.error('Error fetching streamers:', error);
  }
 };

 console.log(streamers);

 const handleVote = async (id, voteType) => {
  try {
   await axios.put(`http://localhost:10000/streamers/${id}/vote`, { voteType });
   fetchStreamers();
  } catch (error) {
   console.error('Error voting for streamer:', error);
  }
 };

 return (
  <div>
   <h1>Streamer List</h1>
   <Link to="/"><button>Go to Add new streamers</button></Link>
   <ul>
    {streamers.map((streamer) => (

     <li key={streamer._id}>

      <h3> <Link to={`/streamers/${streamerId}`}>{streamer.name}</Link></h3>
      <p>{streamer.description}</p>
      <p>Platform: {streamer.platform}</p>

      <button onClick={() => handleVote(streamer._id, 'upvote')}>
       Upvote
      </button>
      <span>{streamer.upvotes}</span>
      <button onClick={() => handleVote(streamer._id, 'downvote')}>
       Downvote
      </button>
      <span>{streamer.downvotes}</span>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default StreamerList;
