import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { playlistState, playlistCoverState } from '../atoms/playlistAtom'
import { PlaylistPlay, HomeOutlined, Search, FavoriteBorderOutlined, Favorite, LibraryMusic, Home } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import styles from '../styles/sidebar.module.css'
import songsApi from '../public/api/songsApi.json'

function SideBar() {
  const [playlistId, setPlaylistId] = useRecoilState(playlistState);
  const [searchValue, setSearchValue] = useState()
  const genres = []

  for (let i = 0; i < songsApi.length; i++) {
    if (!genres.includes(songsApi[i].playlist)) {
      genres.push(songsApi[i].playlist)
    }
  }

  const clickHanddler = async (playlist) => {
    setPlaylistId(playlist)
  }

  const search = (e) => {
    // console.log(e.target.value)
    setSearchValue(e.target.value)

  }

  const playlistsNames = genres.map((playlist, index) => {
    return (
      <li className={styles.li} key={index}>
        <Button onClick={() => clickHanddler(playlist)} color="inherit">
          <div className={styles.playlist}>{playlist}</div>
        </Button >
        {<LibraryMusic fontSize='large' />}
      </li>
    )
  })

  return (
    <div className={styles.container}>
      <ul className={styles.containerList}>
        <li className={styles.liSearch}>
          <div className={styles.search}>
            <input type="search" className={styles.searchInput} onChange={(e) => search(e)} />

            <Search fontSize='large' />
          </div>
        </li>
        {playlistsNames}
      </ul>
    </div >
  )
}

export default SideBar