import { useLocation, useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state;

  if (!item) {
    return <p>No media selected.</p>;
  }

  return (
    <div className="single-view">
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type.startsWith("image/") ? (
        <img src={item.filename} alt={item.title} />
      ) : item.media_type.startsWith("video/") ? (
        <video src={item.filename} controls />
      ) : (
        <p>Unsupported media type</p>
      )}

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
