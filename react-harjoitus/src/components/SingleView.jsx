const SingleView = (props) => {
  const { item, setSelectedItem } = props;

  return (
    <div className="single-view">
      <dialog open>
        <h2>{item.title}</h2>
        <p>{item.description}</p>

        {item.media_type.startsWith("image/") ? (
          <img src={item.filename} alt={item.title} />
        ) : item.media_type.startsWith("video/") ? (
          <video src={item.filename} controls />
        ) : (
          <p>Unsupported media type</p>
        )}

        <button onClick={() => setSelectedItem(null)}>Close</button>
      </dialog>
    </div>
  );
};

export default SingleView