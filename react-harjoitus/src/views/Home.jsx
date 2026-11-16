import MediaRow from "../components/MediaRow.jsx";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData("test.json");
        setMediaArray(json);
      } catch (error) {
        console.error("Failed to fetch media: ", error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h2>My media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Filesize</th>
            <th>Media Type</th>
            <th>Show</th>
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
