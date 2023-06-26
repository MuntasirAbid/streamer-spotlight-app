import { Link, useLoaderData } from 'react-router-dom';

const StreamersDetails = () => {

 const streamersData = useLoaderData()

 return (
  <div>
   <>
    <Link to="/"><button>Go to main page</button></Link>
    <Link to='/streamers'><button>All Streamer's List</button></Link>
   </>
   {streamersData ? (

    <>
     <h1>Streamer Details</h1>
     <h3>Name: {streamersData.name}</h3>
     <p>Details: {streamersData.description}</p>
     <p>Platform: {streamersData.platform}</p>
     <p>Upvotes: {streamersData.upvotes}, Downvotes: {streamersData.downvotes}</p>
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
