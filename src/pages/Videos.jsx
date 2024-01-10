import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import FadeLoader from 'react-spinners/FadeLoader';

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
    <>
      {isLoading && <FadeLoader color="#f2f2f2" className="mainLoder" />}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul className="main-item-list grid gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} keyword={keyword} />
          ))}
        </ul>
      )}
    </>
  );
}
