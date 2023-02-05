import React, { useEffect, useState } from 'react'
import { getPersonalizedSongList } from '../../../api/personalized'

const SongList = () => {
  const [songlist, setSonglist] = useState([])
  useEffect(() => {
    const result = getPersonalizedSongList({ limit: 10 })
    console.log(result)
    setSonglist(result)
  }, [])
  return <div>{songlist}</div>
}

export default SongList
