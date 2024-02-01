import React, { useEffect } from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
export default function RelatedVideos({ channelTitle }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['related', channelTitle],
    () => youtube.relatedVideos(channelTitle),
    { staleTime: 1000 * 60 * 5 }
    // { staleTime: 1000 * 60 * 60 }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
