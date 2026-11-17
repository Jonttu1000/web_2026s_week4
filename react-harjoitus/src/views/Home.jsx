import MediaRow from "../components/MediaRow.jsx";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

        const authURL = import.meta.env.VITE_AUTH_API;

        const newArray = await Promise.all(
          json.map(async (item) => {
            const user = await fetchData(authURL + "/users/" + item.user_id);

            return {
              ...item,
              username: user.username,
            };
          }),
        );

        console.log(newArray);
        setMediaArray(newArray);
      } catch (error) {
        console.error("Failed to fetch media: ", error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h2>My media</h2>
      <table className="media-table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Owner</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Filesize</th>
            <th>Media Type</th>
            <th>Single View</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
