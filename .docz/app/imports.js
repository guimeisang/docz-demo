export const imports = {
  'src/components/Blink/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-blink-index" */ 'src/components/Blink/index.mdx'
    ),
}
