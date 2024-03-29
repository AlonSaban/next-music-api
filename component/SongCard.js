import { useSetRecoilState, useRecoilValue } from 'recoil'
import { songState, songIdState } from '../atoms/songsAtom'
import { playlistCoverState, playlistState } from '../atoms/playlistAtom'
import { Avatar, CardContent, CircularProgress, Typography } from '@material-ui/core';
import styles from '../styles/songsCard.module.css'
import songsApi from '../public/api/songsApi.json'


export default function SongCard() {
  const SongState = useRecoilValue(songState);
  const setNewSongState = useSetRecoilState(songState)
  const setNewSongIdState = useSetRecoilState(songIdState)
  const playlistId = useRecoilValue(playlistState);
  const songsArray = [];

  for (let i = 0; i < songsApi.length; i++) {
    if (songsApi[i].playlist === playlistId) {
      songsArray.push(songsApi[i])
    }
  }
  const sortArray = songsArray.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))


  const videoHandler = async (value) => {
    setNewSongIdState(value)
    if (SongState[0].playingState === false) {
      setNewSongState(() => [{
        playingState: true,
        mutedState: false
      }])

    }
    if (SongState[0].playingState === true) {
      setNewSongState(() => [{
        playingState: false,
        mutedState: false
      }])
    }
  };

  const song = sortArray.map(song => {

    return (
      <div key={song.id} onClick={() => videoHandler(song)} className={styles.song}>
        <img src={`/api/songs/${song.name}/thumbnail.jpg`} className={styles.songImg} />
        <CardContent>
          <div className={styles.information}>
            <Avatar
              className={styles.avatar}
              alt={song.artist}
              src={`/api/songs/${song?.name}/artist.jpg`} />
            <h3 className={styles.artist}>
              {song.artist}
            </h3>
          </div>
          <h1 className={styles.title}>
            {song.name}
          </h1>
        </CardContent>
      </div>
    )
  })


  return (
    <div className={styles.container}>
      {songsArray ? song : <CircularProgress />}
    </div>
  )
}
