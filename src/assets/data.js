export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/UelioNobre.png',
      name: 'Uélio Nobre',
      role: 'DevJS'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'https://github.com/UelioNobre'
      },
    ],
    publishedAt: new Date('2024-01-15 23:47:15'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Arthur-bl-dev.png',
      name: 'Arthur BL',
      role: 'DevJS'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Bora lá!'
      },
      {
        type: 'paragraph',
        content: 'Achei bacana!'
      },
      {
        type: 'link',
        content: 'https://github.com/Arthur-bl-dev'
      },
    ],
    publishedAt: new Date('2024-01-18 14:32:56'),
  },
];