import { useEffect } from 'react'
import songsApi from '../public/api/songsApi.json'

function Search({ data }) {

  useEffect(() => {
    for (let i = 0; i < songsApi.length; i++) {
      if (songsApi[i].name === data) {
        console.log(`its a match ${songsApi[i].name}`)
      }
    }
  }, [data])

  return (
    <div>

    </div>
  )

}

export default function Search()