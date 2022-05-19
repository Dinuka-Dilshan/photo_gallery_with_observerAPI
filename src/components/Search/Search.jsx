import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "../Modal/Modal";

import "./Search.css";

const Search = ({setQuery}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickhandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="search-wrapper" onClick={clickhandler}>
        <AiOutlineSearch size={30} />
      </div>
      {isModalOpen && <Modal setQuery={setQuery} onBackgroundClick={setIsModalOpen}/>}
    </>
  );
};

export default Search;
