const cases = {
  stats: {
    container: {
      display: 'grid',
      gridGap: 5,
      gridTemplateColumns: ['1fr', 'repeat(6, 1fr)'],
    },
    mainStat: {
      gridColumn: [null, 'span 3'],
    },
    secondaryStat: {
      gridColumn: [null, 'span 2'],
    },
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
  indicator: {
    base: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      bg: 'red',
    },
    active: {
      variant: 'components.cases.indicator.base',
      bg: 'warning',
    },
    recovered: {
      variant: 'components.cases.indicator.base',
      bg: 'success',
    },
    dead: {
      variant: 'components.cases.indicator.base',
      bg: 'error',
    },
  },
}

export default cases
