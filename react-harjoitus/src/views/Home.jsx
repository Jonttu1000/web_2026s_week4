import MediaRow from "../components/MediaRow.jsx";
import {useMedia} from "../hooks/apiHooks.js";

const Home = () => {
  const { mediaArray } = useMedia();

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
