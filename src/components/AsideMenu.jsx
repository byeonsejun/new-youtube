import React from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { BsYoutube, BsClockHistory } from 'react-icons/bs';
import { GiShrimp } from 'react-icons/gi';
import { FaAppleAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineLike } from 'react-icons/ai';
import { MdAirplay, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';
import { RiDownloadLine } from 'react-icons/ri';
import { GoClock } from 'react-icons/go';
import { Link } from 'react-router-dom';

const menus = [
  { icon: <AiFillHome className="w-6 h-6 flex items-center justify-start" />, text: '홈' },
  { icon: <MdAirplay className="w-6 h-6 flex items-center justify-start" />, text: 'Shorts' },
  { icon: <MdOutlineSubscriptions className="w-6 h-6 flex items-center justify-start" />, text: '구독' },
  { icon: <SiYoutubemusic className="w-6 h-6 flex items-center justify-start" />, text: 'YouTube Music', line: true },
  { icon: '나 >', text: '' },
  { icon: <BsClockHistory className="w-6 h-6 flex items-center justify-start" />, text: '시청 기록' },
  { icon: <GoClock className="w-6 h-6 flex items-center justify-start" />, text: '나중에 볼 동영상' },
  { icon: <RiDownloadLine className="w-6 h-6 flex items-center justify-start" />, text: '오프라인 저장 동영상' },
  {
    icon: <AiOutlineLike className="w-6 h-6 flex items-center justify-start" />,
    text: '좋아요 표시한 동영상',
    line: true,
  },
  { icon: false, text: false, type: '구독' },
  {
    icon: <GiShrimp className="p-1 w-6 h-6 flex items-center justify-start text-orange-500 bg-white rounded-full" />,
    text: '슈카월드',
  },
  {
    icon: <FaAppleAlt className="p-1 w-6 h-6 flex items-center justify-start text-red-500 bg-white rounded-full" />,
    text: '코딩애플',
  },
];

export default function AsideMenu({ onClose }) {
  return (
    <div id="hide_menu">
      <div className="pt-4 flex items-center justify-start mb-4">
        <RxHamburgerMenu className={`w-6 h-6 flex items-center justify-start mr-4 cursor-pointer`} onClick={onClose} />
        <Link to={'/'} className="flex items-center justify-center">
          <BsYoutube className="text-3xl text-brand " />
          <h1 className="font-bold ml-1 text-2xl tracking-tighter relative">
            Premium
            <span className="absolute font-normal text-xs">KR</span>
          </h1>
        </Link>
      </div>
      <ul className="w-full">
        {menus.map((item, idx) => {
          return (
            <li key={item.text}>
              {item.type && <h3 className="pl-4 mb-2 font-bold">{item.type}</h3>}
              {item.icon && (
                <div
                  className={`flex w-[184px] ml-2 mr-2 p-2 h-10 items-center cursor-pointer hover:bg-[#272727] rounded-lg ${
                    idx === 0 && 'bg-[#272727] rounded-lg'
                  }`}
                >
                  {item.icon}
                  <span className="flex-grow pl-4 text-sm">{item.text}</span>
                </div>
              )}
              {item.line && <div className={`mt-4 mb-4 w-full h-[1px] bg-white/40`} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
