import { format, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export default function convertToJST(isoString: string): string {
  const formatString = 'yyyy/MM/dd HH:mm:ss'
  const JST = 'Asia/Tokyo'

  const date = parseISO(isoString)
  const zonedDate = utcToZonedTime(date, JST)

  return format(zonedDate, formatString)
}
