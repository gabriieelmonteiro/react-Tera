/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";

import users1 from "../../images/placeholders/user-1.jpg";
import users2 from "../../images/placeholders/user-2.jpg";
import users3 from "../../images/placeholders/user-3.jpg";
import Default from "../templates/Default";

export default function Users() {
  return (
    <Default>
      <div className="users">
        <h1>Users</h1>

        <div className="users__list">
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users1} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">John Walter</div>
          </a>
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users2} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Chris Hudson</div>
          </a>
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users3} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Bryan Cornell</div>
          </a>
        </div>
      </div>
    </Default>
  );
}
