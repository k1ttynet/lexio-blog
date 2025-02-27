import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'doom.pet',
    description: 'the blog of doom darkmagic',
    site: "https://doom.pet/",
    items: await pagesGlobToRssItems(import.meta.glob('../**/*.md')),
    customData: `<language>en-us</language>`,
  });
}