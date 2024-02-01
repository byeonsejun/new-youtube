import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import FadeLoader from 'react-spinners/FadeLoader';
import { useYoutubeApi } from '../context/YoutubeApiContext';

import { GoHome } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';
import { MdAirplay, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import { RiDownloadLine } from 'react-icons/ri';

const asideNavs = [
  { icon: <GoHome className="w-[24px] h-[24px]" />, hover: <AiFillHome className="w-[24px] h-[24px]" />, text: '홈' },
  { icon: <MdAirplay className="w-[24px] h-[24px]" />, text: 'Shorts' },
  { icon: <MdOutlineSubscriptions className="w-[24px] h-[24px]" />, text: '구독' },
  { icon: <SiYoutubemusic className="w-[24px] h-[24px]" />, text: 'Music' },
  { icon: <TfiYoutube className="w-[24px] h-[24px]" />, text: '나' },
  { icon: <RiDownloadLine className="w-[24px] h-[24px]" />, text: '오프라인' },
];

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    () => youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 }
    // { staleTime: 1000 * 60 * 60 }
  ); // quanta 부담됑..

  return (
    <div className="flex">
      {isLoading && <FadeLoader color="#f2f2f2" className="mainLoder" />}
      {error && <p>Something is wrong 😖</p>}
      <aside className={`aside_nav`}>
        {asideNavs.map((item, idx) => (
          <div
            className={`w-[64px] h-[74px] flex flex-col items-center justify-center cursor-pointer gap-1 hover:bg-[#272727] hover:rounded-[10px] ${
              idx === 0 && 'bg-[#272727] rounded-[10px] font-bold'
            }`}
            key={idx}
          >
            {idx !== 0 ? item.icon : item.hover}
            <p className="text-xs">{item.text}</p>
          </div>
        ))}
      </aside>
      {videos && (
        <ul className="main-item-list">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} keyword={keyword} />
          ))}
        </ul>
      )}
    </div>
  );
}
