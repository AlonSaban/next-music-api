import { useSetRecoilState, useRecoilValue } from 'recoil'
import { songState, songIdSate } from '../atoms/songsAtom'
import { playlistSongsState, playlistState } from '../atoms/playlistAtom'
import { Avatar, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import styles from '../styles/songsCard.module.css'
import songsApi from '../public/api/songsApi.json'


export default function SongCard() {
  const SongState = useRecoilValue(songState);
  const setNewSongState = useSetRecoilState(songState)
  const setNewSongIdState = useSetRecoilState(songIdSate)
  const playlistId = useRecoilValue(playlistState);
  const songsArray = [];
  const sortArray = songsArray.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)

  for (let i = 0; i < songsApi.length; i++) {
    if (songsApi[i].playlist === playlistId) {
      songsArray.push(songsApi[i])
    }
  }

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
      <div key={song.id} className={styles.song}>
        <Grid>
          <Card>
            <CardMedia
              component="img"
              onClick={() => videoHandler(song)}
              // sx={{ width: 151 }}
              image={`/api/${song.name}/thumbnail.jpg`}
              alt="Live from space album cover"
            />
            <CardContent>
              <div className={styles.information}>
                <Avatar
                  className={styles.avatar}
                  alt={song.artist}
                  src={`/api/${song?.name}/artist.jpg`} />
                <Typography variant="h6" component="div">
                  {song.artist}
                </Typography>
              </div>
              <Typography variant="h4">
                {song.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    )
  })


  return (
    <div className={styles.container}>
      {songsArray ? song : <CircularProgress />}
    </div>
  )
}
