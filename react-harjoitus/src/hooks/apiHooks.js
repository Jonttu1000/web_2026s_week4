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

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      fetchOptions,
    );
    return loginResult;
  };

  return { postLogin };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token", fetchOptions,
    );
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/users",
      fetchOptions,
    );
  };

  return { postUser, getUserByToken };
};

export { useMedia, useAuthentication, useUser };
