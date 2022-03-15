import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isAllActive, setIsAllActive] = useState(true);
  const [isOnlyMyActive, setIsOnlyMyActive] = useState(false);
  const [isRecentActive, setIsRecentActive] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <h5>Tickets</h5>
        <button
          className={isAllActive ? "active" : "unactive"}
          onClick={() => {
            setIsAllActive(true);
            setIsOnlyMyActive(false);
            setIsRecentActive(false);
          }}
        >
          ALL
        </button>
        <button
          className={isOnlyMyActive ? "active" : "unactive"}
          onClick={() => {
            setIsOnlyMyActive(true);
            setIsAllActive(false);
            setIsRecentActive(false);
          }}
        >
          ONLY MY TICKETS
        </button>
        <button
          className={isRecentActive ? "active" : "unactive"}
          onClick={() => {
            setIsRecentActive(true);
            setIsAllActive(false);
            setIsOnlyMyActive(false);
          }}
        >
          RECENTLY UPLOADED
        </button>
        <button>
          <i class="fas fa-filter"></i>
        </button>
        <button>
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>

      <div className="header-right">
        <input
          className="header-right-searchBar"
          type="text"
          placeholder="Search"
        />
        <i class="fas fa-search"></i>
        <button>
          <i class="fas fa-cog"></i> Configurations
        </button>
        <div className="header-right-rangeCount">(0 - 30)</div>
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
