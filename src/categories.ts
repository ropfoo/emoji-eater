import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { MAIN_URL } from './constants';
import { Category, Group } from './types';
import { getEmojisByCategory } from './emojis';

export async function getEmojiGroups(): Promise<Group[]> {
  const url = `${MAIN_URL}/categories`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const content = await page.content();

  const $ = cheerio.load(content);

  // get existing categories
  const categories: Category[] = [];

  $('.content > ul > li > a').each((i, elm) => {
    const slug = elm.attribs.href;
    const emoji = $(elm.firstChild ?? '').text();
    const name = $(elm.lastChild ?? '').text();

    categories.push({ slug, name, emoji });
  });

  const emojiGroups: Group[] = [];

  await Promise.all(
    categories.map(async ({ name, emoji, slug }) => {
      const emojis = await getEmojisByCategory(slug);

      emojiGroups.push({ name, emoji, emojis });
    })
  );

  return emojiGroups;
}
