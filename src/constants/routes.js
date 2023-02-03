const root = '/'

const discovery = '/discovery'
const recommend = `${discovery}/recommend`
const songlist = `${discovery}/songlist`
const rank = `${discovery}/rank`
const radioAnchor = `${discovery}/radioAnchor`
const singers = `${discovery}/singers`
const latestmusic = `${discovery}/latestmusic`
const recommend_daily = `${discovery}/recommend_daily`

const videos = '/videos'
const video = `${videos}/video`
const mv = `${videos}/mv`

const search = '/search'

const songlists = '/songlists'
const songlistsDef = `${songlists}/:songlistId`
const download = '/download'
const cloud = '/cloud'
const collection = '/collection'

const moments = '/moments'
const defaultRoute = discovery

const ROUTES = {
  root,
  defaultRoute,
  discovery,
  moments,
  recommend,
  songlist,
  rank,
  radioAnchor,
  singers,
  latestmusic,
  recommend_daily,
  videos,
  video,
  mv,
  songlists,
  songlistsDef,
  download,
  cloud,
  collection,
}

export default ROUTES
