import { Channel } from './types';

export const CHANNELS: Channel[] = [
  {
    id: 'bip_bop',
    name: 'Bip-Bop (Apple)',
    logoUrl: 'https://picsum.photos/seed/bipbop/200/200',
    streamUrl: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8',
  },
  {
    id: 'big_buck_bunny',
    name: 'Big Buck Bunny',
    logoUrl: 'https://picsum.photos/seed/bunny/200/200',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: 'sintel',
    name: 'Sintel',
    logoUrl: 'https://picsum.photos/seed/sintel/200/200',
    streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  },
  {
    id: 'cosmos_lava',
    name: 'Cosmos Laundromat',
    logoUrl: 'https://picsum.photos/seed/cosmos/200/200',
    streamUrl: 'https://bitmovin-a.akamaihd.net/content/cosmos/hls/main.m3u8',
  },
  {
    id: 'nasa_tv',
    name: 'NASA TV',
    logoUrl: 'https://picsum.photos/seed/nasa/200/200',
    streamUrl: 'https://nasalive.akamaized.net/hls/live/2016336/NASA-TV-Public/master.m3u8',
  },
  {
    id: 'direct_ts_stream',
    name: 'Direct Stream (MP4)',
    logoUrl: 'https://picsum.photos/seed/tsstream/200/200',
    streamUrl: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4' // Using an mp4 for broader browser support as a .ts example
  },
  {
    id: 'xtream_example',
    name: 'Xtream Code TV',
    logoUrl: 'https://picsum.photos/seed/xtream/200/200',
    streamUrl: 'http://dplatino.net:8080/Oenfnf72737/Enebf83847473/69291',
  }
];