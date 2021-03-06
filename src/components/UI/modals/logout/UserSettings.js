import {useState} from "react";
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../../firebase/config";
import useLogout from "hooks/useLogout";
import Modal from "../modal/Modal";
import toast from "react-hot-toast";
import {notifyUser} from "utilities/helpers";
import Button from "components/UI/button/Button";
import {upload, sadness} from "utilities/images";
import "./UserSettings.scss";

export default function UserSettings({avatar, setAvatar, user, toggle, setIsUploaded}) {
  const [photo, setPhoto] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const {logUserOut} = useLogout();

  async function handlePhotoUpload() {
    const fileRef = ref(storage, user.uid);

    if (photo == null) {
      return;
    }
    setUploadError(false);
    try {
      await uploadBytes(fileRef, photo);
      setIsUploaded(true);
      setUploadError(false);
      notifyUser(toast.success, "Image loaded successfully");
    } catch (error) {
      setUploadError(error.message);
      notifyUser(toast.error, "There was an error while uploading your file");
    }
  }

  function handleLogout() {
    logUserOut();
    notifyUser(toast.success, "See you later");
    setAvatar(null);
  }

  return (
    <>
      <Modal size="2" toggle={toggle} heading={`Welcome back ${user?.email}`}>
        {avatar ? (
          <img className="avatar" src={avatar} alt="user profile avatar" />
        ) : (
          <div className="upload-photo">
            <label className="btn-file">
              <img src={upload} alt="upload icon" />
              <input
                type="file"
                name="Profile photo"
                labelfor="profilePhoto"
                id="profilePhoto"
                onChange={e => setPhoto(e.target.files[0])}
              />
            </label>
            <button onClick={handlePhotoUpload}>Upload photo</button>
          </div>
        )}
        <Button content="Log out" className="btn" id="dark-background" onClick={handleLogout} />
      </Modal>
      {uploadError && (
        <Modal toggle={toggle}>
          <img className="sadFace" src={sadness} alt="sad face" />
          <h3>{"Something went wrong"}</h3>
        </Modal>
      )}
    </>
  );
}
