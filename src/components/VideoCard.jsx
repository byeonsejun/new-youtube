import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';
import { scrollTop } from '../util/uiMotion';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 m-2 cursor-pointer' : 'flex flex-col w-full'}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
        scrollTop();
      }}
    >
      <img className={isList ? 'w-60 mr-2 rounded-lg' : 'w-full rounded-lg'} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold mt-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
