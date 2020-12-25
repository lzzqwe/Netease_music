export default class Song {
  constructor(musicData) {
    this.id = musicData.id
    this.picUrl = musicData.picUrl
    this.duration = musicData.song.duration/1000
    this.singer = musicData.song.artists[0].name
    this.url = getMusicUrl(musicData.id)
    this.name= musicData.name
  }
}
export const createSong = (musicData) => {
  return new Song(musicData)
}

const getMusicUrl = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
