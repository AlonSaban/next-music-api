import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { playlistState, playlistCoverState } from '../atoms/playlistAtom'
import { songState, songIdState, songSearchState } from '../atoms/songsAtom'
import { Search, LibraryMusic } from '@material-ui/icons';
import { Avatar, Button, CardContent, Typography } from '@material-ui/core';
import styles from '../styles/sidebar.module.css'
import songsApi from '../public/api/songsApi.json'

function SideBar() {
  const [playlistId, setPlaylistId] = useRecoilState(playlistState);
  const setSearchState = useSetRecoilState(songSearchState)
  const songSelected = useRecoilValue(songSearchState);

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

    for (let i = 0; i < songsApi.length; i++) {
      if (songsApi[i].name === e.target.value) {
        console.log(`its a match ${songsApi[i].name}`)
        setSearchState(songsApi[i])
      }
    }
  }

  const searchResult = () => {
    return (
      <div key={songSelected.id} className={styles.searchResult}>
        <img src={`/api/songs/${songSelected.name}/thumbnail.jpg`} className={styles.searchImage} />
        <CardContent>
          <div className={styles.information}>
            <Avatar
              className={styles.avatar}
              alt={songSelected.artist}
              src={`/api/songs/${songSelected?.name}/artist.jpg`} />
            <Typography variant="h6" component="div">
              {songSelected.artist}
            </Typography>
          </div>
          <Typography variant="h4">
            {songSelected.name}
          </Typography>
        </CardContent>
      </div>
    )
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
          {/* <div className={styles.search}>
            <input type="search" className={styles.searchInput} onChange={(e) => search(e)} />
            <Search fontSize='large' />
          </div> */}
        </li>
        {playlistsNames}
      </ul>
      <div>
        {songSelected
          ? searchResult()
          : ''}
      </div>
    </div >
  )
}

export default SideBar