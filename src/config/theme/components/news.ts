const news = {
  link: {
    color: 'text',
  },
  list: {
    container: {
      display: 'grid',
      gridGap: 5,
      gridTemplateColumns: ['1fr', 'repeat(3, 1fr)'],
    },
    card: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      flex: 'auto',
      fontWeight: 'bold',
      color: 'text',
    },
    source: {
      mt: 2,
      color: 'textSecondary',
      fontSize: 1,
    },
    date: {
      color: 'textSecondary',
    },
  },

  source: {
    color: 'textSecondary',
  },
  // list: {
  //   toolbar: {
  //     container: {
  //       display: 'flex',
  //       justifyContent: 'space-between',
  //       alignItems: ['start', 'center'],
  //     },
  //     legend: {
  //       container: {
  //         display: 'flex',
  //         flexDirection: ['column', 'row'],
  //         margin: 0,
  //         padding: 0,
  //       },
  //       item: {
  //         display: 'flex',
  //         alignItems: 'center',
  //         mr: [0, 8],
  //         fontSize: 1,
  //         color: 'textSecondary',
  //         '> *:first-of-type': {
  //           mr: 2,
  //           ml: [2, 0],
  //         },
  //       },
  //     },
  //   },
  //   table: {
  //     container: {
  //       mt: 5,
  //     },
  //   },
  //   footer: {
  //     container: {
  //       mt: 5,
  //       display: 'flex',
  //       flexDirection: ['column', 'row'],
  //       justifyContent: 'space-between',
  //     },
  //     buttons: {
  //       display: 'flex',
  //       mt: [3, 0],
  //       justifyContent: ['space-between', null],
  //     },
  //     pageSelector: {
  //       mx: [0, 3],
  //     },
  //   },
  // },
}

export default news
