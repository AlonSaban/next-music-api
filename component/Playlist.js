import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom';
import SongCard from "./SongCard";
import playlistsApi from '../public/api/playlistsApi.json'
import styles from '../styles/Playlists.module.css'

function Playlist() {
  const playlist = useRecoilValue(playlistState)

  // console.log(playlistsApi)

  return (
    <div className={styles.showCase}>
      <div className={styles.playlist}>
        <h3 className={styles.playlistName}>{playlist}</h3>
      </div>
      <div className={styles.SongCard}>
        <SongCard />
      </div>
    </div>
  )
}

export default Playlist