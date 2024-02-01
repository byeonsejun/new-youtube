import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const [desc, setDesc] = useState(false);

  const { title, channelId, channelTitle, description } = video.snippet;

  const showDesc = () => setDesc(true);
  const hideDesc = () => setDesc(false);

  useEffect(() => {
    setDesc(false);
  }, [video]);

  return (
    <section id="detail_section" className="flex flex-col mt-[73px] min-h-[100vh] ">
      <article id="leftHt">
        <div id="player_box">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={title}
          />
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre
            className={`bg-[#272727] p-4 pb-7 rounded-lg ${desc ? 'desc-pre' : `line-clamp-1 cursor-pointer`}`}
            onClick={!desc ? showDesc : undefined}
          >
            {description && <p className="text-[#f1f1f1] font-bold">{description}</p>}
            {desc ? (
              <span className="briefly" onClick={hideDesc}>
                간략히
              </span>
            ) : (
              <p className="more">...더보기</p>
            )}
          </pre>
        </div>
      </article>
      <section id="rightHt">
        <RelatedVideos channelTitle={channelTitle} />
      </section>
    </section>
  );
}
