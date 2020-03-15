const ui = {
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      m: 0,
    },
    stat: {
      fontSize: 7,
    },
  },
  section: {
    container: {
      '& + &': {
        mt: 15,
      },
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 8,
    },
    title: {
      '&:after': {
        content: '""',
        display: 'block',
        width: 100,
        height: 2,
        bg: 'primary',
        mt: 1,
      },
    },
    actions: {
      fontSize: 1,
    },
  },
  card: {
    container: {
      boxShadow: 'default',
      bg: 'backgroundSecondary',
      borderRadius: 'normal',
      p: 3,
      textAlign: 'center',
    },
    title: {
      mt: 2,
      color: 'textSecondary',
    },
  },
  table: {
    wrapper: {
      overflow: 'auto',
      boxShadow: 'default',
      bg: 'backgroundSecondary',
      borderRadius: 'normal',
    },
    container: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      overflow: 'hidden',
    },
    tr: {
      '&:last-child td': {
        border: 'none',
      },
    },
    th: {
      bg: 'toolbar',
      textAlign: 'left',
      padding: 3,
      fontSize: 2,
    },
    td: {
      textAlign: 'left',
      padding: 3,
      borderBottomColor: 'muted',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
    },
  },
  select: {
    container: {
      display: 'flex',
      position: 'relative',
    },
    select: {
      width: '100%',
      py: 1,
      pl: 2,
      pr: 6,
      appearance: 'none',
      fontSize: 2,
      lineHeight: 'inherit',
      fontWeight: 'bold',
      color: 'primary',
      bg: 'transparent',
      border: '1px solid',
      borderRadius: 'normal',
      borderColor: 'primary',
    },
    indicator: {
      alignSelf: 'center',
      pointerEvents: 'none',
      color: 'primary',
      position: 'absolute',
      right: 1,
    },
  },
  button: {
    container: {
      py: 1,
      px: 2,
      appearance: 'none',
      fontSize: 2,
      lineHeight: 'inherit',
      fontWeight: 'bold',
      color: '#262529',
      bg: 'primary',
      border: 'none',
      borderRadius: 'normal',
      '&:disabled': {
        opacity: 0.25,
      },
    },
  },
  link: {
    color: 'primary',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}

export default ui
