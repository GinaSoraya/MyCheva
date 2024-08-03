import React from "react";

function EditProfile() {
  return (
    <div className="edit-profile-item">
      <div className="background-edit-profile">
        <img src="background.png" alt="background" />
      </div>
      <div className="foto-profile">
        <img src="profile (3).png" alt="profile" />
        <form className="profile-akun">
          <div className="edit-nama">
            <label>Username</label>
            <input type="text" id="edit-username" name="" />
          </div>
          <div className="edit-divisi">
            <label>Divisi</label>
            <input type="text" id="edit-divisi" name="" />
          </div>
        </form>
      </div>
      <button className="simpan-edit">Simpan</button>
    </div>
  );
}

export default EditProfile;
