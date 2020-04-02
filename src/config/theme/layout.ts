const layout = {
  space: Array.from({ length: 100 }, (_, i) => i * 8),
  radii: {
    none: 0,
    normal: 8,
    circle: '50%',
  },
  shadows: {
    default: '0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.1);',
  },
}

export default layout
