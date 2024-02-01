export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(channelTitle) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          // maxResults: 5,
          type: 'video',
          // relatedToVideoId: id, // 유튜브 측에서 지원 중단...
          q: channelTitle,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          // maxResults: 5,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          // maxResults: 5,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      })
      .then((res) => res.data.items);
  }
}
