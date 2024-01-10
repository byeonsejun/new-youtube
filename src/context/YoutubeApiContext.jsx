import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';

// import FakeYoutubeClient from '../api/fakeYotubeClient'; // 목업데이터
import YoutubeClient from '../api/youtubeClient'; // 서버데이터

export const YoutubeApiContext = createContext();
// const client = new FakeYoutubeClient(); // 목업데이터
const client = new YoutubeClient(); // 서버데이터

const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
