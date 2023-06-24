import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StreamerSubmissionForm = () => {
 const [streamer, setStreamer] = useState({
  name: '',
  description: '',
  platform: 'Twitch',
 });

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await axios.post('http://localhost:10000/streamers', streamer);
   setStreamer({ name: '', description: '', platform: 'Twitch' });
  } catch (error) {
   console.error('Error adding streamer:', error);
  }
 };

 const handleInputChange = (e) => {
  setStreamer({ ...streamer, [e.target.name]: e.target.value });
 };

 return (
  <div>
   <h1>Streamer Submission Form</h1>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     name="name"
     value={streamer.name}
     placeholder="Streamer Name"
     onChange={handleInputChange}
    />
    <textarea
     name="description"
     value={streamer.description}
     placeholder="Description"
     onChange={handleInputChange}
    ></textarea>
    <select
     name="platform"
     value={streamer.platform}
     onChange={handleInputChange}
    >
     <option value="Twitch">Twitch</option>
     <option value="YouTube">YouTube</option>
     <option value="TikTok">TikTok</option>
     <option value="Kick">Kick</option>
     <option value="Rumble">Rumble</option>
    </select>
    <button type="submit">Add Streamer</button>
   </form>
   <Link to="/streamers"><button>All streamers</button></Link>
  </div>
 );
};

export default StreamerSubmissionForm;
