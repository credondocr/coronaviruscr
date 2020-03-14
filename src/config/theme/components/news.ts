const news = {
  link: {
    color: 'text',
  },
  list: {
    toolbar: {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: ['start', 'center'],
      },
      legend: {
        container: {
          display: 'flex',
          flexDirection: ['column', 'row'],
          margin: 0,
          padding: 0,
        },
        item: {
          display: 'flex',
          alignItems: 'center',
          mr: [0, 8],
          fontSize: 1,
          color: 'textSecondary',
          '> *:first-of-type': {
            mr: 2,
            ml: [2, 0],
          },
        },
      },
    },
    table: {
      container: {
        mt: 5,
      },
    },
    footer: {
      container: {
        mt: 5,
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        mt: [3, 0],
        justifyContent: ['space-between', null],
      },
      pageSelector: {
        mx: [0, 3],
      },
    },
  },
}

export default news
