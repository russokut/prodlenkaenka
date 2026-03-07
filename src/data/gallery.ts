export type MediaType = 'photo' | 'video';

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnail?: string;
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
  },
  {
    id: '1',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/10z_ICrcaEQ4aGWin4UNOxTUkivA2B6A0',
    title: 'Творческое занятие',
    category: 'Творчество'
  },
  {
    id: '2',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1mysF4dRuF-qDrfHvwN4m6o4kFHfYkRy2',
    title: 'Игры в мини-саду',
    category: 'Мини-сад'
  },
  {
    id: '3',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1edCBkm6Gw6W18wcAD_gJSE9V2wy7tYRr',
    title: 'Урок рисования',
    category: 'ИЗО-студия'
  },
  {
    id: 'v1',
    type: 'video',
    url: 'https://drive.google.com/file/d/1emDft7xkTwMhF4yYxgJs0cLJ-Kj_X_GL/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1emDft7xkTwMhF4yYxgJs0cLJ-Kj_X_GL',
    title: 'Наши будни',
    category: 'Обзор'
  },
  {
    id: '5',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1uAsb3U38ebeI5AuYQmZcPJvTuQwtRowG',
    title: 'Праздник осени',
    category: 'Мероприятия'
  },
  {
    id: '6',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1-O63m9yvLQ2vd-JPuKxA0FOwG0hzgw9h',
    title: 'Занятия по английскому',
    category: 'Обучение'
  },
  {
    id: 'v2',
    type: 'video',
    url: 'https://drive.google.com/file/d/1h6EDTzyK-xocQS9Zu9u6HaS0Nwdclipx/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1h6EDTzyK-xocQS9Zu9u6HaS0Nwdclipx',
    title: 'Творческий процесс',
    category: 'Творчество'
  },
  {
    id: '8',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/13349oQ2sT3cIeTjcWGlfyFHvcYRnLRv3',
    title: 'Мастер-класс по лепке',
    category: 'Творчество'
  },
  {
    id: '9',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/d/1jifQMTjYfPxwEsDChiw5tzDz-F-NFk0F',
    title: 'Прогулка на площадке',
    category: 'Мини-сад'
  },
  {
    id: 'v3',
    type: 'video',
    url: 'https://drive.google.com/file/d/1_Khf7SFDYISmPgeXS-vIx4mLj9H9iNr8/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1_Khf7SFDYISmPgeXS-vIx4mLj9H9iNr8',
    title: 'Веселые игры',
    category: 'Мини-сад'
  },
  {
    id: 'v4',
    type: 'video',
    url: 'https://drive.google.com/file/d/1awJL_BdN9t0-MsiV-OGPfuVg3cRkxqki/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1awJL_BdN9t0-MsiV-OGPfuVg3cRkxqki',
    title: 'Занятия в центре',
    category: 'Обучение'
  },
  {
    id: 'v5',
    type: 'video',
    url: 'https://drive.google.com/file/d/1JabthVgw7-BKhoFqcmzJDWTTwWE9icVN/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1JabthVgw7-BKhoFqcmzJDWTTwWE9icVN',
    title: 'Наши праздники',
    category: 'Мероприятия'
  },
  {
    id: 'v6',
    type: 'video',
    url: 'https://drive.google.com/file/d/1haZXcDaz64BrzhL5DhgegtUQ-FjFFPL6/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1haZXcDaz64BrzhL5DhgegtUQ-FjFFPL6',
    title: 'Моменты радости',
    category: 'Жизнь центра'
  },
  {
    id: 'v7',
    type: 'video',
    url: 'https://drive.google.com/file/d/12ZQLta04J73A2Ni4GyTdlvPtzEpFuZoO/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/12ZQLta04J73A2Ni4GyTdlvPtzEpFuZoO',
    title: 'Увлекательные уроки',
    category: 'Обучение'
  },
  {
    id: 'v8',
    type: 'video',
    url: 'https://drive.google.com/file/d/1-faJExS5Q5VFRQSHM091AFgSwTrOpK-u/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1-faJExS5Q5VFRQSHM091AFgSwTrOpK-u',
    title: 'Развивающие игры',
    category: 'Мини-сад'
  },
  {
    id: 'v9',
    type: 'video',
    url: 'https://drive.google.com/file/d/1rYXR6__QY2GWyb2kkM-21mSojMswpNsF/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1rYXR6__QY2GWyb2kkM-21mSojMswpNsF',
    title: 'Творческая мастерская',
    category: 'Творчество'
  },
  {
    id: 'v10',
    type: 'video',
    url: 'https://drive.google.com/file/d/1TGovSnZQbh-got6RoimdMQsmeSh5Sth1/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1TGovSnZQbh-got6RoimdMQsmeSh5Sth1',
    title: 'Наши успехи',
    category: 'Обучение'
  },
  {
    id: 'v11',
    type: 'video',
    url: 'https://drive.google.com/file/d/1L4jUQdGa6_8n5I1rGYQuu1WPzg4Z6c5T/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1L4jUQdGa6_8n5I1rGYQuu1WPzg4Z6c5T',
    title: 'Будни в саду',
    category: 'Мини-сад'
  },
  {
    id: 'v12',
    type: 'video',
    url: 'https://drive.google.com/file/d/19lTyIbhAuYGlFmsDPweKWojWmHxv-aY8/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/19lTyIbhAuYGlFmsDPweKWojWmHxv-aY8',
    title: 'Интересные занятия',
    category: 'Обучение'
  },
  {
    id: 'v13',
    type: 'video',
    url: 'https://drive.google.com/file/d/1sArk_9tmbO5PHRxNYxzyPqZ_-nBKYmh0/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1sArk_9tmbO5PHRxNYxzyPqZ_-nBKYmh0',
    title: 'Наши открытия',
    category: 'Жизнь центра'
  },
  {
    id: 'v14',
    type: 'video',
    url: 'https://drive.google.com/file/d/1BlR7wm2MSuc-3FgZJNspXZEj9q6jV6ut/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1BlR7wm2MSuc-3FgZJNspXZEj9q6jV6ut',
    title: 'Счастливые моменты',
    category: 'Жизнь центра'
  },
  {
    id: 'v15',
    type: 'video',
    url: 'https://drive.google.com/file/d/1r8jjrnlLXTM4UoJg_opzMCUAqpH-fTO3/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1r8jjrnlLXTM4UoJg_opzMCUAqpH-fTO3',
    title: 'Мастер-классы',
    category: 'Творчество'
  },
  {
    id: 'v16',
    type: 'video',
    url: 'https://drive.google.com/file/d/1QxRyFLge76xsIo_2TbYIqfWThZjdxgPy/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1QxRyFLge76xsIo_2TbYIqfWThZjdxgPy',
    title: 'Наши праздники',
    category: 'Мероприятия'
  },
  {
    id: 'v17',
    type: 'video',
    url: 'https://drive.google.com/file/d/1mvjidu3rzRiK2EMWW1mPksAxUjXFvFiv/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1mvjidu3rzRiK2EMWW1mPksAxUjXFvFiv',
    title: 'Веселые старты',
    category: 'Спорт'
  },
  {
    id: 'v18',
    type: 'video',
    url: 'https://drive.google.com/file/d/1pCRgjXOb_smEu4xEzlOwEahk0gfrEYP-/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1pCRgjXOb_smEu4xEzlOwEahk0gfrEYP-',
    title: 'Наши прогулки',
    category: 'Мини-сад'
  },
  {
    id: 'v19',
    type: 'video',
    url: 'https://drive.google.com/file/d/1HeRDPJsVG8mp9N3Jlurf-Fbr1xUaitfE/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1HeRDPJsVG8mp9N3Jlurf-Fbr1xUaitfE',
    title: 'Занятия музыкой',
    category: 'Творчество'
  },
  {
    id: 'v20',
    type: 'video',
    url: 'https://drive.google.com/file/d/1oCpcFO-c906uAeS17WX4D-dSQoAcm1NW/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1oCpcFO-c906uAeS17WX4D-dSQoAcm1NW',
    title: 'Наши танцы',
    category: 'Творчество'
  },
  {
    id: 'v21',
    type: 'video',
    url: 'https://drive.google.com/file/d/13g0-iiWfcyWN8sBMXlX6LLQ72fXHaoMj/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/13g0-iiWfcyWN8sBMXlX6LLQ72fXHaoMj',
    title: 'Уроки английского',
    category: 'Обучение'
  },
  {
    id: 'v22',
    type: 'video',
    url: 'https://drive.google.com/file/d/14Hm3tZxMl26s6hgIXpDQPmyHttIw25R7/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/14Hm3tZxMl26s6hgIXpDQPmyHttIw25R7',
    title: 'Наши игры',
    category: 'Мини-сад'
  },
  {
    id: 'v23',
    type: 'video',
    url: 'https://drive.google.com/file/d/10QcPlOD9sL2p9XJR59O_RCYS2W-KXXuD/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/10QcPlOD9sL2p9XJR59O_RCYS2W-KXXuD',
    title: 'Творческие успехи',
    category: 'Творчество'
  },
  {
    id: 'v24',
    type: 'video',
    url: 'https://drive.google.com/file/d/1QcgkPZTTclec5OwDZvg0JNNMhWeMUh1R/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1QcgkPZTTclec5OwDZvg0JNNMhWeMUh1R',
    title: 'Наши будни',
    category: 'Жизнь центра'
  },
  {
    id: 'v25',
    type: 'video',
    url: 'https://drive.google.com/file/d/1pQ8xU0wLHw1jj5Xo7fDVft-dUfD29rpe/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1pQ8xU0wLHw1jj5Xo7fDVft-dUfD29rpe',
    title: 'Веселые моменты',
    category: 'Жизнь центра'
  },
  {
    id: 'v26',
    type: 'video',
    url: 'https://drive.google.com/file/d/1xHcbwOXsbPDqgBtjtPj8YX9qtizcCd32/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1xHcbwOXsbPDqgBtjtPj8YX9qtizcCd32',
    title: 'Наши занятия',
    category: 'Обучение'
  },
  {
    id: 'v27',
    type: 'video',
    url: 'https://drive.google.com/file/d/1_vH6QvB9iG-vTksqlG-vo5FWJWw2kVwI/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1_vH6QvB9iG-vTksqlG-vo5FWJWw2kVwI',
    title: 'Творческие моменты',
    category: 'Творчество'
  },
  {
    id: 'v28',
    type: 'video',
    url: 'https://drive.google.com/file/d/1usWFj-DBAIGQTgKuQazPM2Aw6w_d0cIT/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1usWFj-DBAIGQTgKuQazPM2Aw6w_d0cIT',
    title: 'Наши игры',
    category: 'Мини-сад'
  },
  {
    id: 'v29',
    type: 'video',
    url: 'https://drive.google.com/file/d/1ggmyexf3CzxDUr1NwNs0i2b__32QfxuF/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1ggmyexf3CzxDUr1NwNs0i2b__32QfxuF',
    title: 'Веселые будни',
    category: 'Жизнь центра'
  },
  {
    id: 'v30',
    type: 'video',
    url: 'https://drive.google.com/file/d/1H_YOfDX30Rh74nK3Ir-XNqvnF_rqmgEr/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1H_YOfDX30Rh74nK3Ir-XNqvnF_rqmgEr',
    title: 'Наши занятия',
    category: 'Обучение'
  },
  {
    id: 'v31',
    type: 'video',
    url: 'https://drive.google.com/file/d/1oGwH6DdhJKLqtX_pkt4w1cst85igEDoj/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1oGwH6DdhJKLqtX_pkt4w1cst85igEDoj',
    title: 'Творческие успехи',
    category: 'Творчество'
  },
  {
    id: 'v32',
    type: 'video',
    url: 'https://drive.google.com/file/d/1GwoZgVc4Ch3R6AB29TCFZYdO58Skq9_6/preview',
    thumbnail: 'https://lh3.googleusercontent.com/d/1GwoZgVc4Ch3R6AB29TCFZYdO58Skq9_6',
    title: 'Наши моменты',
    category: 'Жизнь центра'
  }
];
