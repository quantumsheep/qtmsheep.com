module.exports = {
  title: `qtmsheep.com`,
  description: `Blog about my discoveries and nerd stuff.`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://qtmsheep.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `quantumsheep/blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Nathanael`,
    bio: {
      role: ``,
      description: ['a developer', 'blue', 'a time traveler', 'anyone'],
      thumbnail: 'me.png',
    },
    social: {
      github: 'https://github.com/quantumsheep',
      twitter: 'https://twitter.com/qtmsheep',
      linkedIn: 'https://www.linkedin.com/in/nathanael-demacon',
      youtube: 'https://www.youtube.com/channel/UCTCLqMinj_jenx_m8-gqSKw',
      // email: `nathanael.dmc@outlook.fr`,
    },
  },
  about: {
    timestamps: [
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
    projects: [
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'Sand Porgramming Language',
        description: 'A strictly-typed programming language',
        techStack: ['C++', 'LLVM', 'ANTLR4'],
        thumbnailUrl: 'blog.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/sand-lang/sand',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
