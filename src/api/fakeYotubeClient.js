import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    // youtube측에서 지원중단.. ㅠ  return axios.get( `/videos/${params.relatedToVideoId ? 'related' : 'search'}.json` );
    return axios.get(`/videos/${params.q ? 'search' : 'related'}.json`);
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
