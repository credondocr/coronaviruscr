const theme = {
  fonts: {
    body:
      'Helvetica, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    background: '#262529',
    backgroundSecondary: '#212024',
    text: '#fff',
    textSecondary: '#95a5a6',
    warning: '#f1c40f',
    error: '#e74c3c',
    success: '#2ecc71',
  },
  space: Array.from({ length: 100 }, (_, i) => i * 8),
  radii: {
    none: 0,
    normal: 8,
    circle: '50%',
  },
  layout: {
    container: {
      px: 3,
      py: [3, 10],
      width: '100%',
      maxWidth: 1200,
      mx: 'auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    main: {
      my: 15,
    },
    footer: {
      textAlign: 'center',
      fontSize: 0,
      color: 'textSecondary',
    },
  },
  components: {
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
      title: {
        mb: 4,
      },
    },
    card: {
      container: {
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
    stats: {
      container: {
        display: 'grid',
        gridGap: 2,
        gridTemplateColumns: ['1fr', null],
        gridTemplate: [
          null,
          `
          "main main main"
          "stat stat stat"
        `,
        ],
      },
      mainStat: {
        gridArea: [null, 'main'],
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontSmoothing: 'antialiased',
    },
    h1: {
      variant: 'components.text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'components.text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'components.text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'components.text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'components.text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'components.text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}

export default theme
