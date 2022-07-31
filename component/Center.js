import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom';
import SongCard from './SongCard'
import styles from '../styles/center.module.css';

export default function Center() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className={styles.container}>
      <div className={styles.showCase}>
        <div className={styles.playlist}>
          <h3 className={styles.playlistName}>{playlist}</h3>
        </div>
      </div>
      <div className={styles.containerList}>
        <div className={styles.grid}>
        </div>
      </div>
      <div className={styles.card}>
        <SongCard />
      </div>
    </div>

  )
}
