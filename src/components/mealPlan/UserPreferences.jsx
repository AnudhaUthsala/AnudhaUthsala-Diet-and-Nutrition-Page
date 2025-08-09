import React from "react";

const UserPreferences = () => {
  return (
    <div className="header" id="no-bg">
      <div className="user-info">
        <img
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          alt="User Avatar"
          width="50"
          height="50"
        />
        <div>
          <div>
            <strong>John Doe</strong>
          </div>
          <div className="user-tags">
            <span className="tag">Diabetic</span>
            <span className="tag">Vegetarian</span>
            <span className="tag">Allergy: Nuts</span>
          </div>
        </div>
      </div>
      <button>Edit Preferences</button>
    </div>
  );
};

export default UserPreferences;
