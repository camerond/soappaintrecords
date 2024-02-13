const albumData = [
  {
    title: 'Resolute Mantras Stimulate Principles',
    artist: 'Night Office',
    links: [
      'https://nightoffice.bandcamp.com/album/resolute-mantras-stimulate-principles',
      'https://music.apple.com/us/album/resolute-mantras-stimulate-principles/1728474532',
      'https://open.spotify.com/album/47i1AiB4J879StltQNDAux?si=vRjHnJObS2azMVSOdr74GA',
    ],
    blurb: 'An ever-evolving soundtrack crafted to keep your personal dream services team working at peak efficiency in a modern nocturnal office environment',
    releaseDate: '2/6/2023',
  },
  {
    title: 'October Demo',
    artist: 'Teeth Kids',
    links: [
      'https://teethkids.bandcamp.com/album/october-demo',
      'https://open.spotify.com/album/7MbxCMS3pGy39b6H4XZd5b?si=cgt67gMKQWi4aI2I93Ye1Q',
      'https://music.apple.com/us/album/october-demo-demo-single/1711884970',
    ],
    blurb: 'Two loud, desperate songs written by a small gang of anxious friends.',
    releaseDate: '10/12/2023',
  },
  {
    title: 'At Home',
    artist: 'Catsicle',
    links: [
      'https://catsicle.bandcamp.com/album/at-home',
      'https://open.spotify.com/album/6J42UyfLBtCASWJs3yD8Av?si=7l2zhVSfSJWek9ACWRwglg',
      'https://music.apple.com/us/album/at-home/1682373866',
    ],
    blurb: 'Felix is now 7 and back with another album of noise, dreams, and musical stories',
    releaseDate: '3/28/2023',
  },
  {
    title: 'Die Twice',
    artist: 'Seaxes',
    links: [
      'https://seaxes.bandcamp.com/album/die-twice',
      'https://music.apple.com/us/album/die-twice-ep/1649978048',
      'https://open.spotify.com/album/21JnsvABlIhqzv0gz7L69G?si=fIu0KMrATKSxp1OFxYkmuA',
    ],
    blurb: 'Second release from Seaxes; split with St. Louis\' Iron Linings',
    releaseDate: '11/21/2022',
  },
  {
    title: 'Heart To Your Death',
    artist: 'Catsicle',
    links: [
      'https://catsicle.bandcamp.com/album/heart-to-your-death',
      'https://open.spotify.com/album/2XSOta0YX6538nHP3Wze5x?si=stRkGJW5TWaLX_IfEBOHRQ',
      'https://music.apple.com/us/album/heart-to-your-death/1666407777'
    ],
    blurb: 'More unfettered explosions from your favorite 5-year-old indie noise fiend',
    releaseDate: '3/8/2021',
  },
  {
    title: "don't you want to come back",
    artist: 'st. cethleann',
    links: [
      'https://stcethleann.bandcamp.com/album/dont-you-want-to-come-back',
      'https://open.spotify.com/album/6DmiMyVzjoT11WkhGynwX0?si=ao51AUznS0qtOOQiVRBn7Q',
      'https://music.apple.com/us/album/dont-you-want-to-come-back-single/1538393777',
    ],
    blurb: 'for fans of Hiroshi Yoshimura and Neon Genesis Evangelion',
    releaseDate: '11/7/2020',
  },
  {
    title: 'Modus Ponens',
    artist: 'Theron Humiston',
    links: [
      'https://theronhumiston.bandcamp.com/album/modus-ponens',
      'https://open.spotify.com/album/7ktfiaCxpFG4f40yj7he2v?si=Sk05IM6mRRG7Vm4e46yNGg',
      'https://music.apple.com/us/album/modus-ponens-ep/1536525489',
    ],
    blurb: 'A diptych of Carpenter-infused synthetic atmospheres',
    releaseDate: '8/2/2020',
  },
  {
    title: 'Popsicat',
    artist: 'Catsicle',
    links: [
      'https://catsicle.bandcamp.com/album/popsicat',
      'https://open.spotify.com/album/1DcWV47Plmlm1gckPL8lV2?si=YOY0umZhS9eQ5k4jNMrXuw',
      'https://music.apple.com/us/album/popsicat/1536598122',
    ],
    blurb: 'Improv music scribbles from the mind of a 5-year-old whirlwind',
    releaseDate: '8/2/2020',
  },
  {
    title: 'Heartbeating the Executor',
    artist: 'Theron Humiston',
    links: [
      'https://open.spotify.com/album/7u9z8V5dQRAIm9OGgxh0Ly?si=K7m3Cv3TSNeXoRPJq5JhqQ',
      'https://theronhumiston.bandcamp.com/album/heartbeating-the-executor',
      'https://music.apple.com/us/album/heartbeating-the-executor/1514804292',
    ],
    blurb: 'Uncompromising modal rituals',
    releaseDate: '5/29/2020',
  },
  {
    title: 'a garden',
    artist: 'st. cethleann',
    links: [
      'https://stcethleann.bandcamp.com/album/a-garden',
      'https://open.spotify.com/album/1qWrdPleeWdtl097UEvtWm?si=r1v2QX-jTn6-u2XA_p0y3A',
      'https://music.apple.com/us/album/a-garden-ep/1513531112',
    ],
    blurb: 'Flowers, tape hiss, and the first day of spring',
    releaseDate: '5/22/2020',
  },
  {
    title: 'Goody Gel',
    artist: 'Goody Gel',
    links: [
      'https://goodygel.bandcamp.com/album/goody-gel',
      'https://open.spotify.com/album/3qHJrzTJRJazeZWp4Kdrhj?si=259no8yASbyLOrhFAhBmDg',
      'https://music.apple.com/us/album/goody-gel/1507511394',
    ],
    blurb: 'The best kind of ramshackle hook-laden fire-escape filth-pop',
    releaseDate: '4/20/2020',
  },
  {
    title: 'Seaxes EP',
    artist: 'Seaxes',
    links: [
      'https://seaxes.bandcamp.com/album/seaxes',
      'https://open.spotify.com/album/0FZONF3kgL70UPtGvLtBNH?si=BpJbE_qHT1Cx3X398HObbQ',
      'https://music.apple.com/us/album/seaxes-ep/1504332263',
    ],
    blurb: 'Paranoid, collision-like, logical-conclusion-of-this-sort-of-thing apocalypse rock',
    releaseDate: '3/17/2020',
  },
  {
    title: 'Large Pizza Order',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/large-pizza-order',
      'https://open.spotify.com/album/5n211ETD6PI27PjAicwgD8?si=fVaY3T2_QfCFVksZSofnNA',
      'https://music.apple.com/us/album/large-pizza-order/1511648918',
    ],
    blurb: 'The first Eyeball release featuring a full band – Beefheart-adjacent improv dance-rock from the mind of an 8-year-old',
    releaseDate: '3/26/2019',
  },
  {
    title: 'Timed For Challenge',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/timed-for-challenge',
      'https://open.spotify.com/album/2pQP5wCdmsKccADDXf6FCG?si=Mz-cu4pSQrmHPKAAQmp0FQ',
      'https://music.apple.com/us/album/timed-for-challenge/1507628906',
    ],
    blurb: 'More improvised guitar/drum sketches from a father/son duo',
    releaseDate: '8/14/2017',
  },
  {
    title: 'Good Thing That Happened',
    artist: 'Redo In Chicago',
    links: [
      'https://redoinchicago.bandcamp.com/album/good-thing-that-happened',
      'https://open.spotify.com/album/46mqjQASMuW52SYPwYW1L0?si=ZTCr8fGcRQqiAGVqB3SZyg',
      'https://music.apple.com/us/album/good-thing-that-happened/1469751090',
    ],
    blurb: 'Bleeps AND bloops from children, barely monitored by an adult',
    releaseDate: '2/9/2017',
  },
  {
    title: 'Skies',
    artist: 'Redo In Chicago',
    links: [
      'https://redoinchicago.bandcamp.com/album/skies',
    ],
    blurb: 'A 4-song instrumental sidebar from your favorite child-driven improvisational project',
    releaseDate: '4/6/2017',
  },
  {
    title: 'Player Game',
    artist: 'Lighting',
    links: [
      'https://lightingrock.bandcamp.com/releases',
    ],
    blurb: 'Even-more-unbridled side project of Eyeball',
    releaseDate: '4/2/2016',
  },
  {
    title: 'Video Games',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/video-games',
      'https://open.spotify.com/album/1PWU17k2fAZjzr6vEsAgK4?si=JaT9atmASQG4cJ4ieMpTOQ',
      'https://music.apple.com/us/album/video-games/1507400465',
    ],
    blurb: 'Archer turns 5 and Eyeball branches past instrumental improv / spoken word into 2-piece improvisational mayhem',
    releaseDate: '1/25/2016',
  },
  {
    title: 'Pur Bop Awsovmw 2',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/pur-bop-awsovmw-2',
      'https://open.spotify.com/album/6j8pNkpg55THTPfPwAocfj?si=f-Xpv9CURAyP9JYVMqPeAQ',
      'https://music.apple.com/us/album/pur-bop-awsovmw-2/1507854062',
    ],
    blurb: 'Drums / spoken word lyrical exploration / poetry / glimpse into the mind of a then-4-year-old',
    releaseDate: '12/9/2015',
  },
  {
    title: 'Cake',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/cake',
      'https://open.spotify.com/album/3EmYKYMlrW8kaqg9R52JAP?si=VOdPMHj9Q62K2ggj7tTOJA',
      'https://music.apple.com/us/album/cake/1507850564',
    ],
    blurb: "Eyeball's first full-length, guided by the whims of a very particular child",
    releaseDate: '3/21/2015',
  },
  {
    title: 'Pie',
    artist: 'Eyeball',
    links: [
      'https://eyeballrock.bandcamp.com/album/pie',
      'https://open.spotify.com/album/5INV10fnVRCFPAZINyFp23?si=3kb8_X3aQvqm2q02x6zDrg',
      'https://music.apple.com/us/album/pie-ep/1469813384',
    ],
    blurb: "Eyeball's first foray into the realization that anyone can record anything",
    releaseDate: '3/21/2015',
  },
];

const tmpl = `
  <li data-{{catNumber}}>
    <div class="catalogue__album">
      <small>
        {{catNumber}}
      </small>
      {{image}}
      <h3>
        {{title}}
      </h3>
      <h4>
        {{artist}}
      </h4>
      <div class="catalogue__release">
        {{releaseDate}}
      </div>
      <ul>
        {{links}}
      </ul>
      <div class="catalogue__blurb">
        {{blurb}}
      </div>
    </div>
  </li>
`;

const templateTags = [
  'catNumber',
  'catNumber',
  'image',
  'title',
  'artist',
  'links',
  'blurb',
  'releaseDate',
];

function clean(str) {
  return str.replace(/[^\w\s]/, '');
}

function getImageTag(album, idx) {
  const artist = clean(album.artist);
  const title = clean(album.title);
  const src=`images/albums/${getCatNumber(idx)} - ${artist} - ${title} - 800x800.jpg`;
  return `<img
    src="${src.toLowerCase()}"
    alt="${artist} - ${title} art"
  />`
}

function getLinkText(link) {
  if (link.match(/spotify/)) return 'spotify';
  if (link.match(/bandcamp/)) return 'bandcamp';
  if (link.match(/apple/)) return 'apple music';
  return null;
}

function wrapText(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function generateLink(link) {
  const txt = getLinkText(link);
  if (!txt) return null;
  return wrapText(`
    <a href="${link}">
      ${getLinkText(link)}
    </a>
  `, 'li');
}

function getCatNumber(k) {
  return `SPAINT-${(albumData.length - k).toString().padStart(5, '0')}`;
}

function getReleaseDate(date) {
  if (!date.match(/\d/)) return date;
  return `released ${date}`;
}

function generateElement(k, album, idx) {
  if (k === 'catNumber') return getCatNumber(idx);
  if (k === 'image') return getImageTag(album, idx);
  if (k === 'releaseDate') return getReleaseDate(album[k]);
  if (k === 'links') return album[k].map(generateLink).join('');
  return album[k];
}

function generateAlbum(album, idx) {
  if (!album.title.length) return '';
  let output;
  output = tmpl;
  templateTags.forEach((k) => {
    output = output.replace(`{{${k}}}`, generateElement(k, album, idx));
  });
  return output;
}

function writeHtml() {
  return `
    <ul>
      ${albumData.map(generateAlbum).join('')}
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  `;
}


fs = require('fs');
fs.readFile('src/index.html', 'utf8', (err, data) => {
  if (err) return console.log(err);
  fs.writeFile('index.html', data.replace(/{{albums}}/, writeHtml()), () => null);
});
