import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    tableOfContents: false,
    customCss: [
      "./src/styles/overrides.scss",
    ],
    pagefind: false,
    title: 'Telesis Career Day 2024',
    social: {
      github: 'https://github.com/jwu910/telesis-career-day-2024'
    },
    sidebar: [{
      label: 'Presentation',
      autogenerate: {
        directory: 'presentation'
      }
    }]
  })],
});
