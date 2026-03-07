export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  title: string;
  category: string;
}

export const galleryMedia: MediaItem[] = [
  {
    id: '1Pqa6xmIZNi4AqLyr5tybRwU6G247SNea',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1Pqa6xmIZNi4AqLyr5tybRwU6G247SNea',
    title: 'Творческое занятие',
    category: 'Творчество'
  },
  {
    id: '16WiUT91ZoiN4baVO7GnFWEpl-9gWLm_X',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/16WiUT91ZoiN4baVO7GnFWEpl-9gWLm_X',
    title: 'Наши открытия',
    category: 'Мини-сад'
  },
  {
    id: '1NK36SoZ-P2KCEhCWVA28nj7gKHRL_L0S',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1NK36SoZ-P2KCEhCWVA28nj7gKHRL_L0S',
    title: 'Веселые игры',
    category: 'Мини-сад'
  },
  {
    id: '1gN6_bVZNmrx3qvJZ6tmm9h1gR8bNbL8f',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1gN6_bVZNmrx3qvJZ6tmm9h1gR8bNbL8f',
    title: 'Урок творчества',
    category: 'Творчество'
  },
  {
    id: '1vTALI_aWmQI0N6zNkzMdIBRkWcI2Lm8k',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1vTALI_aWmQI0N6zNkzMdIBRkWcI2Lm8k',
    title: 'Будни в центре',
    category: 'Жизнь центра'
  },
  {
    id: '1vH5CMmTkfYwLhHaaQJKJAcE0Kq348du_',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1vH5CMmTkfYwLhHaaQJKJAcE0Kq348du_',
    title: 'Наши будни',
    category: 'Жизнь центра'
  }
];