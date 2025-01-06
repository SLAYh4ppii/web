import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rickedstudios.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: 'https://rickedstudios.com/fr',
          de: 'https://rickedstudios.com/de',
          en: 'https://rickedstudios.com/en',
        },
      },
    },
    {
      url: 'https://rickedstudios.com/news',
      lastModified: new Date(),
      alternates: {
        languages: {
            fr: 'https://rickedstudios.com/fr/news',
            de: 'https://rickedstudios.com/de/neuigkeiten',
            en: 'https://rickedstudios.com/en/news',
          },
      },
    },
    {
      url: 'https://rickedstudios.com/work-with-us',
      lastModified: new Date(),
      alternates: {
        languages: {
            fr: 'https://rickedstudios.com/fr/work-with-us',
            de: 'https://rickedstudios.com/de/arbeite-mit-uns',
            en: 'https://rickedstudios.com/enZ/work-with-us',
          },
      },
    },
  ]
}
