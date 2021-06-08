const MS_TO_HOURS = 3600000;

const MIN_AND_SECONDS = 60;

const DOUBLE_SYMBOL = 2;

export function TimeToString(time: number): string {

  const diffInHrs = time / MS_TO_HOURS;
  const hh = Math.floor(diffInHrs);

  const diffInMin = (diffInHrs - hh) * MIN_AND_SECONDS;
  const mm = Math.floor(diffInMin);

  const diffInSec = (diffInMin - mm) * MIN_AND_SECONDS;
  const ss = Math.floor(diffInSec);

  const formattedMM = mm.toString().padStart(DOUBLE_SYMBOL, '0');
  const formattedSS = ss.toString().padStart(DOUBLE_SYMBOL, '0');

  return `${formattedMM}:${formattedSS}`;
}
