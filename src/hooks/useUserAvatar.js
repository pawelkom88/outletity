import {useState, useEffect} from "react";
import useAuthContext from "hooks/useAuthContext";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../firebase/config";

export default function UseUserAvatar(isUploaded) {
  const {user} = useAuthContext();
  const [avatar, setAvatar] = useState(null);

  // if user is logged in, download his avatar from firebase storage
  useEffect(() => {
    async function getUserAvatar(id) {
      const userAvatar = await getDownloadURL(ref(storage, id));

      try {
        setAvatar(userAvatar);
      } catch (error) {
        // to be done
        if (error.name === "storage/object-not-found") {
          return;
        }
      }
    }
    if (user) {
      getUserAvatar(user.uid);
    }
  }, [isUploaded, user]);

  return {user, avatar, setAvatar};
}
