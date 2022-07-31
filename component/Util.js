export function minToSEc() {
  const maxTime = getRecoilStateLenght ? timeInSec() : 0

  const time = getRecoilStateLenght.replace("minutes", ":").replace("seconds", "").replace(" ", "").replace(" ", "")
  console.log(time)
  const hms = time;   // your input string
  const a = hms.split(':'); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  const seconds = (+a[0]) * 60 + (+a[1]);

  console.log(seconds);
}

export function formatDuration(value) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}
export const msConversion = (millis) => {
  let sec = Math.floor(millis / 1000);
  let min = Math.floor(sec / 60);

  sec -= min * 60;
  sec = '' + sec;
  sec = ('00' + sec).substring(sec.length);

  return min + ":" + sec;
}

export function timeInSec() {
  const time = getRecoilStateLenght.replace("minutes", ":").replace("seconds", "").replace(" ", "").replace(" ", "")
  const hms = time;   // input string
  const a = hms.split(':'); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  const seconds = (+a[0]) * 60 + (+a[1]);
  return seconds
}
