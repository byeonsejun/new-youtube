import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';
import { FaRegUser, FaRegBell } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ModalPortal from './ui/ModalPortal';
import AsideModal from './AsideModal';
import AsideMenu from './AsideMenu';

const sideMunu = [
  <RiVideoAddLine className="w-[24px] h-[24px] cursor-pointer" />,
  <FaRegBell className="w-[24px] h-[24px] cursor-pointer" />,
  <FaRegUser className="w-[24px] h-[24px] cursor-pointer" />,
];

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 fixed bg-black z-10">
      <nav>
        <div className="w-[40px] h-[40px] flex items-center justify-center mr-6 p-2 hover:bg-[#272727] hover:rounded-full">
          <RxHamburgerMenu className={`w-[28px] h-[28px] cursor-pointer`} onClick={() => setOpenModal(!openModal)} />
        </div>
      </nav>
      <Link to="/" className="flex items-center hidden" id="main_logo">
        <BsYoutube className="text-3xl text-brand " />
        <h1 className="font-bold ml-1 text-2xl tracking-tight relative" id="logo_text">
          Premium
          <span className="absolute font-normal text-xs">KR</span>
        </h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="search-input w-7/12 p-4 outline-none bg-[#121212]"
          type="text"
          placeholder="검색"
          name="SearchMovie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="header-button px-4">
          <BsSearch />
        </button>
      </form>
      <div id="top_nav" className="hidden">
        <ul className="flex gap-2">
          {sideMunu.map((icon, idx) => {
            return (
              <li
                className={`flex w-[40px] h-[40px] items-center justify-center ml-1 p-1 
                ${idx === 2 ? 'bg-[#0098a6] rounded-full' : 'hover:bg-[#272727] rounded-full'}
                `}
                key={`${idx}`}
              >
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
      {openModal && (
        <ModalPortal>
          <AsideModal onClose={() => setOpenModal(false)}>
            <AsideMenu onClose={() => setOpenModal(false)} />
          </AsideModal>
        </ModalPortal>
      )}
    </header>
  );
}
