import { loadUserId, loadFavorite, loadHistory, loadSearches, loadTokenInfo } from '../common/js/cache'
export default {
    userId: loadUserId(),
    fullscreen: false,
    currentIndex: -1,
    playList: [],
    banners: [],
    privateFm: [],
    playing: false,
    obj: {},
    favorite: loadFavorite(),
    playHistory: loadHistory(),
    searches: loadSearches(),
    list: [],
    token: loadTokenInfo()
}