import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function shadcnStarlightTheme(): StarlightPlugin {
  return {
    name: 'shadcn-starlight-theme',
    hooks: {
      'config:setup'({ updateConfig, config }) {
        updateConfig({
          customCss: [...(config.customCss ?? []), 'shadcn-starlight-theme/styles'],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  ...(typeof config.expressiveCode === 'object' ? config.expressiveCode : {}),
                  styleOverrides: {
                    codeBackground: 'var(--block-code-background)',
                    borderColor: 'var(--block-code-background)',
                    borderRadius: '0.75rem',
                    textMarkers: {
                      markBackground: 'var(--block-code-highlight)',
                      markBorderColor: 'transparent',
                      backgroundOpacity: '0.4',
                      delBorderColor: 'transparent',
                      insBorderColor: 'transparent'
                    },
                    frames: {
                      editorBackground: 'var(--block-code-background)',
                      editorTabBarBackground: 'var(--block-code-background)',
                      editorTabBarBorderBottomColor: 'var(--border)',
                      editorTabBarBorderColor: 'var(--block-code-background)',
                      editorActiveTabBackground: 'var(--block-code-background)',
                      editorActiveTabBorderColor: 'var(--block-code-background)',
                      editorActiveTabIndicatorTopColor: 'var(--primary)',
                      editorActiveTabIndicatorBottomColor: 'var(--border)',
                      tooltipSuccessBackground: 'var(--input)',
                      tooltipSuccessForeground: 'var(--input-foreground)',
                      frameBoxShadowCssValue: 'unset',
                      terminalBackground: 'var(--block-code-background)',
                      terminalTitlebarBackground: 'var(--block-code-background)',
                      terminalTitlebarBorderBottomColor: 'var(--border)',
                    },
                  },
                  themes: ['github-dark-default', 'github-light'],
                },
        })
      },
    },
  }
}
