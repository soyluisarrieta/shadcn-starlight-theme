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
                  themes: ['vitesse-dark', 'vitesse-light'],
                },
        })
      },
    },
  }
}
