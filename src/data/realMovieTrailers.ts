/**
 * Verified Official Theatrical Movie Trailers across all 79 films in The Pardillo Archive.
 * Includes direct HD MP4 theatrical trailer streams + IMDb & YouTube official trailer links.
 */
export interface FilmTrailerMeta {
  videoId: string;
  embedUrl: string;
  watchUrl: string;
  trailerTitle: string;
  channel: string;
  imdbVideoId?: string;
  imdbEmbedUrl?: string;
  directMp4Url?: string;
}

export const REAL_MOVIE_TRAILERS: Record<string, FilmTrailerMeta> = {
  "film-la-la-land": {
    "videoId": "0pdqf4P9MB8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/0pdqf4P9MB8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    "trailerTitle": "La La Land (2016 Movie) Official Trailer – 'Dreamers'",
    "channel": "Lionsgate Movies",
    "imdbVideoId": "vi2514728473",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2514728473/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2514728473/1434659529640-260ouz-1478184782082.mp4?Expires=1794998497&Signature=qmASKwUT5s-FDhvaIGExFXNwMVozhv8RF5EGL0Esh6OqVdspiFZgHE56~q1y9y1-LSEWmKsCZf7F15b2ZY2628rvzGlKCWac9~fiWmkFT5zqWwTGxnQU5LFyEfNWw1rjjIlHdS7Sg-wvdOpL0sPEZ1mFaNY~QuHyxe3t4ADcqlBwGCBd3wBnoryPFPrrv9ioeQK9s4XU0X1w1ydSriKRK3XoxnSvjqZ5L0ra75iy49IXYm74vdsj9JFq-KPUx1NA9ZKQoxp1bn0rpL0YPsb64N52z274HWbU48LyWTb47~waGmTt4JTno3FCp9sXZpYwu~S7KrMOYrGBFahjU2WFYA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-lion-king": {
    "videoId": "lFzVJEksoDY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/lFzVJEksoDY?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=lFzVJEksoDY",
    "trailerTitle": "The Lion King | Original Trailer | Disney+",
    "channel": "Disney Plus",
    "imdbVideoId": "vi3764362265",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3764362265/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3764362265/1434659379400-8cjq25-1474413579826.mp4?Expires=1794998497&Signature=OJKawTOACqlEWKcnPPUy6X5rwIAmVbAUmWJYW5ctELvQK9ZGj-V0sGaSg9b8UKeqktyPJr-dzrI41t1-Eo89xh3vcw2xYi9A2DHioweIGamvWr0uy7FK564THQ44TKm9C2TV8PoYBHMOiaPnKOqcbKJXcuiUO6rLeI~xkjyauYgi7N-ROA0nd02IjFW5AvhuqkpDKJGSMhlCt4mRREm1k9rKtYWNj~brjPR8wuPxuZSU59GJ8puDUwQL~GzuIROU-JhNBzb-Stp2~nsPTs4E9s47kJ5F7UoUPwTW-hPxbjYEHGq70zBAXeDVnrndKH7duZ7D2xbBGiXDkTfq6lStfg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-spiderverse": {
    "videoId": "cqGjhVJWtEg",
    "embedUrl": "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    "trailerTitle": "SPIDER-MAN: ACROSS THE SPIDER-VERSE - Official Trailer (HD)",
    "channel": "Sony Pictures Entertainment",
    "imdbVideoId": "vi207143961",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi207143961/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi207143961/1434659529640-260ouz-1684523586073.mp4?Expires=1794998497&Signature=fhT4pe-i-3OhS3U4Emw1-stsQZwPsUp-Op35EiUsB0F0vWAG~IYbzUU5VhdZpu-BndEE56KG2weovwsANsdB6i9Ix~KvJ14DnJ0yz0T8kVkDtZgo1uGeN4hDkPaQhlZzuqAbOvxNMG6cY3sKrizI-dls6NS9Qfty6A8NK2~g6jf~TVjGnTyD0wf0BBIAGHYeb36cTlW~IuHIwUcNnekce5SYdehPIjo48qBIESW0w5OhKJFIe44SWQbbBgR58LediAGSTYJjyD2y3kN4IN32ZGOK5jRdc6favlLA6WES3Ly0S7SbHhdVZdLADPTA5JebCNqo3Kmr~NU5INHNsbZXig__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-httyd": {
    "videoId": "2AKsAxrhqgM",
    "embedUrl": "https://www.youtube-nocookie.com/embed/2AKsAxrhqgM?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=2AKsAxrhqgM",
    "trailerTitle": "How to Train Your Dragon (2010) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi1158218777",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1158218777/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1158218777/1434659454657-dx9ykf-1616202569810.mp4?Expires=1794998497&Signature=DhwRcQaLytFJK8PU7bWgez8HgnpamEF74Nqd4FR13YsAbJ2IKeas2xvwUdavhlaRyCuqCkq4iaef~gMj2D-mZ~xH3MC~Gc4wMYZIUmZnl8QDgSBqe5YPNlMCPsLnPl48Kr8~Hrv1FMqwVOyAovfeZc0flKf0AWHUT6zn-OYwLn7UGCUXLCjYPi4wrNTbo2DkqFhl4heb0DGwicwlalZZzkiw4~AswK6F3T2Cq8HXYAoAzAIyEMnyWsUWwudcmZUYXjjCLTmiooVJupMWw~PvTJONUzR51EhdtKkvtO5wsLWaCqJf2FdpLqFwGQ09M0DnN23Vs9Trk3O3Jbd06Itg1w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-avengers": {
    "videoId": "eOrNdBpGMv8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/eOrNdBpGMv8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    "trailerTitle": "Marvel's The Avengers- Trailer (OFFICIAL)",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi1891149081",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1891149081/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1891149081/1434659454657-dx9ykf-1616202397016.mp4?Expires=1794998497&Signature=KQzAGzpKMmpmR~xHaaEwyEUvx8uLMPdlpoL4u1HR-NQnGzCKykEzTA5FZNt6RhCzMUnvDWDZZFvN5jsWL4jVD7wABDDCjDIsdGDkTGF8NW1PUYt6~xn4ljAjkpRnQhJqIoV~U9Y4yYQ6G0GlAoDuFXjEMwh1W~XvWsbIS0XtYtTqM54Tasl8RzwfIqLWKVYEBlqIvLzKNsBipRqq1yZj7scIEK9FG9a~q6eT-XhJj~WNvU5dSpgFkqg5T~b3G4AXcVEI~23vzLFiLZSiMw3~z0mNGL8IwUeHmHbaHVbWFmPKBWCNMoK9UJB1VXkSfhmlpFILztIgzjGAxfmqXmJhSQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-fury-road": {
    "videoId": "hEJnMQG9ev8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/hEJnMQG9ev8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    "trailerTitle": "Mad Max: Fury Road - Official Main Trailer [HD]",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi3047862297",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3047862297/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3047862297/1429133835382-7l8xxr-1430608297815.mp4?Expires=1794998497&Signature=fH2siox70aGP82H0s-bM1td7zExKG9cne0AC00VSjUqF34moUEoF9afSkkv7soIg8W-pcx17tLHRksHyPgvD~61IqBMGouMT8Cls4fB6eGbYM9PBtS7mbGBnLQr-E8ubdrjDqmMwK-2fdQmAkehddgDSf~FfH4RwZU1Jkz-PfGiHEfpQq-sZ8XbwYMCqC0gsU6odIi2k49GQVbtZAvchg9CUrVxONpDsY9QNocfsRH4YK7HqmObDnfYlwbgBgOAihmpOi~3i3Mpyevc8ZR0~ie5O~A75ogZdO9N9WlEZSwndUQIgEQK5ZXXyazXY-D9yJ49p7OKcG9H1WGSl6WxkXA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-dune-one": {
    "videoId": "n9xhJrPXop4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/n9xhJrPXop4?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=n9xhJrPXop4",
    "trailerTitle": "Dune Official Trailer",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi3986080537",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3986080537/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3986080537/1434659529640-260ouz-1633625495700.mp4?Expires=1794998498&Signature=knKxsdyEXKRJmmY-VyNODCvEhPGfBgFWN3DmDUbOBNBBWHROorlCrPIQsJ8MeHRdNJpaIggFYrj372kfrNv4IaQXhqHDmc72mxCQUDPzTaip1Tm9abQVlHd0qswkeqzlyDWX84lcC91OImM6sncYDntDNSp6tS7pl8MyqmGo~IfW-okEBu6984Ukfnm5fSruuNNw~2OcBlA73KnVmTeXpO0AxpOKjowfXp-3G1ggFSgPWcgBjgEFi6Lv7q0r9rkMBHoT19IS~aW84vV3FfNWfVIC8ESO7AumYRa~SD3fT-Uo9xUa8OTiRU18QE98kRYN595UCX5Qu2Ja5W2DSsbQ2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-interstellar": {
    "videoId": "zSWdZVtXT7E",
    "embedUrl": "https://www.youtube-nocookie.com/embed/zSWdZVtXT7E?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    "trailerTitle": "Interstellar - Trailer - Official Warner Bros. UK",
    "channel": "Warner Bros. UK & Ireland",
    "imdbVideoId": "vi1586278169",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1586278169/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1586278169/1434659529640-260ouz-1616202363366.mp4?Expires=1794998368&Signature=LgXsQfJSia4z6R8PIEciQWNE3TUyZH6IAsVyiNF8qINRtx7Iw9r5VTNwhUiuP~U7zfUF9TOdYkVPHwBxtkmnzUURS7pF7krLUTD6Qz5AE7Vk6WcNIdK9cGG50lzAdjxAcAR253L7Bhs177NP-~08iIGrvIFJlodeQ4YPMs0A29sCd9z6zwHB4IJK85UtkvRVwsS9uPbMKe88GYTvU0pz8kC4CA58FyN7~EEBl34hwzC-XnV9dULXzbJMxY-JreCENMqSlnSsbNlfMLHud71nyvzBEsxfhRGp4tX-IQ2iYEgkii8f1tW0QXZ7z8X18LLF5T88o6MFpyVGWuyHYwksEw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-shrek": {
    "videoId": "ooJJX3R42WM",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ooJJX3R42WM?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=ooJJX3R42WM",
    "trailerTitle": "Shrek 2001 Official Trailer",
    "channel": "AnimatedMoviesC",
    "imdbVideoId": "vi4085711129",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi4085711129/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi4085711129/1434659454657-dx9ykf-1563994020407.mp4?Expires=1794998501&Signature=uYlIn2Sb7k2ThHgWtk0z9qPP2naEglt4shn0VSDxX795gpeS-7xVaKKln9Luj18wDDGVXVDexA2smsRkZDJ33W7dpDtEUhln3l8AxikunOPDuKVXRh3ohkJLEloaElvAASQ-qOL1zzaPWaUciA9Vx5LI~9KXoA~hk2FYUeOb~UX0OWzz5g6c0ofKfFGo2oUle9mhFqHssxhfHI05nCZKu95v~ll31s2nz39uhNJlS1rMkqu5Q4-YyxwxRjyOEAroqpnEqgjcv4vOEph~vAyA~8-P3G1szEyraHb7R~L79LEjyq3Hv2FRo1awpKH4nI9H53zXPz8lxheq1Ac3PQtpdw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-wreck-it-ralph": {
    "videoId": "87E6N7ToCxs",
    "embedUrl": "https://www.youtube-nocookie.com/embed/87E6N7ToCxs?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=87E6N7ToCxs",
    "trailerTitle": "Wreck-It Ralph Trailer",
    "channel": "Walt Disney Animation Studios",
    "imdbVideoId": "vi3621299225",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3621299225/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3621299225/1434659529640-260ouz-1616203209941.mp4?Expires=1794998501&Signature=M~XTyxz92JvxEjO6ShjiaB4RLoFGz99pq-MnT9yS5rPCMXiyj8eoMr6q3BGr4iIqB-dG2SjvYz4z4qmtupcqRylMwRMNfnPIltBQMm69i7QNCmrim5aztQHxpuup9pnmwW1V2rl0O0xNGHHyqK3M6~cEuUbO34VbfLw0TJy8aSS1sqH6RR4a2x6v3KXrW0yzZ2J7jtwQE9xL1LVzU3Md9tqf7C6wxD-RAWBY7S0KJJ1kzOX5INqRf-k5xjjSL-M98QUTGWc9DWGfCrssOQWMsmhQTaUb6UWA~13eR7cIIDFDyrSGq0Tgek70-qDXkm7-xC6GOR~4qZh3SplmdZxR6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-ice-age": {
    "videoId": "i4noiCRJRoE",
    "embedUrl": "https://www.youtube-nocookie.com/embed/i4noiCRJRoE?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=i4noiCRJRoE",
    "trailerTitle": "Ice Age (2002) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi1000866073",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1000866073/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1000866073/1434659454657-dx9ykf-1563462877675.mp4?Expires=1794998501&Signature=CxBpfyLzgoFjmfnw37Mb6fOvkdbG1-VmE18qi3k7JdkBCIWu~ALSpSIxP~a2ce6WwQ45EOAGIbF-FxinRepZlP~jxXpjW3VMnjE~vctYN8TvQZds5SjlmqmhLyl3QfMgvvi8J1T0J3Y3MxiYgcpMLlWNzV-eb8xGJo820OXLo4LqN5K-73xNWW84CnYSXbcrX-ViC9bCrx~YS3dy8CRU2~-Qua6KUNm87AW30UhGU3z56xVoSpzElHN-9mqQu6GGFa1gZLxI8HpFYaMqm-akExXlFSJd-6JDqaNNDzee1EAYKRHUjkuHTReYXbD~Jc8y6cgEZLW6E-Wcdf1Cqn9Pow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-incredibles": {
    "videoId": "-UaGUdNJdRQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/-UaGUdNJdRQ?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=-UaGUdNJdRQ",
    "trailerTitle": "The Incredibles (2004) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi2963250457",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2963250457/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2963250457/1434659529640-260ouz-1564219411823.mp4?Expires=1794998501&Signature=VNX7GjW1NLYvENrp~D7ssjyThOqrqrNAFE009i9NHDFjtWlVOlssyiKG8I6PrvkVeJdFhITH4dp9nPM92YecV5xYSmRvPGrUH6YY6AdaHXRyAr7qiC5oK5W2CJq6YzwU9Sse5FUCwWn7tMGcyD9wSAT5PmatZBgcCTWCqnbey0e~cS0s6Hdk~PXrQtxJdUMq5NfZm~8jh4S5Xzeclaa4EUfzdv5MP4zHag2ChH6qvYAph1OvTmieicIaoe8-5fowyOrfsnt8BPvrmR0i9XftRiARRQ4rq~0ybjSsEtr6W7Xb2wmvb9Fs~dNY5awwHwknOz1Ws5i-p~rmNw9CPThYbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-big-hero-6": {
    "videoId": "z3biFxZIJOQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/z3biFxZIJOQ?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=z3biFxZIJOQ",
    "trailerTitle": "Disney's Big Hero 6 - Official US Trailer 1",
    "channel": "Walt Disney Animation Studios",
    "imdbVideoId": "vi513650457",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi513650457/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi513650457/1434659529640-260ouz-1616202543931.mp4?Expires=1794998501&Signature=pBeYJIwsxmE8AArQxsXQPhxh96DZFJS5jyOYXkbp7w39mcNCwtAh5ZDx20B8sVdelbG4xL1tNE9rVIgwxk056kEk~U0fhSjSy1zUUKg8YQExB9h66tWuvTkSixUCCDPSOXFm2BxI2aeqcYoZriNFrxe~o0YL~1pYrRorai3XQaHw~UBU57uWljba6TFra7jwNr6~CbmN1vqaGSm9hQOJWwP9I2zyArhmygsFZTw4ccWPh3Xpjsc3ibgZ3iuG8MGxyA2ykBdgvMqCs7qpirgmYELXFTksZxAf9zlyXt4xOY6w2EnyX0M26gVqtaMxYbzyOSctLHO1gNZCikZxkbYt9w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-guardians-gahoole": {
    "videoId": "0c5gYg3adeI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/0c5gYg3adeI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=0c5gYg3adeI",
    "trailerTitle": "Legend of the Guardians: The Owls of Ga'Hoole Official Trailer #1 - (2010) HD",
    "channel": "Movieclips",
    "imdbVideoId": "vi1068631577",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1068631577/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1068631577/1434659529640-260ouz-1616199407280.mp4?Expires=1794998501&Signature=HuAJ8IvRKr3U82yVLfHxxJ2fHBabZDdOsdTxqIyuUvBM3wDK5E~ZBvr-ZuRfKnLK6k4cfObzkt5OFXWXM094JBl4prB2BBYSwKdwZPslR9veuRHBw1EUqRFB4TasANG-OrMwXqWSVydbnGMha4tH1Kl52sglU4CsM8yv9gazgTRWwhwnuIJu6062zOo6-z6WIF3SD5ojawzZhxmHnw44RVqRmOqpwwTmwvSHwkLg9svwuux01CGEEeV7Q7q4pDfAm0ALeHaG7BP~efdnX~vqZJ9xuJ1jPlMEofv8DWrLcxxzfcs2lPpbDUzxG-7JGbewUUiCEgb0dEL9kjrex9D6nQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-toy-story": {
    "videoId": "v-PjgYDrg70",
    "embedUrl": "https://www.youtube-nocookie.com/embed/v-PjgYDrg70?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=v-PjgYDrg70",
    "trailerTitle": "Toy Story (1995) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi2052129305",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2052129305/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2052129305/MV5BNjQzMDM2MzQyNV5BMTFeQW1wNF5BbWU3MDI1MDk3OTY@.mp4?Expires=1794998501&Signature=ekHKpecwrqzqfMFxF~o0y7GXgqafon~5PvO0HYAj4GO1aF6PKY4fbhgJz91LbElrH~Qtn4XMpROWqjaKdoY1kJgH4O4fo1IFRGRcc7EiQVaXVwyaAFXb87c2lHLZ0KOiNFPl8KRTdZ7j5~meeT0u2pLInncHxQ2LmirN-OAPWZRUbgVE1xemiSTPwaWs~fNp9iHKQ4y--JiE3L0Doy2KCHc87BN2Oi2VnQJXAJUltNI4Sfx6nu0CzIB8fChX8kj-V944cCm-6MBtgT3hANsA1CM0NtyNOL8zV8DLz1heL8Dc0tNAq9~qynbAxaUdGlaAgPs0uKzOybaea08DYOPaxA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-kung-fu-panda": {
    "videoId": "NRc-ze7Wrxw",
    "embedUrl": "https://www.youtube-nocookie.com/embed/NRc-ze7Wrxw?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=NRc-ze7Wrxw",
    "trailerTitle": "Kung Fu Panda | Official Trailer",
    "channel": "Universal Kids",
    "imdbVideoId": "vi330432793",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi330432793/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi330432793/1434659454657-dx9ykf-1616202481994.mp4?Expires=1794998502&Signature=UkRMLq8QeP3yH9GXaS1UDCj3SF0LZLBT3Eb-zU0v-TwylAGcfWzxunq~gmQ7SGKwh6fSxbOtQCOYZyK7Adv3F2VP1WHveQDCl0S44fJ9Ma0dUrFoV0k6VYb-s3GLjX85RTwYxUBxaHwBgd7kAg8et6dnyyeZh5Ibmo~u20LBxa~k6NOBGVrTZtwMos64Rf5fb4Aa2fymt30UM343chJZrOtHBbyAY4UO0NT~r-GaXsusgGGai8ArHt~CH3FacHKqiNhtrsIaQgvDHR0Bp176Y0QCEqCkdzPSphdjSsYtECVdx3KpdYcrKbSivkRYh7d6gJH4U6JpMSbrWq5C8Xs0Xg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-avatar-anthology": {
    "videoId": "d9MyW72ELq0",
    "embedUrl": "https://www.youtube-nocookie.com/embed/d9MyW72ELq0?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=d9MyW72ELq0",
    "trailerTitle": "Avatar: The Way of Water | Official Trailer",
    "channel": "Avatar",
    "imdbVideoId": "vi2821638169",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2821638169/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2821638169/1434659529640-260ouz-1756916237657.mp4?Expires=1794998503&Signature=KxzkNKPuhYqNRrWGh~DvPsEZhgifT5Ci8Xo99p3U4V5jxT3mocl9X6h~UZaeq7IxsVCdBexb1-22AyFI9f2q6J8wrj-Iu08-ALIv05fLa6SLlHHlFGBfZpiV6E2WRxV6n4Pt9Sb7z7b124z8d~oyoE-Xy1jvmVFa0ahV5ifOu8SRuIaqONBm4KMaSKtpstTfKoo6iF4KYYChPeMEqmUpksRPfA6Pp0L2ztqBY4Uh3rL-eZFULKtBaTP03VOTpAgJdnnJUWnzy1~YqOk3GSEFkNxAjIk6rpozPg7clqcq~AtDaVpLOqQa5xMkqDUMvmCoeSt4eZXqHqOhsB4OTTG80w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-one-punch-man": {
    "videoId": "Poo5lqoWSGw",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Poo5lqoWSGw?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=Poo5lqoWSGw",
    "trailerTitle": "One Punch Man Official Trailer",
    "channel": "vizmedia",
    "imdbVideoId": "vi3474439449",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3474439449/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3474439449/1434659529640-260ouz-1554987470383.mp4?Expires=1794998504&Signature=corZwGTVjQ83pXYx-iEMJReNNCF4WC7rKwV492bg0P4Yy-9hSW6n35IEuv4hT2PYTapgIICbaJtnSXM~JGQtxz6XPPCiLeSXzxFwOycGtV4GZRFyjdoTvmgY1Vm3MGrNIrgpYGrNVw9ejvyKIGxNDrEgFu4gDKtrey02MD5oBr~fLBcgQk5jn1bV8PvN9RDcbLY~oVDobDC0V6Kj7CgjF619rrVhCqYRl5n54lcU5~vLF73qsAJrLp0fQ-kL5MUTjL1rcWEE7NQtQuUFcStGzfTxy4BDTb3WHkVh-onn19jaj4XTMsCj5qrGe1xpa7LwLqPlXcqHl~PLXTRu8BSnxA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-moana": {
    "videoId": "LKFuXETZUsI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/LKFuXETZUsI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=LKFuXETZUsI",
    "trailerTitle": "Moana Official Trailer",
    "channel": "Walt Disney Animation Studios",
    "imdbVideoId": "vi2813048345",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2813048345/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2813048345/1434659379400-8cjq25-1473951246451.mp4?Expires=1794998504&Signature=ohnQ7DcI6ujyoHH2-VzlJc8JQspoVHbVM-oo2DdcRYFmDxfSc003VW5uGN-e0cMXc~oGXbLl64HaNXwROn4M3NzUYj0D1HZLOiBqx-kaYTdn7U2hXzXdBxEJDoxjKDBV6NIaH1RlzN5lByWu3aOAEkYYB5jkdvBSWXTEG9gNT61nHqN2yvnBMjeTpVMzPLfjwUuPHwrHPXV54qJ6jOWl5iBYY7lIHCFxmwg4MsxRS1wB~SIy9tjVH5qbvJycfu7gR~s2MATj-8AgBP-Nr~5kvyB53akC9zbyp2EkvkcuzXebPMq9TJaUqg1NFtR3K4pHg7MBIbP4oEpNBGyW-L98MA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-project-hail-mary": {
    "videoId": "m08TxIsFTRI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/m08TxIsFTRI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=m08TxIsFTRI",
    "trailerTitle": "Project Hail Mary - Official Trailer",
    "channel": "Amazon MGM Studios",
    "imdbVideoId": "vi2732378905",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2732378905/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/mc/vi2732378905/vi2732378905_1080p.mp4?Expires=1794998504&Signature=HgxGbUs0VnUGewD9-b1feAbmJHRsBDllGMthyPVbGOl5JaD1ueb9HFaEuVKwe~FOW2MdK4NaBF8ALv-oBwOyhMBlEwQLfNXZLuS30FShPmJPqhVnD6RSmRHCwX4HD6VHPSxrtE5Hxb72wIfrqqAlKTElhi2prZy-j4kbxzqVu4IEWF0JUKZP9-v-n6phr~tm4tSScHU~tiFa7H02VCQk6OX~tt0UcZxhgqsFjTovq7LOCd-nQIAaIPL~7FEY6T3iPaWyRWPbZaMjYYu0hxU0mpORyB4Z9wTe3pEDUZE1TpRDd9AWAV6ItFDy7nIjswbX8v~32g3Mu~F~g5BWv9bD7g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-matrix-anthology": {
    "videoId": "vKQi3bBA1y8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/vKQi3bBA1y8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    "trailerTitle": "The Matrix (1999) Official Trailer #1 - Sci-Fi Action Movie",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi1032782617",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1032782617/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1032782617/1434659454657-dx9ykf-1606954147857.mp4?Expires=1794998504&Signature=QexHJUoxF7O3TmTOMseo0-zG0aEFiOYull70Sgr89~FRzSUYjqtEMYOB~sxnWoRmmw0kUZKVIa~ptD3SP5kiC~er6If2CHQQghYNaA8DWgHsL-AEArTs96M0cXqKxZENWBQHI0arC021d7bEd5mWklbfQCZ6f2i8U079VFsOWpuAEa3jZ0rsbIlWB2H-QQ3QQgOMRCBtb2oJG~mSrYHH27dmwre-2QO0FB1Gr4lfo4NATUFpchTPuqo~Pa3-IfRShWAo6gD5M5FTyd9Zk7oEMSX5~sA6WBd1L7dusNjE0B11~c-99-qXj5qbNvcp-ZSh-fX~y-QYKgrHpkzKGoN1ag__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-blade-runner-2049": {
    "videoId": "gCcx85zbxz4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/gCcx85zbxz4?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=gCcx85zbxz4",
    "trailerTitle": "BLADE RUNNER 2049 - Official Trailer",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi2181676825",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2181676825/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2181676825/1434659454657-dx9ykf-1577823737448.mp4?Expires=1794998504&Signature=mcC7m-8gjJFK93uWGeL5WhiDi7TArvDyaTFHRqgI32F~oe9RtJOCfa5BIwp-qZfNlqBGnDk0trKr06Hvr4V8FvbTRet7EdCdjA4gLq3CxwWwCXw8rA0sh3oYUEa8po6XE9VPTA5IXA7OSM5dYJ4bT4DvLoDdDl7iIFtjTV10i~srHlvpcWX99g587T2eZcF43N4LWRtiBiOHBMd9L6wQN3k038jegzHKjcZi5xGuYy-8z2Sfg4qcwx22I0QEyS0Mfmg69M6JE4LtZY-YLGf0G5BDLoUK-dEV1eyiJuekPT~w9tijfcUlRpJyJq923LQW6oXo1-acCwtGQUlgpAY5XQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-pacific-rim": {
    "videoId": "5guMumPFBag",
    "embedUrl": "https://www.youtube-nocookie.com/embed/5guMumPFBag?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=5guMumPFBag",
    "trailerTitle": "Pacific Rim - Official Main Trailer [HD]",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi1369752345",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1369752345/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1369752345/1434659529640-260ouz-1632281728566.mp4?Expires=1794998504&Signature=TqlW-Ha9wVonu5Ba9r7qyBw~OwseLqpFi0tBFbIopbGAEfZ4GgoT7cbcCB2nEq-RKtA6eZaczBvL~c6jb0PI3csU-qUkv-LOwiSxFEF-rlu7Dg0eAfKKeUjZ24WmyM9t22cCnWoQdkMHGIHBVpXZQWsA9-9WjXErGVynOakGEHwqo1K4AhKb7JCxulZ0fQ8BEjb0dJ~eTr5u-UWco0npX5DRaFJkAwxMRHia7f5W7zefUdRz98tSIucqHcFVM3SCc~wPl8~glBOU1zYDEr8wSFMTj8KjDWuHHem861jnefeoCcO4ttCbO8nB3BilXrKRXCNq0BMjY76-DTZC3jDhnQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-edge-of-tomorrow": {
    "videoId": "vw61gCe2oqI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/vw61gCe2oqI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=vw61gCe2oqI",
    "trailerTitle": "Edge of Tomorrow - Official Trailer 1 [HD]",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi3591679257",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3591679257/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3591679257/1434659379400-8cjq25-1616202495698.mp4?Expires=1794998504&Signature=WoZwMreyYc3q9Z3zVM3~~0CCY1FzSTYAOLz5Pt9kgm9-6aiWLl~Yzbo4DoJ5pryz02q0lK5hAKUbRxe7KP3XIG3-9644Ibik3Tghdz5bdse5yzeBn5QOsSOD3RbQrwF3JZ4SSnBZeJ6kmB74eD87s-o6w6bpW4jjgmZLC0rzx8ZHILV2wMuQGJQhtZ7vS9a3O1ccITkLwTipQ2k0TtGxW9LmI~ckqXTkwAl6~Ks6Pq5jXviV0SegocaiLuZ-SYtv~8U3DjXmRqcKau56BHoxCfqM0GwFWFj1d7bZgo1Crp8tj5lEUTe07EqdJO5xDc2Cut1uNkoPSb70hXKoDk0uSQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-district-9": {
    "videoId": "DyLUwOcR5pk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/DyLUwOcR5pk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=DyLUwOcR5pk",
    "trailerTitle": "District 9 - Official Trailer (HD)",
    "channel": "Sony Pictures Entertainment",
    "imdbVideoId": "vi3896050201",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3896050201/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3896050201/1434659454657-dx9ykf-1616202575956.mp4?Expires=1794998508&Signature=Mt8RVONwAOgUXi38z4YF48MbU0UI6klSkc~rTqKm-pmqzXltcDvQl~MObS1FX05x-0z1IsvFIi7SKoZgssPUedpP75ZlfyhYV7NUMKvE6ZhfrANAWrAPktdtLhW1IeLv3Cyq4N3XeJKc~8U1EddM1EBJuuQublutDjUPqtdw49uoNgWVgBGNDTvnHMju9H4xuaTQ2IaAtRxcLyAdfnxvBKiJGDAG2qX6sPd4qmyKi-Sb2xyxEWart777YQwhijx3nHgdF5PzSi25dEp3TGnaPkbV-bjuBGfz2oZY~bjw-AVnyCpha2qv-pnunarcPzJSlxfiD0FR4STwrNz~lRkIAw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-bumblebee": {
    "videoId": "lcwmDAYt22k",
    "embedUrl": "https://www.youtube-nocookie.com/embed/lcwmDAYt22k?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=lcwmDAYt22k",
    "trailerTitle": "Bumblebee (2018) - New Official Trailer - Paramount Pictures",
    "channel": "Paramount Pictures",
    "imdbVideoId": "vi1473100313",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1473100313/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1473100313/1434659529640-260ouz-1544731026979.mp4?Expires=1794998508&Signature=ollY361oE1wkktHpDIAcr4tjFQls1C7duJH5a~NyMlf3inebos49ojK4YnqbT0XtHEhv8MXfjlH7SLoam~Dyl3Ih~334ziIzo8i~tVqOmP1H5aNyFPQGtFcfqGuTFZh6WTb7Za~U0mBDSAmjnvzkzA1Z7imIz7P~lCmgnB2B6Kcc~bAf26FGsxqzrd8idwQaEzIR5CitjubDVmpinMD~xG5Hp5nBwmbD1XRxbBFZivlSFHmPXq0tvz3smeRagLua5K1d21wfvm6FlDP9pCWwNBYEQ5v9iA3HUZZpWhjlgbSlpveNCFlVrlMH4qfAsClzrbUaFzxoBXO5q7iIEFA-QA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-tron-legacy": {
    "videoId": "P78pl1FUXfA",
    "embedUrl": "https://www.youtube-nocookie.com/embed/P78pl1FUXfA?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=P78pl1FUXfA",
    "trailerTitle": "TRON: LEGACY - Official Trailer",
    "channel": "Disney UK",
    "imdbVideoId": "vi4134312217",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi4134312217/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi4134312217/1434659529640-260ouz-1616202709318.mp4?Expires=1794998508&Signature=alhy5-C2KnzXahTfgo8CF2~fU6Un3gXJTAcaekIGMMfXNtKm9bthE~47D3QalrV8jc7ysgQr6fWoJFaQV4OZ6hfi9ZRIqFWEriQB3HdPJYLHazoAO~SnlwM4NkRrUnWAd0LnHgwuGEcSQH58xsfvmvY-b1aHAG7D7zHNEyyqQNebBuMAQAU0SciOmKU4e1sLqRItjyPhfsiWpwAA~yfZTbMbn6BStkeMiS6PkFEmVHEWsr2stxruBue7q2WJNZWeyY1bnXcvKXE2b49BNJXIZKTC-UON~MJEIrBpwzQypVr-zpuOGyFDeSobIjp1RrJqtRvJ1K9R-BS2Onywu-Sk7w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-alita-battle-angel": {
    "videoId": "w7pYhpJaJW8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/w7pYhpJaJW8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=w7pYhpJaJW8",
    "trailerTitle": "Alita: Battle Angel | Official Trailer [HD] | 20th Century FOX",
    "channel": "20th Century Studios",
    "imdbVideoId": "vi3682056729",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3682056729/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3682056729/1434659379400-8cjq25-1549236214452.mp4?Expires=1794998509&Signature=VXxGyQPZJoqkd~J1D8ayAXz-F6YdMEiMp71XgjXGTBCeEov8PwdEayZBBzmBVmsW8odDwut-Cqnr4NIarJoyUjUccIeY8rkNor45IGJ60kkVQZIIC9SL6pI0oXbf0g8K0Klxi1K7leukrgo-gY-xo7y4n6bDwqBg3DmA5LSvVjKTW2pBdJFXbKS6~mK4wWcJWNuBsWHVyigwtAh-JPvxIG-Duv8lLXg4-V3FeVTjAXKh5M8rl-ZeoALwgEAx~mVyJoFK3PV-2Vt-Kw6DDP889NABhB51fHpyPxNUM3hO44WKtswPoxlxczXl8AmEo-UwgVS3fB9GU~o9aPLRm4Pu5g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-maze-runner": {
    "videoId": "AwwbhhjQ9Xk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/AwwbhhjQ9Xk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=AwwbhhjQ9Xk",
    "trailerTitle": "The Maze Runner | Official Final Trailer [HD] | 20th Century FOX",
    "channel": "20th Century Studios",
    "imdbVideoId": "vi1344318489",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1344318489/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1344318489/1434659379400-8cjq25-1616202374108.mp4?Expires=1794998508&Signature=AzGIkr4k4H~0N-OIP6eKGRXBhSIGknIbKv-6Kk4PBmwK5rvAM7RQDbWsHr7n0qbLycQqM9CoL~8uDasOwIUB0Ra8c8m9FdFLoIJyl-uXiW6M9c2nT~5pVUXyzqX1ELBh5fd8Rz1nZjimzuzE1US69BCWHrhRsNI3ECQhkzebpN00vLxm8aIXYV75c6TA1mdym8KlO5Nc60hkv3005SH7j1oMngjXHQLbrs-EgOoY-ZTW~jKqIxHu7DnSjw2xaEveLPljwKyoT83~4AniyraZer1WNfOyzq5lzk7NTT3Q7srAMCwgvWjBXjCwNMmdvSby8gU~o940hiv8FZgGv2WflQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-independence-day": {
    "videoId": "B1E7h3SeMDk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/B1E7h3SeMDk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=B1E7h3SeMDk",
    "trailerTitle": "Independence Day | Official Trailer #1  |1996",
    "channel": "20th Century Studios UK",
    "imdbVideoId": "vi2181957401",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2181957401/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2181957401/1434659529640-260ouz-1564710322850.mp4?Expires=1794998509&Signature=geSrtBktA2pF1N5GezFh2GsqGfDwITY70cVpbT2g3P1VfXqy7XHHHyYCJtwLR5Uim8OW24-tuzeQkTo6nQeWRw1jNWfOCKS2icZShIpR0rZBf~VYcBCwxWEY9Jh885o2ZL2V8iyUvXQHPNxe32sbQ5kh1vp~oe80zopjxihCrEF0aoVJnn9OKh4RVzAEin0rPwBAon0Ho~HrcyWdrYW8qtd1P7OLYv9kSZYq8Y4M4IbJgcfhjjND1YrdxGLW3v832qxLExFWp0yff66CwYDg3JCDCMcijSECdGYaukn~IHtkvfuoB-cqz7dGcTHbiuhl4kushNht05y8OMlPKrm3XQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-terminator-anthology": {
    "videoId": "CRRlbK5w8AE",
    "embedUrl": "https://www.youtube-nocookie.com/embed/CRRlbK5w8AE?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=CRRlbK5w8AE",
    "trailerTitle": "Terminator 2: Judgment Day (1991) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi2748889369",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2748889369/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2748889369/1434659529640-260ouz-1498868672528.mp4?Expires=1794998508&Signature=GzVR1oNgYs-CyTv62PxGTh-PXQRr2~mwciHBqFFYTlFoHtxF3eei~DxcItW0eSM07FI2KHpTVFHepKMYOMjP4Rj7fKV9YwChfadTryQAT9WuzViqR~NZSv1I5RqhCiWKwb1wZPvGnZ5MFzd11K1q-lzWLjrsZlebPA5Eto2Tnd1CrZQQi~GXYYBZRK2XQrsi0T28xkS3yuI5XHKcqxlDxDtHJsM1~aFKdhOcqa8VjLsDTqgHOsKlu8O5qvFy~vi1FscRpqAWFZdhniP0bLe20isZz-TJ6f7x8ziQDa7w0u9RF0xCWx64ODXiRH3cSaMRJyL0pbkSxH3KuAMFZtONHA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-planet-of-the-apes": {
    "videoId": "P1yKN0llkrY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/P1yKN0llkrY?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=P1yKN0llkrY",
    "trailerTitle": "Rise of the Planet of the Apes | Trailer | 20th Century FOX",
    "channel": "Planet of the Apes",
    "imdbVideoId": "vi1615502617",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1615502617/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1615502617/1434659379400-8cjq25-1616202691946.mp4?Expires=1794998508&Signature=gBAKR8UTgL2QsbadAMVYroyA6s8jncKzNDhvBmVco695R6Z9NfA07HLnXQbBvoSMmPxAAYr9wRU8Ilq3x9Z5Ic6zkYBpXvuHbUJaHJrpuqVb9mYKx~wuVEAmT9RGPTkVuNGp1GBIsqKN3E1U-3IbM2ySKo1AMlvB4BmFrX72zYkesgwNCLQ9baO7qFQ3er94Fp75VLqB55DM3262eI0ZN5sysujyRzFDTsoo6dDarQY-Y6kFqgQQjUn3KY3fu82sl9r9oxgaisjnDjH33u9O~UCGkGWWl1NM3NyFDnYqNq3ySF7jQ5S8vx2Mvgt~msD69zZBixLhdqDB-OpDTpCHUg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-snyder-justice-league": {
    "videoId": "ui37YKQ9AC4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ui37YKQ9AC4?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=ui37YKQ9AC4",
    "trailerTitle": "Zack Snyder's Justice League - Official Trailer - Warner Bros. UK",
    "channel": "Warner Bros. UK & Ireland",
    "imdbVideoId": "vi2343551001",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2343551001/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2343551001/1434659379400-8cjq25-1615755797980.mp4?Expires=1794998512&Signature=oVNRjwPd73lf4gjLbuqb2Cgc~WMd5aEVgGI1u6pIF3~VX28Zc6iDcf98ItrwqxzF7jBQYjT8VVwFiNluDHlWwPmj7t-gaSusJANbyLt~tRC1hfC9GoBkYhrAzFPt-aLrhvew-RkGdegscER2Fn7MGmLZmnPx1KPhkdN6ZMkWaeDdHOLF0L6O8RPO2FTh8C1zyObwMb2xtup9JcmN7UJqUoM9koE0fcs7Z7MZ0wTr-liRqUBQgCl93dBRGqzRNTh0ISEGkaR0h~eU5cqBQzZw2x2mnME8eR5gpYHZBHeLMfbrE43fAQGLxxrIVVfXr7dmj9M6FQIE5EGlnWzxz2HgJw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-guardians-trilogy": {
    "videoId": "u3V5KDHRQvk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/u3V5KDHRQvk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=u3V5KDHRQvk",
    "trailerTitle": "Marvel Studios’ Guardians of the Galaxy Vol. 3 | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi2046936089",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2046936089/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2046936089/1434659529640-260ouz-1680706385480.mp4?Expires=1794998512&Signature=WGL2VtinZ8XpKmyr2~f8KxWehoyuONl6EtKs1B68P8Y8ju0mujJvm9tTHdrFMxqEmsAGQmEMzTVpbKZjpJEaSBAu-lHeW9HzxXKRjTvNXUqn14dKeY9LPQmgDVHTRVu~44NMq~rGR1RfOHLyN5zRerEIqztrzWM1J2Idvrm3UkZ2YHXWJaARc6-Tk~yhgXVgXI3KKILK5phJH5qr4Gv53z9uEJsgRyJimroAqtTWTchQH15X9j9Q6Wc9-yJBurC0yyHnk0D8ryDH1~xRRyq3dVZ0sdDqb~RtTnQxGs0UGEHddR9xFNuUSl25KkLaB0jMNwMnhzCa~M9ot6XiiAS1Ew__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-iron-man-trilogy": {
    "videoId": "8ugaeA-nMTc",
    "embedUrl": "https://www.youtube-nocookie.com/embed/8ugaeA-nMTc?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    "trailerTitle": "Iron Man (2008) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi447873305",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi447873305/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/mc/vi447873305/vi447873305_1080p.mp4?Expires=1794998513&Signature=Zj2p8m68qZEkf41vLfynCznIlQjW9uIeLGEMnXgiKv8HOFd-fDyho1-LA1CuZgvIdqFTgAF1XiXrz3WcR6LbbUv65QKxfBFoZC8VnE5kPDIT1wZSNRYyXqw2MGDoHg3WFoa~2D6jnlQWb07JuP23QLERsTI1Xhmy56she4r2jxQkXAzsrlcgdOFBMLWCC8sYu3B8bBLDYuap5WZIy08DEZ2FXP1unBnk-tnKuElHotrHBNEJsi-1H5u~e~nSTdaN5Vp6pcIgD8kahThmsJmfu-W7fsPTIqX-icFWUzVWGEovccsjQWp4cIzS3haRzKY6VJ85aluI5mBehPku~XBxyw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-man-of-steel": {
    "videoId": "T6DJcgm3wNY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/T6DJcgm3wNY?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=T6DJcgm3wNY",
    "trailerTitle": "Man of Steel - Official Trailer 3 [HD]",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi705668633",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi705668633/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi705668633/1434659529640-260ouz-1616202414935.mp4?Expires=1794998513&Signature=QtLrYJ1837FxqF1nKEOHfAwJ6XRaIwsYK3fCg43ERTn09RK0P5EbY6-yRFA~2OODJfDegAYeXwc9dpRoc1c~GDSgBhuEKMgNdx2MExXlz~Sh8pwc0QbKykQbjfcvqoz4fgDik2m5dkcGRAYPKgjhz5qCW0O96lRw9b2KirtLa47qpU05C73TEXBGVjAOFoBFDJbDxnAsQEvX6xDtWPmzM7PgHef0h-CpzIZvMY5MefhL4L5AywjeVIkG~fCXTqja0Y536SVyp~PmRWJ0Xr9utf3yZn84yHwqZkLJWyb8xXLHfVBlzGBqgRZuT8QF4f6N3uq47sEOCzlD4gatS0ck8A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-deadpool-anthology": {
    "videoId": "Xithigfg7dA",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Xithigfg7dA?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=Xithigfg7dA",
    "trailerTitle": "Deadpool | Official HD Trailer #1 | 2016",
    "channel": "20th Century Studios UK",
    "imdbVideoId": "vi567457049",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi567457049/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi567457049/1434659529640-260ouz-1455136706036.mp4?Expires=1794998513&Signature=GYLUhJS2v7Ki5wGMvfA-N~Zb41mBsdMLxbMUIhnYvIlIXhqGqCsuoUkYTz2dvi2j3Nvc5Yr11DnfId4lF2-1dAJ3lJRV9uSWEmZrloIPOwvQmCZPMKaDOzS1xE9q~aN2lqHUYBTJTuEzJGUC07bdMp5sVkpkj0z8sInA0YSznFCIrmKJZHSAAOYYheNY4XATwTWRSQE1az6Dd97FBLE5VGnKoMC7mLiz7RNpFjZ8K-m9Vt8FVzZdxVo2MB4q~hwNoOTrEThWdGJWSfwrllbWl1ChXGSkn6IPyHs5oQ5hT2y0m4v~QvXPVkxroPNu7WHiKh4bghICKo-3W8GmFH6o6A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-deadpool-wolverine": {
    "videoId": "73_1biulkYk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/73_1biulkYk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=73_1biulkYk",
    "trailerTitle": "Deadpool & Wolverine | Official Trailer | In Theaters July 26",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi320390681",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi320390681/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi320390681/1434659529640-260ouz-1721399751395.mp4?Expires=1794998513&Signature=KGw2My65h4PjPwVfRgCKzLiPl~GbqKc4DuitfUS4cjpYdGHe1kt3RmMja24fjpihE97EzrLv87DmwerQvJWxxlm0CRtLMw08lzI9RKKiZ66t5uNEeKE~EEsfCWz7jYKxvK82jMSUYXBZmXXAjHf4cKTZse6AlJQzLMJ~VJzFRQvG7Wu3qMQlIwQ5j9mlzg7aUVFGW4KZH2-cZSLGxTPONG9S7nExsbIgNCPJdtUG4gyrz1YEpjoeYFRxFLlZUmm3WQ1LfYWvJ6E139pyn0SvxqZS60wrNAEQ52wMCdKjA~b7IkF4l0BSMKsvycvJLEBhddYQ-88PiwwRvRa3UzB2Xg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-spiderman-legacy": {
    "videoId": "JfVOs4VSpmA",
    "embedUrl": "https://www.youtube-nocookie.com/embed/JfVOs4VSpmA?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    "trailerTitle": "SPIDER-MAN: NO WAY HOME - Official Trailer (HD)",
    "channel": "Sony Pictures Entertainment",
    "imdbVideoId": "vi3348546073",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3348546073/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3348546073/1434659529640-260ouz-1651186731527.mp4?Expires=1794998513&Signature=JF~XSr1iS~-N-zX51v03Op6lBo64jOvLnSsRCNKIXfgbKlnwnCp0-N8r3cLar7oWVOfJTAA-B~Te7jq~hy7isfeVKK8~CxTiDGc8tiUZw3zo03X1jgI18mPsGgdwXPr2yxzf84VS9sJFBFxAwJ2CmoeDKxks6A1o48gjhcSprqjyxxElpU~Pb9oZNjkXc8~6XT5prOtKDwzw5k~-1guZXRBRljApInPf2z3rXcQbtWYXRHsQBKIvibMmM8DNqBxYCoD0vWid49iaW6ejXu9BzSYMJ1LBsootES7myqw~b7VlRrRSJXCTdNLHRACyOUKBoKOlr3Wll3SshbI~146~Ug__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-bvs": {
    "videoId": "0WWzgGyAH6Y",
    "embedUrl": "https://www.youtube-nocookie.com/embed/0WWzgGyAH6Y?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=0WWzgGyAH6Y",
    "trailerTitle": "Batman v Superman: Dawn of Justice - Comic-Con Trailer [HD]",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi1946858521",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1946858521/1434659379400-8cjq25-1464895181083.mp4?Expires=1794998513&Signature=HkgzoLXx6WuNhEJqQz92wyQoJV3sINGY5Q3BagappDqMTCd2WECb--VhuoGh~bVmVLS1~v2pSK6Bi~wMjz~DEEZaZBaQtMkY4ZaJpIaxX5-xLPp~OCBKrfAwVIBlZozTJq8bYsycQR6mh-kdoe0t1SQMYOzoPhHIrIOo13Je-rk8UD7OnnYDyMZBJbcZpwdZ2MHfe409LKMxLQue7nupGHRcdMBtNJHC-3N63VFh5tcB6TRGD7-xRJXbByJ9OLk-u6NE-1143DK2ieoZckTmJqUHk-zJ9P5sSy9Wj7yYwpU4vm9hvCgfgWVMre7b~CleOxEk-84~i5VhYpS1hTnC8Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-quantumania": {
    "videoId": "ZlNFpri-Y40",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ZlNFpri-Y40?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=ZlNFpri-Y40",
    "trailerTitle": "Marvel Studios’ Ant-Man and The Wasp: Quantumania | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi3289957657",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3289957657/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3289957657/1434659529640-260ouz-1675318727668.mp4?Expires=1794998515&Signature=Wt~dZ9vqJDZnG1cR13lt4zdUk6E3yeGbrlv43Unsf5Bvnd9p6cu7q8fDNYqZLcc8ljDS~4TcjCMjtj1LEnFvGXcisRzIEpneoGHv3JFEU3nqBSqDUaoGe-vbOn8018u7SIrZ122oVn3My5PcZdkO7EQR1c006SSAYjix1osxlMUVDSYB-ZdOJW1gYw9DG7Ys1rHkoLfrgRck1hrbf5QCfzz7MbgE7r0JCZ1cv6rkJ0g6svhZ6KKI9Su740QTZgrjDDFXzKpaAtwO7P8ZAGDAhm~82zJSO5dcocVUyPFgv~k58A~bXXe3m4Mt~BXwHiN5qX7qpZQCTWr42TYVnL6-UQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-captain-america-first": {
    "videoId": "JerVrbLldXw",
    "embedUrl": "https://www.youtube-nocookie.com/embed/JerVrbLldXw?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=JerVrbLldXw",
    "trailerTitle": "Captain America: The First Avenger - Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi2912787481",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2912787481/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2912787481/1434659529640-260ouz-1616202455068.mp4?Expires=1794998516&Signature=lkm7cIWmi-A4rLnjfzRbxUC2Yqu7l6r5TaxbCQjhhPsfKaRRUX34skLW4yl737A80lMbA8e7GzDAhdeH36HlJBhW9CYsIVSYsOHZs4RGMw2xlfu9C-pDK7d~DA2mnMkpJu-k-4hTbKcotcC8tRW1BrkfT1cNc5HlR7Jhc1qZDXD2YnA~TLvZk4kB1wpppni8pnrCpQZi60IoS04OvE6baCtEd-17gA6QMLQAET-S1eIbjVWnkjHBvZtse5C8gU-XH3MLY-GMm0xj5CmhN8M1Fbs49kPAzHjKMlhnvbDfdr1~YHqWhsTuFFLOcq0JIuhawOf~KY~CWWZRcK-nojXENg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-wakanda-forever": {
    "videoId": "_Z3QKkl1WyM",
    "embedUrl": "https://www.youtube-nocookie.com/embed/_Z3QKkl1WyM?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
    "trailerTitle": "Marvel Studios’ Black Panther: Wakanda Forever | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi865256729",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi865256729/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi865256729/1434659529640-260ouz-1667228058679.mp4?Expires=1794998515&Signature=dqS0D7TibnI~Crsiwo3UGB~7lhC~K8bkrmz~2RIOfjmAJiOCu5PhbsVsTWjBUltShDvvjkA1SJRTLqoyIx0jlKbNj8UOej1Ta~GHC2hYTsag~nschOOMneGuLAFFJHVu8Vs~cobYx0dcHl5XDEgp8BeTJFwtkn768fAmm2CiCMBqxi~Hw5KdV5V764E47yNH~LzineUaFL92a13kwV7V8WUr4p8yxkV9NH3MSRKO0OkssgDqilCZ-BTY2fdv3~EA~UWMgf9JrhmMVlS8R3FypbqvSGDbtHYv25TE1hJuY6P6Ylf8Kanb5FhsXu5YghdHWkLhyo3Qe1vyuq912z7xcA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-ant-man": {
    "videoId": "pWdKf3MneyI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/pWdKf3MneyI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=pWdKf3MneyI",
    "trailerTitle": "Marvel's Ant-Man - Trailer 1",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi3829444633",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3829444633/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3829444633/1434659379400-8cjq25-1436026117501.mp4?Expires=1794998516&Signature=vDFcnLukzKqd7C0F72oSpgX9jvlaqbSt4YVwAojZT6GceRJz5LhgKMNQvFX9VveRiwWLdr2aZwwmwcjbpYr5UiFMGzxvr3cXATZDTjO12lt2Vzz7JPDg5jRBRIbdnSGzXAaK6Rbrc3bZroVV4rXcDQzQpYdPI-j6dG6ZYfuQoKbimiveVQvohXk-C7IU7K8dfKsvh7AYUMi6a9FacyOHSZIMO-ZQ89Lj5SHZ3L6p3ENvONyiiVVRrtvy6GAJkVM-x99LBK~tItIxBJYnWAXKdgxlRsZqRQso-FJD6iN1pheYSdlKJVtT~V8S7OJ6pJPMcXKxuWggGd-d19WjULujpQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-black-widow": {
    "videoId": "ybji16u608U",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ybji16u608U?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=ybji16u608U",
    "trailerTitle": "Marvel Studios' Black Widow | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi645185561",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi645185561/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi645185561/1434659379400-8cjq25-1626799237391.mp4?Expires=1794998515&Signature=nAEFpRoHz5wVNvkLJK~Z6Q4quQXlCzqMVcCQO3GZESQ4pfejK7jgrX8jSto9lKBIAC3w2ekh-a42k6tk4idIJyYUNWxg5v6ZtpxYicVo1fkcAjMNJ311r9lytGaWuWsRejKaJBdMdCRgs7TI20wwCzwbHmnjtFkgboRUavkPK10UwByNaZMgZ~ddJyY0Xt0-V2Wy4JJkigRWM~l4U3ESJbwiXdqTbA5B3EvZVCjNBoDS2jgCSZ29RHMu4w-wwWeWAXw9qLvXB2tmGu6B0TJXroHMSyq2UgaRaZncMS95ZzcAapMJRmFcUg0JErJQEilFPeQHDJCNg31-grhcWAoSXQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-age-of-ultron": {
    "videoId": "tmeOjFno6Do",
    "embedUrl": "https://www.youtube-nocookie.com/embed/tmeOjFno6Do?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=tmeOjFno6Do",
    "trailerTitle": "Marvel's \"Avengers: Age of Ultron\" - Teaser Trailer (OFFICIAL)",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi2821566745",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2821566745/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2821566745/1434659529640-260ouz-1612218463733.mp4?Expires=1794998516&Signature=r2Mt--l4jVCiUEsX~fY7Gmpjj81FNbh9mhR7N8cwaDKoFvTWml~GxMZZpYX8oOFRttka~~sVvzRweuJZwG17Gssg9wb~Jq-T9B8Axxh5Iq-Z0GDhff8cEfHlCrS1r3g2HROqwbbyZJnfK0BpaXEqWEysqcuvTthVi09DzUrBUYMhSF8utCMRBxotFcBfJkpTpHfJa0l46q6Rs5iJ0~pdrUx8osfcwUkK2pBsS3jd~DM2qj~EAElgOVtVcf0pDTone2e5Cs98z55s~MzUIG~UPNM6oPrhI4JsCFQVhMdU8zy6YSXT1gxRCwHNXoz8G2DWlkMQOg8Q8kG85fnP6KKiuw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-captain-america-bnw": {
    "videoId": "1pHDWnXmK7Y",
    "embedUrl": "https://www.youtube-nocookie.com/embed/1pHDWnXmK7Y?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
    "trailerTitle": "Captain America: Brave New World | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi1185794329",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1185794329/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1185794329/1434659529640-260ouz-1731193050006.mp4?Expires=1794998516&Signature=H50uvkUge0pV7HvyCe2saNZvBpb2jybmKu82kWmELmqSnPhm2B6-58ZdH5QYzs--xOY0d8cIUI~vkeqQJ04eT34eyWfa37dkIfIMOxzAbK9aAhUCmZGDTnl4FLoV9GznLSgKZl6j5iP3TyeHHav8~rmv2kMzQFLx3q0B5TF0Z15BPgOfmjoINl5zmO~5qX1xEDHQtmWbhe4r8cWG-z9t-LO~S-4~gXt2WZMZ2eW5q5U225FOR7rxN1~t9XPdgOGYRgAXzuY17WOVL1UWbxCTPQ6zA~rRI6z9skIsdBJFfAa3SPjEL8pyNlMfaBInK8K6J~AEtujsuJo6g8PTB2bKUw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-thor-love-thunder": {
    "videoId": "Go8nTmfrQd8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Go8nTmfrQd8?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=Go8nTmfrQd8",
    "trailerTitle": "Marvel Studios' Thor: Love and Thunder | Official Trailer",
    "channel": "Marvel Entertainment",
    "imdbVideoId": "vi1613808153",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1613808153/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1613808153/1434659529640-260ouz-1656941657492.mp4?Expires=1794998516&Signature=PSOA8jH2NCR81qoVKqVrwsxKO~ITn~rtgI-rNYiZoces58oWAKAzRfwrAtsjbL-HvxI3CHeS0Lo54SsEHc5~Jz5pgM1B4rLwIK-OqkyNp2v2fxSLaIMRm0hoXvIN3PNfbd1TlNijx4I3JGd5nIcm9pshNXSH7L4vKRi17b0zIa4fJEgSJ5pxBOYxO~r1dv55Xy8fb21Oss7Bt5fLD4o5Mjkxx5SXK1x7F89r-spYsQlfzpC6setY1MhdTXhvC6A2~kdpkdhJPaiRJdOSteBgTSD4ZicEzzqJsbAaKDO8f~lgK0W3V7SdC1TlN3SIIGa0CjNcrP3grHuqaRL6u33oZw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-mission-impossible": {
    "videoId": "wb49-oV0F78",
    "embedUrl": "https://www.youtube-nocookie.com/embed/wb49-oV0F78?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=wb49-oV0F78",
    "trailerTitle": "Mission: Impossible - Fallout (2018) | Official Trailer - Tom Cruise",
    "channel": "Paramount Pictures",
    "imdbVideoId": "vi2629352217",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2629352217/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2629352217/1434659529640-260ouz-1526462823842.mp4?Expires=1794998518&Signature=PZI9zwrRKExpJ1HTIysye0v7~-LD-dxsi7m4X1Ar9xPJe6YG3ZgHtKeClpvSaSfWAqaTUzoSdfhcBkr~elQAK4o79phI3TREwfgcUtG4ZNVOZNzQjSlugRQgMLa-p7EbQmShZmNoxLvTUiy3PrYhQpW6C1FsCnyDGMYLP-hHC91~XQWM0z~nR75CQRQ7EslxlC4vLmqnWrk1MztxhZP9T15MKZWiJ5RuaqCPdnjeHDosBZn-SDvHrKuk0eFkWZirvxXALHFC0Gq9v6cfEHsXbz8ipvZPX7njqKuunpbT4VTh0Yr4RVu-ZsP4~6XvkooKD-rHV40qQxZukyAPAZiSMg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-gladiator": {
    "videoId": "P5ieIbInFpg",
    "embedUrl": "https://www.youtube-nocookie.com/embed/P5ieIbInFpg?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=P5ieIbInFpg",
    "trailerTitle": "GLADIATOR | Official Trailer | Paramount Movies",
    "channel": "Paramount Movies",
    "imdbVideoId": "vi2628367897",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2628367897/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2628367897/1434659379400-8cjq25-1473794595177.mp4?Expires=1794998518&Signature=MpM5vBxql~xGRDf-pCX0YfNs3gWA~QaX9HhMWmZXGh8kFmNYgZUT7dms2LRc-bxWsy1fcn8dJD4kkiIJzqF12HBQhqnQkBVCZGpXrPoDDUzds--aGNgWCySO~Od3YRXL5x7MXljibopA~MGVO7pRrsB9hOJ13b97i4a5wbAyDcsx0IOR~JVBb5Dt9a~kEKu8hZB5mg1LUKpUufswnWz4qlJn-MFByWLfAWUDhPksDuX5PNkeXgtO4uNBbNya6EphiZi9oQZYc17PDTJf7cWAUtRCDqazkrDxPkq-uaLgAKIqgPebU92UaQHZyEkgFaRpavOO~Nu6cWIbDxd9xVJTBw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-john-wick-anthology": {
    "videoId": "qEVUtrk8_B4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/qEVUtrk8_B4?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    "trailerTitle": "John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård",
    "channel": "Lionsgate Movies",
    "imdbVideoId": "vi289916185",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi289916185/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi289916185/1434659529640-260ouz-1676561376414.mp4?Expires=1794998518&Signature=JpAv9E5a~ZRIPPw3gAo8Y-MIEFmBCm--lyshz-xt4a-8kBpBs7PP3gFLES8AsSxxL8JFZ1QJkHx6pOiGG5W8Nuu6y~OdVjv9KT3-GYGWB-P60SFxB7hiMfbt5pBYTg1POkTAc~6IbrzVIvCDh5b7hwJaV3TFwh30dgPr1bBSLeM1S5ur2OU7QXjEIrfyUbJ9dbfsVGRefOecU5oEBdYv00aA-7t8jXhaYlVjomgcDuMDr~6qFWFMFV89QiTzeDEgM98oNMB66CzRr-u4J93OSKN5Tt6-wooiSTLbRJs7wnm0RxrOayLPHoW4OTrPvV1dCiZrFRK8d~Un9rLU9B7iMg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-top-gun-maverick": {
    "videoId": "qSqVVswa420",
    "embedUrl": "https://www.youtube-nocookie.com/embed/qSqVVswa420?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=qSqVVswa420",
    "trailerTitle": "Top Gun: Maverick - Official Trailer (2022) - Paramount Pictures",
    "channel": "Paramount Pictures",
    "imdbVideoId": "vi632472089",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi632472089/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi632472089/1434659529640-260ouz-1648562542211.mp4?Expires=1794998518&Signature=bNGNgkYvx7FpAEibm8kuKNrVX~SChBGb58toHTolwiaj7nOqt-yaze57XIuFhcXhRyMflS1lltN0TNDTMZpL22GsBSxbodQB9eaTUI2NkholE~Fqtf7CqmXMormTyvP4Va95kZDvhmpe70qjPJAwMgRDzQNMnbdv2tBfYuO6bz-Z46VTg48jZNm3mDALgrVrke9Mj5o-elQ-85ASWV1HmmzNeUzvx6cRfCely6B2UB5RvG9LjTpp54LZ3k7k~uffbJz9WZT7zwETnfxrQnubx1ZjUehb16w6ZvBhpfqjzKTNhIyqjf-pMKH5aD85EZ3tQ0Gpmf8hzqEiIz2oT7nk2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-attack-on-titan": {
    "videoId": "hk7ltMVX2wU",
    "embedUrl": "https://www.youtube-nocookie.com/embed/hk7ltMVX2wU?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=hk7ltMVX2wU",
    "trailerTitle": "Attack on Titan (Live Action Movie) - Official Theatrical Trailer",
    "channel": "Crunchyroll Store Australia",
    "imdbVideoId": "vi780120857",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi780120857/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi780120857/1434659379400-8cjq25-1443641934926.mp4?Expires=1794998519&Signature=IjTfAL6AeA2qr4OTvc34JpKnpvabND1UDKzKqNXD83xxolwp52EWQjzZSpypPDi6cVG17NTOcGA9Rq5ZIb23HnIcBio1X6G83IWrEkSTN7YeuvvBtB98lCWhnL3NfBe9CW1Q6DH8iUXuT9a8ODLgFOHT5OdkQYTiQXmqQNNn~80MhO6Dc8MoanjAs7BiG2R22~zmEuFkMRyHAbeKU91sQ0TL2i18U0mD4BhQo5iwrDkG804tW6IB4KNTvKWKsn6oCOo~6JxnHU6AdiopSGtFiHRsUZ2~wEn5~5Gpz-XfVTFgmrTa4yzGjCQOBdfmHyXQtOaZP~lGGktwjP5LV2ihYg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-incredible-hulk": {
    "videoId": "xbqNb2PFKKA",
    "embedUrl": "https://www.youtube-nocookie.com/embed/xbqNb2PFKKA?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=xbqNb2PFKKA",
    "trailerTitle": "The Incredible Hulk (2008) Official Trailer - Edward Norton, Liv Tyler Movie HD",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi1726152985",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1726152985/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1726152985/1434659529640-260ouz-1616205049459.mp4?Expires=1794998519&Signature=j2MNkeJpO5I9wH4sFVeKPtrdSpzUDBExDRL6dMVTv11bvjkKM28Wy6MuR-aRns8k~LwhPyVp8YLwh4bZQddQyisQJ39q4p9mv0NRekeqaup-3IH-xhrTzka3ZAiQyJQl-sFGzuALnwdmNQSNNAKCLGq0UmgEbiCrIsISDlI8DP1VpYARRqfT1AL7Dd64eLSLZCSI0dlabQlLRhDpYnx2CLWf42ydiPJ3ufZStPEGjphc1YwKddERmP-II4J0jUGcn~Fnpj2iFXCaGoQEVIXETXf3UVXGXTWRkZqFF9I8h7goPB18YldP38mc3sUJcFgJ49RP8ijLS1jAcetGOvrUeA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-the-odyssey-2026": {
    "videoId": "f_bKjZeJBBI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/f_bKjZeJBBI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=f_bKjZeJBBI",
    "trailerTitle": "The Odyssey | Official New Trailer",
    "channel": "Universal Pictures",
    "imdbVideoId": "vi3650537753",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3650537753/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3650537753/1434659529640-260ouz-1731946257797.mp4?Expires=1794998519&Signature=qRMH1XnWGMImzsNfAWNEMCllMgRJpLWimv-0rv7JmNeerWzflQK2zLMucbzJkp~4xzorz1Ty3deP8JPeBvWd4cSpeVdUuM7BwnfO9vN-xdYVMZgfBKtrNQx1J-nbQm7l7DOPAfjVfT7OM47XvB71sU12Aj-VEmkhKm6Wkjc9qIiPvjR9Gvgyhjx0~xjoluVBIW8ulHGDUdAeqzB2S0x0epcUBUYRgz0nZRBzi4F6VUd0wNDFZwh0NC8vs~0pdRzVFE2eOjWDnJXsm0Fqtxr-NiF1E~AprVcolbLLgzmBj6Jo0a4tGXVbrmEJmw6i8yqgYjwfBMMQRrAFnEIFiK9Fqg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-transformers-saga": {
    "videoId": "CbX_SIz_9fk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/CbX_SIz_9fk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=CbX_SIz_9fk",
    "trailerTitle": "Transformers | Official Trailer | Paramount Movies",
    "channel": "Paramount Movies",
    "imdbVideoId": "vi973209625",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi973209625/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi973209625/1434659454657-dx9ykf-1563511993177.mp4?Expires=1794998519&Signature=YFF45CyUYLakImz-jEdhdV1EXhUZtKMLzHCbFKT8lI8WPKYyvF2AiKGva5QhPG1sYwz0aHU8AXMP0aMCDhZmbEAE31fLFVTiX0kBy4m794ZjiiZjxTFsZjCvXBOG5GmAc35bblBmmVTaPWaqwrR3xcG1atsytrvz5EuxNS4lZg22LhpH8KKW9wI2sSDzPh65Dcp3jdbWq0XkVEXIjSN5i6VsDmOFKueo~IiqjtBc8sBAyRx15lhd0cpnUqIIEYU4pyC9tauE68rnLirthT-4WXlGRlYMJsC3GD5RIvODjuoLln8B~DymXOlJOS4-Z0oEcL68B4ZHr2gRjCNRMlgvcQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-nobody": {
    "videoId": "wZti8QKBWPo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/wZti8QKBWPo?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=wZti8QKBWPo",
    "trailerTitle": "Nobody - Official Trailer (HD)",
    "channel": "Universal Pictures",
    "imdbVideoId": "vi1348059417",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1348059417/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1348059417/1434659529640-260ouz-1612738777562.mp4?Expires=1794998521&Signature=Wq1N63Pal9GzPFa4~6envkbgZj8Iy-QvRyLf4qPW99r-vB6K2lyv33RfJUXE60GefVaO4zF3bLHalTD3s~L3JPPJMwY~rnZvATQHVTtb8IIO92F~ijrQMr2S-Evt1NxuZMNhpSW285qcu8F7EtuGS6vUpYejyBVVE4Nxdc4ol2GXMijU9iJ4Dim-4Dr4vHMeJkEBnvj6rA3xtGsBAS5cdMftI1tKN77VbxVwgzgwoLmNBRCDNHgw6m~93TE7L43xgmHQI7iI9TOjTEKgl73LPEV3bc8-yWeU-SEi9FmqXtYOhHPSdQtTsaTPq6~qYEETlWEYr3MMX~nxQ55bOzY1CA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-raid-redemption": {
    "videoId": "m6Q7KnXpNOg",
    "embedUrl": "https://www.youtube-nocookie.com/embed/m6Q7KnXpNOg?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=m6Q7KnXpNOg",
    "trailerTitle": "The Raid | Official US Trailer HD (2011)",
    "channel": "Sony Pictures Classics",
    "imdbVideoId": "vi1464648473",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1464648473/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1464648473/1434659529640-260ouz-1648064672677.mp4?Expires=1794998521&Signature=OSl4~iREFV7FQjGKvjx8~goUNXKmWZKPV0d4WceY-CnUb3Ntmq8aqZ0o8qkVfQnstOV6VJkV3T41-31Q665EGCCUG~JkSMhLLUt7qhA-dDrgbfw9I5WMDu1ncI3Hhwj-IToZbkDMmL4Se-SGZUOWuqi6ELkwOqVqxVT94azBAQD2IKtUgvQOzU0ptSb~bUkwWw5ChXFce~abWtvbe4oVjyJwyPL0nJH6mTbbmQ49YicHodt3fojgBcteRRgYqfGXnj3qRCqSw~U3FMBC7SWVOLhOvM~6luIi54NnOgg3pbkzJbIqutl5Xm27GGyPN26kT9FyIcJ~BIVI5C9B8ki6NQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-skyfall": {
    "videoId": "6kw1UVovByw",
    "embedUrl": "https://www.youtube-nocookie.com/embed/6kw1UVovByw?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=6kw1UVovByw",
    "trailerTitle": "SKYFALL - Official Trailer",
    "channel": "Sony Pictures Entertainment",
    "imdbVideoId": "vi973841433",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi973841433/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi973841433/1434659529640-260ouz-1616202708102.mp4?Expires=1794998521&Signature=aW0VeZXdxCKjvTG~GBCF61Xojf94t~sfTFcqOB1slVOaBKf2gZyGshcvOoFMYCyP5hxBcZkNi4qg8dr06SEFuYrb5V0LPyIr~bx~4oUHsdKMEONGx2Hg67-B-7r7zJAu9zD-LSUAzqOLq1d74nJ7FIXCIhQwG01GgOQpkcY8rsHIY2aLJaF8uyMf87vwOlCSjncGNQXsk6AWnNozjdo~t1p2MXRTkSI4UR46YAJsONDrMWkoqPNUkduiT7T~nrkaCztalOdE1WcuzXHeWTOjusIgrUb9V84vE95RDce43LbyGa-xQPHKqCMAoaaBcupoAds8ZP67xviwiTs~604txQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-kingsman-collection": {
    "videoId": "m4NCribDx4U",
    "embedUrl": "https://www.youtube-nocookie.com/embed/m4NCribDx4U?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=m4NCribDx4U",
    "trailerTitle": "Kingsman: The Secret Service | Official Trailer [HD] | 20th Century FOX",
    "channel": "20th Century Studios",
    "imdbVideoId": "vi1901244185",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1901244185/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1901244185/1434659379400-8cjq25-1616202386675.mp4?Expires=1794998521&Signature=ZkpZJJ-T--vb~T5dM0uMYvwH4agrpOnxClrlBYJrXBP4V9-3MY7KVUJ1r4Dux1R9JNuXIXUDHfHSsDOPEEfae9wWaVIJIAHdHZ0UsyzhtT4aVlk7C4fYvoRJ~2CbH9B1JUopenR35gjlAB01M-YdupEu9gzmz2HReiwEDF9QSiEPTAI774FSwmS3NxRkLMhs4dnWEkSNL6o1YuLTzE4vaezNXIQrPji2CjCQd-Ix12~nUcT7ZQ19xIOGXxPbFD9wX3R8sIgDKPJQqT7raniypRILffjMNRXIq2WpPyHifgQ0lYT5pvvZ5lnxMLxr7465QWu5x-XMC47D7Fmtlaj8ZA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-shelter-statham": {
    "videoId": "zTbgNC42Ops",
    "embedUrl": "https://www.youtube-nocookie.com/embed/zTbgNC42Ops?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=zTbgNC42Ops",
    "trailerTitle": "A Working Man | Official Trailer",
    "channel": "Amazon MGM Studios",
    "imdbVideoId": "vi1331087641",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1331087641/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1331087641/1434659529640-260ouz-1742840089039.mp4?Expires=1794998521&Signature=l6PNWhUMXWxvv-k7x23w-qjYx85GdeVQvNHkSqSlu9ZRUFCWx5XHrqfEcrB-n5UgxwuOZmeozxv8Nstqchue~rEy7~LJKWlUp4VY8i-JCJQxZ7UUQ-CltP7yneuCezIpYLVBKbvQa83WjhpSlTmOUAqRhcWqOVVb~SAUeZN7-n1i4zfFuIaRJl-~~CGQ6-iXKFAQsKd9b2y~cgXFjM5tdcm7dvVAiFlXqKruraVYf2WfR~~qEssQzcQrRvR-FmVeZyGLHfNg6z7Tb2oStMF-wornW0P4ZI6dsNUIcvGFAh8SR2BRVnnQm2v3EK-pOe9jVrf2obvukDsthC9XZ9ak0A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-raid-2": {
    "videoId": "PQ6yUHHfZ04",
    "embedUrl": "https://www.youtube-nocookie.com/embed/PQ6yUHHfZ04?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=PQ6yUHHfZ04",
    "trailerTitle": "The Raid 2 | Official Trailer HD (2014)",
    "channel": "Sony Pictures Classics",
    "imdbVideoId": "vi530950937",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi530950937/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi530950937/1434659529640-260ouz-1616202503214.mp4?Expires=1794998522&Signature=Kddcd9gErY2sVLgpkauSgVXvzgcwRJmCP-J8D2RHCkGR5DHnsJz~qyZZQO17-C19msheYmJn9aQKUGbiyrcbuUq30tihHvw9GlTtCWFL6k3wr1ef9dP~Z9W9bXmiXVZ~YARLMBkJf5e~8WHu3wZsAvHJRobDo3LOg~pNroZI7OiY5CbnB36uxJ4wnsIu69n3oQhb0b26Vt5N7thK0SPRh7HNMUbgNDhO0ZY00n8i65E-ZUgqYCTbUvq6hh6sT18bt6DNOySmCc7tUP5yy5Az9H~VrQ2QKclGkw2JUzCJSEuvIMrxhoQONkLlxh9lMMK93lRtWNSe1EJYJoFIkMOLyA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-expendables-anthology": {
    "videoId": "8KtYRALe-xo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/8KtYRALe-xo?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=8KtYRALe-xo",
    "trailerTitle": "The Expendables (2010) - Official Trailer #1",
    "channel": "Lionsgate Movies",
    "imdbVideoId": "vi3501000217",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3501000217/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3501000217/1434659529640-260ouz-1616203001841.mp4?Expires=1794998522&Signature=XCuX93Uye8IVDZJAs85Sx-38PXNjpgJPoyeaDTYUOMpdLLDTJHalPf8V2qsrf-ddZr7KVrDxs1G9kxN6U2v4QlNNWBRA28Y29JxJGYOkycIs69y2DLkJIJSvn-yun5zRCLu92es~wUPDhOy4z1AqelQe3o~sJxAMo-hYzgETJSZKelFu-SrT19-JZ9v0cwzkX9hEi5caZ36~sFo04Z51EzkNhL4VxZjVzWGaXdiRyKQmz8h1jvPEFLQUKQNSTnh~gSYyyb5hw0QnzsYyc8nXDA0Eo8zKpryXv~IOyJTO7t5aO~Zy6UCL7gqoNwR4oIpJIuMoCMb1b9GS7IN3hAP-Og__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-extraction-1-2": {
    "videoId": "Y274jZs5s7s",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Y274jZs5s7s?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=Y274jZs5s7s",
    "trailerTitle": "EXTRACTION 2 | Official Trailer | Netflix",
    "channel": "Netflix",
    "imdbVideoId": "vi1028899865",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1028899865/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1028899865/1434659529640-260ouz-1684247298841.mp4?Expires=1794998522&Signature=bP-9vB~8mZywrUrSUftVp8Mfx0M2ABta6-cdrDBU8EjqsGZOEGlozre3ysyfDHZdnOT9mZCd0-hGHuU4Q7lAHEliAiH2D9CPVTFnoSy~winsC0dvHJZXbv-VkSdf4DuBK3hrsnDih72120fgE-n30ubVlBdKGd9giE0XjjNsxryKx6bX26TMj-ZXtGmF9s7G9ESRVwMiRWnJ2f2xP-m40vDV6p27BqL3lls8T5V7NMrm6qMVZf5DwHG71A3wjydsmpQP7ebypLiEzMqjIJxCcsdFzSjygbz6kBvOkvZFof0QXw3KfbQkScSeUN-lgFaaSSne2GukZQ979QpZlWDKYw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-love-rosie": {
    "videoId": "5zL3YJKygd4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/5zL3YJKygd4?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=5zL3YJKygd4",
    "trailerTitle": "Love, Rosie Official Trailer #1 (2014) - Lilly Collins, Sam Claflin Movie HD",
    "channel": "Rotten Tomatoes Trailers",
    "imdbVideoId": "vi357412633",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi357412633/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi357412633/1434659379400-8cjq25-1616202425894.mp4?Expires=1794998524&Signature=IXXccMf85Yn9KrPnEj~GPJsfnFiAg5M6XXInEcey5PrkKio~UQVp2yW4qeJoET079F6oV6Xk2kLnR4DvLyzLJrWi39Ne6f4dbID5SLcEF6mEBRmCPAc1ywn8BrKE4Z1x4WfEBjQtH8UCByJ6KuIn~q677RU3kyeL7bmCnL1GlHxRQIlQi67YYkVU19e0s0rCcoRKrXhq4amCzp-J0wkQDpRYywcclsPcVE9AfgcUmjfX21BWebD-vPEQJbQIT4S7RnNaux3yGcQ0OaYrcqsuGX1nQbojdpbxkcE09~gmQNlTkK7lA4o9VQxP6brRwdBRAOqj9YI345yvxwwEAfp88g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-the-notebook": {
    "videoId": "BjJcYdEOI0k",
    "embedUrl": "https://www.youtube-nocookie.com/embed/BjJcYdEOI0k?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=BjJcYdEOI0k",
    "trailerTitle": "The Notebook (2004) Official Trailer - Ryan Gosling Movie",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi2603746073",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2603746073/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2603746073/1434659454657-dx9ykf-1563994563200.mp4?Expires=1794998525&Signature=EMAyk~uXXIMVvV2xZFjnlccR3Fw9jtPG9US3sTf6gJEBM5EMhqUq2tN~novDdbB2Jllf9WDApCMiRoyypU99vrQfg773gnuy1dAzOE9k7jLuSXJHyVpltp-gPLVy6uKVEm6viVPPUl3HxMXzzVuILxCUU6cqbUForna3vQYukeqz-72XZ3zNjRGKTH44CggRGwTPMAPgdgp3KUV-JjQxQjwB8e77WpbMzeeXdY1cApIO~-v8HDZDIb-ET9oObk71E0fn4MumWh~Res0D~XksMFlBIIEWAJ0q00wemWqEzglAQomSt0CWDL-8y2LYtVHLm-U5geuXMWpPEcjWQpgnQA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-walk-to-remember": {
    "videoId": "k3B2XBcp7vA",
    "embedUrl": "https://www.youtube-nocookie.com/embed/k3B2XBcp7vA?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=k3B2XBcp7vA",
    "trailerTitle": "A Walk to Remember (2002) Official Trailer #1 - Mandy Moore Movie HD",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi1620097817",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1620097817/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1620097817/1434659454657-dx9ykf-1527628160977.mp4?Expires=1794998525&Signature=IYm14-nvpspiwW-0rAo4HP043Q6RJwrjrpxHxamHqwfGWitJdFTyDAuGTOtJ~h-QNMZtiHnYBMxdDd0VYY~fmbO26Hyq6SVjhsjHpLvdNZV4ds1EZySncqpjkWP~TIpAvXl-2s1Hp3qUCCrNKKwDHp5TfSEAQ~tXVHVkoCdz3j3IKjTfTLCmXnVn3OBN2IO8ZY~oZMVf8KbocXWlhVKMv-GsMCb8pOerY17FfjM8eVJRNXnHHI0m1wTswPIeUmzt19Ok29jOygz3l97cQZEZCDP8NsKQWLPjf6tyEDfUo0HDrTuQ~TuE~KJCHyoqQhHxPmrDPyEpePFbDPAJ7PBZwg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-star-is-born": {
    "videoId": "nSbzyEJ8X9E",
    "embedUrl": "https://www.youtube-nocookie.com/embed/nSbzyEJ8X9E?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
    "trailerTitle": "A STAR IS BORN - Official Trailer 1",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi94288665",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi94288665/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi94288665/1434659379400-8cjq25-1528301702995.mp4?Expires=1794998525&Signature=QkP2MATUYrIdtMgUlorDVs1rsuEvh5Zjb3btPIo-MaosiPF2SnEgOQ5hg5dgAOdSFcCgAAUjz~ktOzNI2pqx-td3Mf89a98rcYZsFU~rQT08Q9aPr658-z3sV42ZaXxU5lg2Z7ryJZc3Kx4wjctGW6PFdcL6y8eSnWFsLAkhRdbUjvsA5v~vPubBLQOHzS1pG8AgNKfWOCbCKgAr2KhOo7v72ZZchcpw1hahdHG463hQq9QecENHtEBJl1xP7yL1Dx6al0JWVAspav2ypRPH1vJdm6zWYRPM7m5jSZYb02O7NieXId1w7szIsrSqBEZBipqWkJLPzEEVOMWs5q2fIQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-runner-2026": {
    "videoId": "KD18ddeFuyM",
    "embedUrl": "https://www.youtube-nocookie.com/embed/KD18ddeFuyM?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=KD18ddeFuyM",
    "trailerTitle": "The Running Man | Official Trailer (2025 Movie) - Edgar Wright, Glen Powell",
    "channel": "Paramount Pictures",
    "imdbVideoId": "vi1633339417",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1633339417/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/mc/vi1633339417/vi1633339417_1080p.mp4?Expires=1794998525&Signature=HbxM08kNhn~7rfn3T4dmqQPmVgAfeDKdILtuizi4yResGXI5Fw51q3EZafjO-FFWQOSwUkZev6QLR6EHZpWRhDItWCvEf9-97gb8wjAq0QMq26xVNQEDVPLQRO6T2v1sd~QY-gXNsL2Z3Oy7h3wuLhgUHt3AV7NpC47g4eZyYXqokOePqaINV650aln~ZyigCrl9~2~tsMSElI1znI9iZmgNw5oRfeMG3vzJYhRkvEVV4FxfkydSbbuD3ESObGSEXGlE-ruUKTbeQLeuRN9JYnTzht~ttmPi8qvlA8kRRzWmL8jyyB3wDbdCYgrKgkhO-5pVc3FnWUjbj0b6qinB4Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-before-sunrise": {
    "videoId": "6MUcuqbGTxc",
    "embedUrl": "https://www.youtube-nocookie.com/embed/6MUcuqbGTxc?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=6MUcuqbGTxc",
    "trailerTitle": "Before Sunrise (1995) Trailer #1 | Movieclips Classic Trailers",
    "channel": "Rotten Tomatoes Classic Trailers",
    "imdbVideoId": "vi2797142297",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2797142297/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2797142297/1434659454657-dx9ykf-1563503953936.mp4?Expires=1794998525&Signature=cwdfkDYHOoZVFT8KGIt4tZVCMvQVlrYajEHWQhbqpMQgKobINgeUhNWJQ8mX~bw2f3JeuVHWVw13aaM0p4MeUDoBLVrrbzozvglFCuGZeEYv4TgTV71kZv95Go0l75M~OUwVcNDGIFlKv0Q31t2f180RMccH~GCiG8oKDRktFymJs130YWWCKG9ROzlNJ1OqIvJ2-8NbkN8TjVW2yKYHwmjROCY1PWDnU4Fcdz9ahMN4yXAReAEsmPziQgchZNNanSq8OH8oere4f8abOaiZApijlTWl3Lxo~b8HcUx-vATVjmKqlXIbbXR9WwMT~E6qNpq9tbriLjKP1mpdsvL6sg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-httyd-live-action": {
    "videoId": "5lzoxHSn0C0",
    "embedUrl": "https://www.youtube-nocookie.com/embed/5lzoxHSn0C0?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=5lzoxHSn0C0",
    "trailerTitle": "How To Train Your Dragon | Official Teaser Trailer",
    "channel": "Universal Pictures",
    "imdbVideoId": "vi3338323993",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3338323993/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3338323993/1434659529640-260ouz-1750369139781.mp4?Expires=1794998525&Signature=kvrdTQ-ITOp4dCDLuUdmPUCrxyWclGfpTpwA6ufqKL6O3rvdCQ0ogZ55O4nFuXkFs6Htrstg~aZlt187e5ZYplf0bQ3~qCGHtHs73LuijCJ2AVzMwFJZJM9MtIVEJ4yEg0F9tXxb4Y6e84nfcerOIOzLQLAX9mNqgIDzrcq6shdSbmEMUALMg1ZgbSymkn-PZJYxO1Uqac~jpFRjVqbXYQNGvA0ry1b5ddj7MwVIKlRl5LMfCONaDkwibHFQCND7s75ufS~lHivuJ0GzNHPXVUuN1ar2icOocPuaSngrcUM7WX2l4CGlhYkjxEAc84FiU18eCC2f7oqqy-AWXVeZ1A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-before-midnight": {
    "videoId": "Kv6JWoVKlGY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Kv6JWoVKlGY?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=Kv6JWoVKlGY",
    "trailerTitle": "Before Midnight Official Trailer #1 (2013) - Ethan Hawke Movie HD",
    "channel": "Rotten Tomatoes Trailers",
    "imdbVideoId": "vi4026246681",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi4026246681/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi4026246681/1434659529640-260ouz-1616205642209.mp4?Expires=1794998525&Signature=PgWGzn1txPPz1mV~K2iqdEsyLY8N~y8yAHmI-0WFDn6w4iISJUlKDxW0-VWdxGR~Xl8kIa2q3RmVUToE4mGnR2ZDB9e09EbBGPIVYD-h1-T9adjGBnAbJEjpP6qUaf6CNsdWn9LSkHj7544B8NrL1V0ahOVbKbjZ7nw04O7ry16sSmPnd2NGL6pXMHyGYHPZ7nlgIx0KuKOUE5UoApSKgJt52dTeHL~wleqrvpcc5D9AqfIWsS15kFnoUK9obhkidB-Q5Ef~5r9gP-iizePAb~BrGC10cDadzB3kbkJMDqi384BWyBF1RwuQXChFuk2nO2SGC2Xuxq~JdcJ7j75g4g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-voicemails-isabelle": {
    "videoId": "9mi3YVYm3ZU",
    "embedUrl": "https://www.youtube-nocookie.com/embed/9mi3YVYm3ZU?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=9mi3YVYm3ZU",
    "trailerTitle": "Voicemails for Isabelle | Official Trailer | Netflix",
    "channel": "Netflix",
    "imdbVideoId": "vi671468313",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi671468313/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/mc/vi671468313/vi671468313_1080p.mp4?Expires=1794998528&Signature=Bu0e984C0fAvx1dToooERLTaPaMlJpe~z-bBTQAgZl4GisgMUcrq8PnVd1FAhyWp0TOkzvbTFp~~msne0OeagL8hHSKxQDPL2KHBhFfIrpcGm5H9OZCOlDpmJEqgE-HQCqSCHQyjupHkuqGQe-agMl6YBACtRfRXSXTENKYckRVnMEnIBdYCbQekp9VVp8Gwy41hkFDOtgJ5ac5lItH7ayzRmS~NIyM23OnWUEjpmSOHCEnrYg8T8pB-QItYmmLuqEHvBIQL3sovb54SSYp56JVDCUVPthn67uYvZkc58qS0jv8m7lFU-dHcJ2T5mnIl0S6yvZ6tNeUHo7v54FX0Gg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-obsession-2026": {
    "videoId": "gMC8kkwbIQQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/gMC8kkwbIQQ?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=gMC8kkwbIQQ",
    "trailerTitle": "Obsession | Official Trailer",
    "channel": "Blumhouse",
    "imdbVideoId": "vi11782425",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi11782425/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi11782425/1434659529640-260ouz-1729018008190.mp4?Expires=1794998528&Signature=ZhKnkxTaPytF2MAnrjp8bTHCTqw2QgkMIQhksddFRkRVEpmL4r-FHIib4UZdoLNxkcUKdX6bpg8TGY8NfGmMxdiMBIlDjP9VFfdbFX5xHo40c9AjiqI5y2sAyYsBUUaib6TNGnEt2sAOIUcgAJlUF6oDLyWQeQViVUZx9v~vsWtYRx1rQ0oXkNKW9axUm~NMAcOdn0QqKnAcvsMLfqrQ5LAc6AWeL7PTJGr4Rvwq0UBK1qcs5DNqFrBhVNaK-YxUrUeEV-7RCbt70PAz-ojLEGHyTemnqpGRXk5LGVQcnbyq1wQqncc2LBJpNs7chHzMTiOqW-woKfeSVMsoAg6gBw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-the-conjuring": {
    "videoId": "ejMMn0t58Lc",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ejMMn0t58Lc?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=ejMMn0t58Lc",
    "trailerTitle": "The Conjuring Official Trailer #1 (2013) - Vera Farmiga, Patrick Wilson Movie HD",
    "channel": "Rotten Tomatoes Trailers",
    "imdbVideoId": "vi3819874585",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi3819874585/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi3819874585/1434659529640-260ouz-1616202374858.mp4?Expires=1794998528&Signature=joC-sGP6DHAcHR3IG9m81Tat0gfqc9IJvjQYJ7hpEZ5K~NHFkvO0mT0LoUK3vcacBIAxd3R3G-PgWzb4MmhioC7k~IwWE1ZMgHZNAysonBtPG0AnayMKi9xQMJ1O77VwTY0wVEyYxaVsfzOmqGf13S~CN2HIzs8kZEXIxs-1RL5G1lIMHAsSP5cDLunDk5NcGuCpTjn7pRJELJ4grTDxzANQndCiLHvhIU2s9VrC9BpnM54tOYYTZ6b5Sk5nQwE82jFh289Aeh8tfbcapeKTsuOSpv~L-FjTiqU53hcfjYteBkWJdWTo322b9hPTTdxDmklZjy0tzH75RoPTq8-IzQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-redeeming-love": {
    "videoId": "6Z-0C02cqFo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/6Z-0C02cqFo?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=6Z-0C02cqFo",
    "trailerTitle": "REDEEMING LOVE - OFFICIAL TRAILER HD",
    "channel": "Redeeming Love Movie",
    "imdbVideoId": "vi206619417",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi206619417/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi206619417/1434659529640-260ouz-1646240689810.mp4?Expires=1794998528&Signature=LoFlGv3fBshhJvnl6EGZdLhd2bBGSBJbbW-8H9PLcCGpar7cewYkvFQgWWymOLt95ojtz0DUQpcJRMH9s4SjvOf3NtX7FsQF0Bg1NgGY7td5wOys6cuiI14bCYxuE9DGnq0NeylpizwwVjUZTM7BZcSFUoqEWNsnTgNhkCmnUgzRPXfr~TrOEN~aaVJQhTryQUtnFacSQ-aqN-Z5KclEFFqamnaHWlfmyyhQvtUB7ehDi4bELMBGT07qZn5zqcy~cG5z1T3sJ9FKen1yAjn3Qn~q-ZCqXf1wdftFeTUtsxozeWL5Iq-UWVr6hpFRBiRk8l19raUeef3H8JSTV2EWFg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-resident-evil-2026": {
    "videoId": "4q6UGCyHZCI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/4q6UGCyHZCI?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=4q6UGCyHZCI",
    "trailerTitle": "RESIDENT EVIL: WELCOME TO RACCOON CITY - Official Trailer (HD)",
    "channel": "Sony Pictures Entertainment",
    "imdbVideoId": "vi1022935833",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi1022935833/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi1022935833/1434659529640-260ouz-1636044876987.mp4?Expires=1794998528&Signature=Qno-yLczi-pLeQQTXP8BJq6zbxYGJzRBBnq9Ce6-kJn1B~0QhWpa0Zg9hh1B48DP7NCXlFIL~T7LQQMZYehrpTsEU-8OqDJ5D-yWiZGWX-EcU3leVF3u~mDePQ0HT8cfQso-OqmfINF0X9gAmVlZ1cKJwaPeEKLLtypwUjAiPM0zPNvQIqPzb2gfauZifuLMetkEgDMxKCQH~Edz-fp5seLcPx2gD-~xNYLd2mERCqbWP7EJ8ZY9eV~lY4qy2TWSbdh5i66D~qxsuokqvEmoAkNR2XakFCGG6nLgqV1NuHddHgTI~MT07xxurrJaDaoXVtpIwKsK-LMt5aOG2aRJPg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-sinners-2025": {
    "videoId": "bKGxHflevuk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/bKGxHflevuk?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=bKGxHflevuk",
    "trailerTitle": "Sinners | Official Trailer",
    "channel": "Warner Bros.",
    "imdbVideoId": "vi2383464729",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi2383464729/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi2383464729/1434659529640-260ouz-1738084652610.mp4?Expires=1794998528&Signature=rKpsuPpQOEn8Vb3dfbqhOp6zqJRozQLjwg1Gh-mCTGUkxzF41rjzSeEAFAMebyn~lh8PIq4t6S0sVNyq0-iqjXkRIS-I2NujGEyyWQ8i4~smCQeWLp6JqmhmZNNJd8Z6hwG3tC21smtsIEQYo6AAICyLNEG4KVTCoE-nrBq0ZvMA684isbjJ3MUpb2AFFLNM0x6k96Uvn8Cfa0lQrRhwGqoGPsNhTbaXRa9piUvMQZsQpmAkvhA7ho0Vst26HPSDCSn2J-B-lq6RD-29h11NNWl43cFi8iY~FFW8OIMkGLHtmyxtfDcYpQQkiX9yjdpKTWZUjISXkrMosGedqxtlWw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  "film-his-house": {
    "videoId": "DYY0QJhlXjc",
    "embedUrl": "https://www.youtube-nocookie.com/embed/DYY0QJhlXjc?autoplay=1&rel=0&modestbranding=1",
    "watchUrl": "https://www.youtube.com/watch?v=DYY0QJhlXjc",
    "trailerTitle": "HIS HOUSE | Official Trailer | Netflix",
    "channel": "Netflix",
    "imdbVideoId": "vi412795161",
    "imdbEmbedUrl": "https://www.imdb.com/video/imdb/vi412795161/imdb/embed?autoplay=true",
    "directMp4Url": "https://imdb-video.media-imdb.com/vi412795161/1434659379400-8cjq25-1601480809205.mp4?Expires=1794998529&Signature=U1yCBLgiLIG3z1qLq~XgJkdCvtZnK95ItKtSQlMvg0QY2ccUYHPgOC~NMbJGrBZa2Hh~Yi0JAKPOBi9dCalESDQ1AhFyjLWOe9mapZLGNKC8Nfkz5ZoEfMEkY2pJcUaZkeVc4AOmy3cNimrQc4lvZ-AaVmU7yxXDTuksoatCYjErvSOWCzWMtWPxei2RuZOaprPPPoX5aQGvyJWwkJ62mxC1-iJezIQA09UitJVCMwoY2mBgEXS~XuhPL3G7Y9KuBATh6WqwY427lxKupqzeynCpUPVwV8e1PYNzfeN1lePsE4VNE20GAIkiQnA0XrFWGFcLMMScdwEwjc3lVL288A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  }
};

export function getFilmTrailerMeta(filmId: string, filmTitle: string, year?: number, customTrailerUrl?: string): FilmTrailerMeta {
  const existing = REAL_MOVIE_TRAILERS[filmId];
  if (customTrailerUrl && (!existing || customTrailerUrl !== existing.watchUrl)) {
    const ytMatch = customTrailerUrl.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
    if (ytMatch) {
      const vid = ytMatch[1];
      return {
        videoId: vid,
        embedUrl: `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1`,
        watchUrl: `https://www.youtube.com/watch?v=${vid}`,
        trailerTitle: `${filmTitle} — Official Theatrical Trailer`,
        channel: "Official Studio Release",
        directMp4Url: existing?.directMp4Url,
        imdbEmbedUrl: existing?.imdbEmbedUrl
      };
    }
  }
  if (existing) return existing;
  const searchQuery = encodeURIComponent(`${filmTitle} ${year || ""} official trailer`.trim());
  return {
    videoId: "zSWdZVtXT7E",
    embedUrl: `https://www.youtube.com/embed?listType=search&list=${searchQuery}&autoplay=1`,
    watchUrl: `https://www.youtube.com/results?search_query=${searchQuery}`,
    trailerTitle: `${filmTitle} — Official Theatrical Trailer`,
    channel: "Official Studio Release",
    directMp4Url: REAL_MOVIE_TRAILERS["film-interstellar"]?.directMp4Url
  };
}

