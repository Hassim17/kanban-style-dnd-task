import React, { useState } from "react";
import "./header.scss";
import { FaFilter, FaSyncAlt } from "react-icons/fa";
import { RiSearchLine, RiSettings4Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const ButtonGroup = ({ buttons }) => {
    const [clickedId, setClickedId] = useState(0);

    const handleClick = (event, id) => setClickedId(id);
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <button
            key={i}
            name={buttonLabel}
            onClick={(event) => handleClick(event, i)}
            className={i === clickedId && "active"}
          >
            {buttonLabel}
          </button>
        ))}
      </>
    );
  };

  return (
    <div className="header">
      <div className="header-left">
        <h5>Tickets</h5>
        <ButtonGroup
          buttons={[
            "ALL",
            "ONLY MY TICKETS",
            "RECENTLY UPLOADED",
            <FaFilter />,
          ]}
        />
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
