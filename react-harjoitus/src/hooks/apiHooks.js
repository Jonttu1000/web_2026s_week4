import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

const useMedia = () => {
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

  return { mediaArray };
};

export { useMedia };
