import { useRecoilValue, useRecoilState } from 'recoil'
import { playlistCoverState, playlistState } from '../atoms/playlistAtom';
import SongCard from './SongCard'
import styles from '../styles/center.module.css';
import playlistsApi from '../public/api/playlistsApi.json'
import Playlist from './Playlist';

export default function Center() {
  const playlist = useRecoilValue(playlistState)
  const playlistName = [];

  for (let i = 0; i < playlistsApi.length; i++) {
    if (playlistsApi[i].playlistName === playlist) {
      playlistName.length = 0;
      playlistName.push(playlistsApi[i].playlistName)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.showCase}>
        <div className={styles.playlist}>
          <h3 className={styles.playlistName}>{playlist}</h3>
          {playlistName ?
            <img src={`/api/playlists/${playlistName}_IMAGE.jpg`} className={styles.playlistCover} />
            : ''}
        </div>
      </div>
      <div className={styles.card}>
        <SongCard />
      </div>
    </div>
  )
}
