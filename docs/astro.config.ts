import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import shadcnStarlightTheme from 'shadcn-starlight-theme'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      editLink: {
        baseUrl: 'https://github.com/soyluisarrieta/shadcn-starlight-theme/edit/main/docs/',
      },
      plugins: [shadcnStarlightTheme()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/soyluisarrieta/shadcn-starlight-theme',
      },
      title: '@soyluisarrieta/shadcn-starlight-theme',
    }),
  ],
})
