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
  const resizeHeight = () => {
    let elHeight = document.getElementById('leftHt').clientHeight;
    document.getElementById('rightHt').style.height = `${elHeight}px`;
  };
  const showDesc = () => setDesc((pre) => !pre);

  useEffect(() => {
    resizeHeight();
    setDesc(false);
  }, [video]);

  return (
    <section className="flex flex-col lg:flex-row">
      <article id="leftHt" className="basis-4/6 leftHt">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className={desc ? 'desc-pre' : `desc-pre line-clamp-2`}>
            {description}
            {desc ? (
              <span className="briefly" onClick={showDesc}>
                Briefly...
              </span>
            ) : (
              <span className="more" onClick={showDesc}>
                ...More
              </span>
            )}
          </pre>
        </div>
      </article>
      <section id="rightHt" className="basis-2/6">
        <RelatedVideos channelTitle={channelTitle} />
      </section>
    </section>
  );
}
