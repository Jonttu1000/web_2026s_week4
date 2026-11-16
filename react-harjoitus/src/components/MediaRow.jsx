import PropTypes from "prop-types";

const MediaRow = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <button onClick={() => props.setSelectedItem(item)}>Open</button>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaRow;
