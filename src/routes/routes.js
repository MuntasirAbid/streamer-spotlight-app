import { createBrowserRouter } from "react-router-dom";
import StreamerSubmissionForm from "../components/StreamerSubmissionForm";
import StreamerList from "../components/StreamerList";
import StreamersDetails from "../components/StreamerDetails";


const router = createBrowserRouter([
 {
  path: '/',
  element: <StreamerSubmissionForm></StreamerSubmissionForm>,
 },
 {
  path: '/streamers',
  element: <StreamerList></StreamerList>,
 },
 {
  path: '/streamers/details/:streamerId',
  element: <StreamersDetails></StreamersDetails>,
  loader: ({ params }) => fetch(`http://localhost:10000/streamers/${params.streamerId}`),
 }
])

export default router