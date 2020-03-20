const layout = {
  container: {
    px: 3,
    width: '100%',
    maxWidth: 1200,
    mx: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    wrapper: {
      bg: 'toolbar',
      py: [5, 10],
    },
    container: {
      variant: 'components.layout.container',
      flexDirection: ['column', 'row'],
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: 'toolbarPrimary',
    },
    subtitle: {
      color: 'toolbarSecondary',
      mt: [0, 3],
    },
  },
  nav: {
    container: {
      mt: [3, 0],
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    item: {
      alignItems: 'center',
      color: 'toolbarSecondary',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      fontSize: [1, 3],
      fontWeight: 'bold',
      borderBottom: '2px solid',
      borderBottomColor: 'toolbar',
      ml: [0, 4],
      '&:hover': {
        color: 'toolbarPrimary',
      },
    },
    itemActive: {
      variant: 'components.layout.nav.item',
      color: 'toolbarPrimary',
      borderBottomColor: 'toolbarPrimary',
    },
  },
  main: {
    variant: 'components.layout.container',
    my: 8,
  },
  footer: {
    wrapper: {
      bg: 'footer',
      py: [5, 10],
    },
    container: {
      variant: 'components.layout.container',
      textAlign: 'center',
      fontSize: 1,
      color: 'textSecondary',
    },
  },
}

export default layout
