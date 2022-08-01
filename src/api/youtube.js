import axios from "axios";

const KEY = "AIzaSyDMrBwMOJ8LKQ2cZ26EmruvjTjO9_y_sfk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
