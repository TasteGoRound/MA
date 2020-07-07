let publish = null;

if(process.env.npm_config_publish) {
  publish = {
    router: {
      base: '/MA/'
    },
    generate: {
      routes: [
        '/result/0',
        '/result/1',
        '/result/2',
        '/result/3',
        '/result/4',
        '/result/5',
        '/result/6',
        '/result/7',
        '/result/8',
        '/result/9',
        '/result/10',
        '/result/11',
        '/result/12',
      ]
    }
  }
}


export default {
  mode: 'spa',
  loading: false,
  head: {
    title: 'BADGIRLS LIFE STYLE',
    meta: [
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'BADGIRLS LIFE STYLE' },
      { hid: 'og:title', property: 'og:title', content: 'BADGIRLS LIFE STYLE' },
      { hid: 'og:description', property: 'og:description', content: '매력의 격이 다른 "배드걸 라이프 스타일"' },
      { hid: 'og:image', property: 'og:image', content: 'https://k.kakaocdn.net/dn/edxOqX/btqFctp5Uz4/87oz6bLEWcAVk3hAdiDC81/img.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '800' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '당신의 남자친구의 성적 만족도는?' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [ '@/assets/reset.css' ],
  ...publish
}
