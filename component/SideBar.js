import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { playlistState, playlistCoverState } from '../atoms/playlistAtom'
import { Search, LibraryMusic } from '@material-ui/icons';
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

  useEffect(() => {
    for (let i = 0; i < songsApi.length; i++) {
      if (songsApi[i].name === searchValue) {
        console.log(`its a match ${songsApi[i].name}`)
      }
    }
  }, [searchValue])

  const clickHanddler = async (playlist) => {
    setPlaylistId(playlist)
  }

  const search = (e) => {
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
      {/* <img src={'/icon.png'} className={styles.icon} /> */}
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