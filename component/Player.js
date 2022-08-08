import { useEffect, useState, useRef } from 'react'
import { PauseCircleOutline, PlayCircleOutline, SkipNext, SkipPrevious, VolumeMute, VolumeDown, VolumeUp, VolumeOff } from '@material-ui/icons';
import { Button, Slider, CircularProgress } from '@material-ui/core'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { songState, songIdState } from '../atoms/songsAtom'
import { formatDuration } from './Util'
import styles from '../styles/player.module.css'

function Player() {
  const setPlayingState = useSetRecoilState(songState)
  const getPlayingValue = useRecoilValue(songState)
  const getSongState = useRecoilValue(songIdState)
  const [isPlaying, setIsPlaying] = useState(getPlayingValue[0].playingState)
  const [volume, setVolume] = useState(<VolumeUp fontSize="large" />)
  const videoRef = useRef(null);
  const [value, setValue] = useState('75');
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0);
  const progressBar = useRef(0)
  const animationRef = useRef(null);


  useEffect(() => {
    setIsPlaying(getPlayingValue[0].playingState)
    if (getPlayingValue[0].playingState === true) {
      videoRef?.current?.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
    if (getPlayingValue[0].playingState === false) {
      videoRef?.current?.pause()
      cancelAnimationFrame(animationRef.current)
    }

  }, [getPlayingValue[0].playingState])


  const setPlay = async (e) => {
    e.preventDefault();
    if (!getSongState) return
    setIsPlaying(!isPlaying)
    setPlayingState(() => [
      {
        playingState: !isPlaying,
        mutedState: getPlayingValue[0].mutedState,
      },])

    if (getPlayingValue[0].playingState === false) {
      videoRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
      // console.log(videoRef.current.duration)
    }
    if (getPlayingValue[0].playingState === true) {
      videoRef.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    const seconds = Math.floor(videoRef.current.currentTime)
    setProgress(seconds)
    progressBar.current.value = videoRef.current.currentTime;
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const setMute = (e) => {
    e.preventDefault();
    setIsMuted(!isMuted)

    if (!isMuted) {
      videoRef.current.volume = 0
      setPlayingState(() => [
        {
          playingState: getPlayingValue[0].playingState,
          mutedState: !isMuted,
        },])
    }
    if (isMuted) {
      videoRef.current.volume = 1
      setPlayingState(() => [
        {
          playingState: getPlayingValue[0].playingState,
          mutedState: !isMuted,
        },])
    }
  }

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  const handleSliderChange = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.volume = (newValue / 100)
      setValue(Math.floor(videoRef.current.volume * 100));
    } else {
      setValue(event.target.ariaValueNow)
    }

    if (newValue > 60) setVolume(<VolumeUp fontSize="large" />)
    if (newValue <= 60) setVolume(<VolumeDown fontSize="large" />)
    if (newValue < 30) setVolume(<VolumeMute fontSize="large" />)
    if (newValue === 0) setVolume(<VolumeOff fontSize="large" />)

  };

  const handleChange = (e) => {
    videoRef.current.currentTime = progressBar.current.value
  }


  const video = () => {

    return (
      <div className={styles.player}>
        <audio ref={videoRef} src={getSongState.source} className={styles.video} type="audio/mp3" />
        <div className={styles.durationValue}>
          <h4>{formatDuration(progress)}</h4>
        </div>
        <input
          type="range"
          min="0" max={getSongState.duration}
          ref={progressBar}
          defaultValue="0"
          className={styles.progressbar}
          // value={videoRef.current.currentTime}
          onChange={(value) => handleChange(value)}
        />

        <div className={styles.durationValue}>
          <h4>-{formatDuration(getSongState.duration - progress)}</h4>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.duration}>
        {getSongState ?
          video()
          : ''}
      </div>
      <div className={styles.buttons}>
        <button color="inherit" className={styles.button}>
          <SkipPrevious onClick={() => revert()} fontSize="inherit" />
        </button>
        <button onClick={setPlay} color="inherit" className={styles.button}>
          {isPlaying ? <PauseCircleOutline fontSize="inherit" /> : <PlayCircleOutline fontSize="inherit" />}
        </button>
        <button color="inherit" className={styles.button}>
          <SkipNext onClick={() => fastForward()} fontSize="inherit" />
        </button>
      </div>
      <div className={styles.volume}>
        <Button onClick={setMute} color="inherit">
          {isMuted ? <VolumeOff fontSize="large" /> : volume}
        </Button>
        <Slider onChange={handleSliderChange} min={0} max={100} defaultValue={75} />
        <div className={styles.volumeValue}>
          {value}
        </div>
      </div>
    </div>
  )
}

export default Player