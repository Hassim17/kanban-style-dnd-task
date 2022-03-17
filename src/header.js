import React, { useState } from "react";
import "./header.scss";
import { FaFilter, FaSyncAlt } from "react-icons/fa";
import { RiSearchLine, RiSettings4Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isAllActive, setIsAllActive] = useState(true);
  const [isOnlyMyActive, setIsOnlyMyActive] = useState(false);
  const [isRecentActive, setIsRecentActive] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <h5>Tickets</h5>
        <button
          className={isAllActive ? "active" : "none"}
          onClick={() => {
            setIsAllActive(true);
            setIsOnlyMyActive(false);
            setIsRecentActive(false);
          }}
        >
          ALL
        </button>
        <button
          className={isOnlyMyActive ? "active" : "none"}
          onClick={() => {
            setIsOnlyMyActive(true);
            setIsAllActive(false);
            setIsRecentActive(false);
          }}
        >
          ONLY MY TICKETS
        </button>
        <button
          className={isRecentActive ? "active" : "none"}
          onClick={() => {
            setIsRecentActive(true);
            setIsAllActive(false);
            setIsOnlyMyActive(false);
          }}
        >
          RECENTLY UPLOADED
        </button>
        <button>
          <FaFilter />
        </button>
        <button>
          <FaSyncAlt />
        </button>
      </div>

      <div className="header-right">
        <input
          className="header-right-searchBar"
          type="text"
          placeholder="Search"
        />
        <RiSearchLine className="search-icon" />
        <button>
          <RiSettings4Fill fontSize={17} /> Configurations
        </button>
        <div className="header-right-rangeCount">(0 - 30)</div>
        <button>
          <IoIosArrowBack fontSize={17} />
        </button>
        <button>
          <IoIosArrowForward fontSize={17} />
        </button>
      </div>
    </div>
  );
};

export default Header;
