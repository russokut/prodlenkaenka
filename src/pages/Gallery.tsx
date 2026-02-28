import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, Play, X, ChevronLeft, ChevronRight, Maximize2, Filter, Share2, Instagram, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../constants';
import { Link } from 'react-router-dom';

type MediaType = 'photo' | 'video';

interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = React.useRef<HTMLDivElement>(null);

  const media: MediaItem[] = [
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
    },
    // New Photos Batch
    { id: 'n1', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1eSgwSLtZtqH00R9CdswGQF5Pj4kbwH47', title: 'Наши будни', category: 'Жизнь центра' },
    { id: 'n2', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1g24TgNR3-fvq5kpu7F2sgS7EoEywyliq', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n3', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1e6ZB0A-ecmoekjA2pfx3nTIACDcgDKIu', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n4', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1gHrlQxTuxkPCturXS4Fi-qxkA2qvMEuk', title: 'Веселые игры', category: 'Мини-сад' },
    { id: 'n5', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1kRl4C8cq11HXwnPlG4qX_do-r68ycCnB', title: 'Урок рисования', category: 'Творчество' },
    { id: 'n6', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tCUR3FQanPjbUGnmsTV3KTSMIhAcW90T', title: 'Развивающие игры', category: 'Обучение' },
    { id: 'n7', type: 'photo', url: 'https://lh3.googleusercontent.com/d/14eLVP43CeUYAmILq_W1PibtSTNWnJmdy', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n8', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11KQvW_QdTqTDm0eLiKr7To7rMWHU9cAB', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n9', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1ed0rQqO5ZL_vx_pxsdp-knk9LgGAtH63', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n10', type: 'photo', url: 'https://lh3.googleusercontent.com/d/18jj92e-dijCUNgn5Lgn4RqrLeodd5oHM', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n11', type: 'photo', url: 'https://lh3.googleusercontent.com/d/10bH1LGAmmXj4ZI_yt4J-zmMJ4qO-B-bi', title: 'Наши открытия', category: 'Обучение' },
    { id: 'n12', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1WHkfHpa01YbAjb60AeP6icYmmkXo0nwE', title: 'Будни центра', category: 'Жизнь центра' },
    { id: 'n13', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1UjDPaGu5fXsexnyzmfuWI7Q3aAve8C6C', title: 'Интересные уроки', category: 'Обучение' },
    { id: 'n14', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tnbJSlnq9liJW5Cy7_a6wTxbj9bfm7Eo', title: 'Игры на воздухе', category: 'Мини-сад' },
    { id: 'n15', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1dtKCiF5xsa-dub85lJzuNwUgV4VT_Teq', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n16', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1dKtvZ6TIxTK809zQ-H7-hEV-vXXcvdph', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n17', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1nB8l27xUAsW8gN-US9ZPvKJVJIJ14PTM', title: 'Счастливое детство', category: 'Жизнь центра' },
    { id: 'n18', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1R1eZiCAhN6bpXXkR8DmR4M6DYV-cG02t', title: 'Развитие и игра', category: 'Мини-сад' },
    { id: 'n19', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1xmup6TTfCEMzlmVhju1UvIl0f0ZrBrls', title: 'Мастер-классы', category: 'Творчество' },
    { id: 'n20', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1934VXXOVgomGyH6we6CUMV_5XUetDrRw', title: 'Наши праздники', category: 'Мероприятия' },
    { id: 'n21', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1lBNdi44bcG8MCJ9MFGfLTAv-m2PVxqz6', title: 'Будни в саду', category: 'Мини-сад' },
    { id: 'n22', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1i945d62H-gC8B_Qq6jc_IBWgBoMJaRkZ', title: 'Увлекательные занятия', category: 'Обучение' },
    { id: 'n23', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1R6ebFKeAO6IpKNTbyS0SrUokuqJO89JJ', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n24', type: 'photo', url: 'https://lh3.googleusercontent.com/d/13poSIFJfIDG_GwWkwGdD3Zhc9WS2PrLY', title: 'Наши игры', category: 'Мини-сад' },
    { id: 'n25', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1cKu3JKivy0hFBqZcJre4O7wNrwwp0lEh', title: 'Моменты обучения', category: 'Обучение' },
    { id: 'n26', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1hzk5M_uZHMckq9D_yXUTBZbYgWJNW9ji', title: 'Жизнь в центре', category: 'Жизнь центра' },
    { id: 'n27', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1zPacCRnOi_09IUgHOZ7jkRUtRm-WFtzr', title: 'Творческая атмосфера', category: 'Творчество' },
    { id: 'n28', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1hyjQ_tHoe0tTROqXHhHn8jJJHolp8bm_', title: 'Занятия в мини-саду', category: 'Мини-сад' },
    { id: 'n29', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11ruN5egptCxrdkKsjN37pixOPLZtLwNv', title: 'Наши открытия', category: 'Обучение' },
    { id: 'n30', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1rItf5bsMhkQxWqEgDyQFRf4Po85Sm7Y1', title: 'Веселые моменты', category: 'Жизнь центра' },
    { id: 'n31', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1_evYUFJOhVs402n6d8xkHIy_L5ynsLiK', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n32', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1WBTDQIdfw9RVxbQskMa-5HP3P1B-n1-Z', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n33', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1jZHNldc50OkcTAB5d7QROTo1x6gFmOCR', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n34', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1wo4mfIMV1CxV8kxQzqjdigEvdtVLuWGn', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n35', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tId5j8j8dKa5lfdFSzG9l-cx9w_9RNkD', title: 'Творческие работы', category: 'Творчество' },
    { id: 'n36', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1A2dUlkfDKJu0BKxbUoDY49NB6iolJRE9', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n37', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1XjxPLQyMQXJSmtRpd3entJDwWDrrKCIS', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n38', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1A29axdASS9gc7csNTb3Xou9sUaEpuR3h', title: 'Счастливые дети', category: 'Жизнь центра' },
    { id: 'n39', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1VVgov9THMrm0hIymJtRvqayDiQ53GIld', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n40', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1WYmCHDqtWTW9MpfYxz4EEW0jQNwqOUan', title: 'Игры в группе', category: 'Мини-сад' },
    { id: 'n41', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1GPB8R7d8ebUrKWS6cXFg1C0yF8oLwrvb', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n42', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1ERJTEWAkE4e49haw5-yIgcvFHowKjKMO', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n43', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1BZKvu9tDyQ369lkO8hZV0QuwBbB2xjJw', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n44', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1XFh_zK-20oW7m9s-MKh6oze-161OVaki', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n45', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1lPqp_KsEV-vxfH9DkwuPIKTR5_TIQxnA', title: 'Наши открытия', category: 'Обучение' },
    { id: 'n46', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1KP8Oxbks05tSymxa6pb-6CjyRcY4tWKo', title: 'Будни центра', category: 'Жизнь центра' },
    { id: 'n47', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1t-wxQhRERFqZCHJhnau52B_4PLdhOk1o', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n48', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1y_M95n4VHIEjBsahFQFq9Uzs3sqqKjNN', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n49', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1lu07THxrqZm-T5x1t3zeeOkT3PVbplB0', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n50', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1rMibVD9JXy-k8Jg46LEgZooiyh9fYj17', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n51', type: 'photo', url: 'https://lh3.googleusercontent.com/d/19khuOorogKcs6iNZ60LYjVUTB61XFaz8', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n52', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1poKIYJ9bMeaqJWWOo-hZ4hlXgSoRda7Z', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n53', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1L_cP8a8g7lq6T8AaXd4Ib5NmwhbfwpuB', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n54', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Ar3CgRiBng-pdfqjLYZuYuvL8GEY9fjn', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n55', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1hT3zDCj2e56xT851u5Fz16RKED44GrA5', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n56', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1bk9EPUbH8OVXtJzO8OQitwoCy2QFf_I9', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n57', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1TubuLmqchSwgP3wWeWffRr6OTyI5_OuT', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n58', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1cotp_TzezzyTBUNfXFKrQ1hZpicYBVqX', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n59', type: 'photo', url: 'https://lh3.googleusercontent.com/d/12aPTeAw9nV796d0dPQ9p-EaacFIGxJ0W', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n60', type: 'photo', url: 'https://lh3.googleusercontent.com/d/18F8M6T_OSpesg1iNZ0lgiGbzRsKTLgQ9', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n61', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1FbjTta1exMfJGc2ZI7-vchuXCAlzw-zQ', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n62', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1dFn8TkHhHClginAVgFr-XICDYOnVxjB3', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n63', type: 'photo', url: 'https://lh3.googleusercontent.com/d/19bxWTSg-1SMIRwgOMcmvMEswnmlNKIoq', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n64', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1ilfSADVa75vHGslSEprTaI-dSzjwHH0e', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n65', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1qZho3NrwFWHb0bN3r4QN3cSQc494Do6O', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n66', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tfLYDwotgIGotosJAW0mUPkaVP27vg40', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n67', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1s3YDMXiLbuDM2BG2s1mJztdrDKDpFO5Y', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n68', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1JF5EFqKk-O3w84dk-M8p5-Il8tujQdk7', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n69', type: 'photo', url: 'https://lh3.googleusercontent.com/d/19xUkR835EW-2mw2l_EACbX6Xx4UqmfeB', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n70', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1v6VOD_FDXy1c6PWPHPm0olkXwmIyYUed', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n71', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1aMol6D9xznQgd2dH9iupesLb6YJv9qnZ', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n72', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1TXhsuFi4PaodCe0PrLNfNj77PzYKeFzQ', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n73', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11Dt-FjxZ87wg6ZxwgNE1TRWWxEgKrW6X', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n74', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Qlc04BDhO7Q5Xs5n7DwMZ5fc850HIwi3', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n75', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11k1q0FCe1z-hDuYDNbF8sQV6BCxCIlEI', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n76', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1jWKinwtCQ3pK_p-WIbtC4z4n52bEgFf9', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n77', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1eTkdaI7fexPtewCEF4CfPdzOhJvxM2v3', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n78', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1P-_6Id-xDAhl-0fMnSqoUdhtDP3NZm56', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n79', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1wVPXBkNuzX6i6mWuXxmTWD8gJYmcG69-', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n80', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1jh_X4ZUKJqbNB_L0vwmU8d48gyv6CVxk', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n81', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1L_UeZ2k-taM6ecHMx5qfCv93xLcD-twH', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n82', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1d1nCd57qEgvwayJA0PQstdsnQC5huS5F', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n83', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1avzqubJ3HocwC2-n9MMH9f1qB1J33afA', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n84', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1jdudnU39YAPJt8TKjq_RRRF5EydgPaAr', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n85', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1y0jGxRnBuCIWCwClKE-HaJkHg6Fnwok0', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n86', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1f36QX0hJPWRA5eqm5H3rD0f03BVArzvQ', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n87', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1xCOAbdSfub1UBp3FheyUlL-dJ87qRwWW', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n88', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11mnA1BTLclZs70y5gzuCmhxAzd3Q-Afp', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n89', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Fri9FzwkVxr30iLHjtikriYfC1RNi6GQ', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n90', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1wjktitJih2EU110-VYukIsOuVW-lmp0M', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n91', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1rfyOB2WCYZatXTRk6RE7CZNNw9ZxYCEy', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n92', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1VveyoYHhq_JRZbu9QxvhKn4LBfbL_Roz', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n93', type: 'photo', url: 'https://lh3.googleusercontent.com/d/12kfznYp4uj_q8pdjM1nRW-3kBRcPHkzd', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n94', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1FQq5fc_6AotAFZ28CKjmAKdoj0LKpcNR', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n95', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1eDrPyUqjRKQfQmxPIdaUTWeyOUnvD1Lq', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n96', type: 'photo', url: 'https://lh3.googleusercontent.com/d/13c7g1-bMK0YiHRpzcri3dGMTlsxA9caQ', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n97', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1CL4bArRcPfH0i_QbIZUQc6kO1ZOSfMmi', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n98', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1XiREkR9DQ5BlxZS7cup8079sUhgKcbzF', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n99', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Y1v18JnlkKn3B-8RX0ELWQvU07Zg6-Tg', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n100', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1YJ9sawt6DAAW9vnfjIYDIhl9drsF-cDk', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n101', type: 'photo', url: 'https://lh3.googleusercontent.com/d/18qmXGmGfElJyYhrXZdxggOAJc1TS4dmd', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n102', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1cueAWazyRHrQD_rByEdHH4I0Gvt7mncU', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n103', type: 'photo', url: 'https://lh3.googleusercontent.com/d/131hi9WCLnH2ynEsnzCpRLZgKnMxLDp75', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n104', type: 'photo', url: 'https://lh3.googleusercontent.com/d/17CshsU0O5WPwhFo5TrR90qSeJI0huy6l', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n105', type: 'photo', url: 'https://lh3.googleusercontent.com/d/10a5-7551froHfSjxHR7muvBGBaR8SqtD', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n106', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1gwYzKuYw3o0oqM88sLi1olUTPRyATxT6', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n107', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1KE5R7LENwsOOc1pQn8RFotrzlhxiZ4P6', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n108', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Lu483AipOMxf4WoLAiRsHlJ0wuQYYj-q', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n109', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1BW5nJkCheSkqQjmpEn7GGSjbC64VWucO', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n110', type: 'photo', url: 'https://lh3.googleusercontent.com/d/10wungyOfUq1is1_eSx3Fblmhc7aSIeYf', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n111', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1fGRQIdgpQYA9wk8E5SBSyLFZKq5V4oc1', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n112', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1T7gVaH0WINSgg0x4sddm6nddmZhAwj_e', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n113', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1fvzrg_d50ziy6MU15nD95pl-kKKjYPQQ', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n114', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1CZQ2j3Gu8XkeXgGZAXfZ0uz9LgBJCsME', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n115', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1NWQBqPzgF5cur8xZxlTzUE5zMQosIJZR', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n116', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1iv_w-5SnqHyO3T_EvvW30fRxgQOWSeaX', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n117', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1ksbmoXfBq-KR_zjwpR8sdxL7lM4y2Zmg', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n118', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1ZCycqMSvOA4KcdvWUaqWvPMH6dK2aZsJ', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n119', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1o9VIxblv45KPwn0TdWUhEILwiMBjyVpE', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n120', type: 'photo', url: 'https://lh3.googleusercontent.com/d/15bMlgq7guger-H7_BvUCBoGz_AegoCTA', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n121', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1K1bLzuzeL4vK0h02gp6GVnSBU7vU1X0-', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n122', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1AiX0LYzhQxAmv5kOkJ8yp98y9NPqG3ng', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n123', type: 'photo', url: 'https://lh3.googleusercontent.com/d/13zKN7E1Qda9CyvVbqsTW8j6MprJan_gU', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n124', type: 'photo', url: 'https://lh3.googleusercontent.com/d/18XqKjbuucddAOFEVYlu8uy-6gWVdIHbg', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n125', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Ff91EQ3OMoDVFXoeM56SPUY1yJ_Ooisk', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n126', type: 'photo', url: 'https://lh3.googleusercontent.com/d/10X6-ggftm3Vip0jdNYufUsp7Byva556k', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n127', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1lZ5tmIt7NY60h4pEIaHJrM4YrrrmR5oz', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n128', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1lZJO0dQpMTAdBQ8SFympbPKnqXkJ6Ly4', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n129', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tLxVWuf1CtK4F-_jF7BZ_-igvulFlg5i', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n130', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1yPunQuQ2b1jzYbpJsBWiu0kuqvSAm04a', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n131', type: 'photo', url: 'https://lh3.googleusercontent.com/d/17AR1vzotjE4UocaQJK_nrZfgF3M_1WIb', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n132', type: 'photo', url: 'https://lh3.googleusercontent.com/d/18eNfpuL7WIX6nsrfYH21hbbt_Et_7QhY', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n133', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1xrPOCPhL56KPX69LoUMJrlyExuvFsSvw', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n134', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1mHn1sqSBajIX7EL6pkp9ZRYVKrn7z2mo', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n135', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1DNRHIB7rbgpcGXq7TT0aRIxqj0s0cJMk', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n136', type: 'photo', url: 'https://lh3.googleusercontent.com/d/16YJpRGzPmxKlvQQTlj0N_U0WTl7VamMG', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n137', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Zi4641tQ3TKCbCwC1PX59Ypw7AuHdBPE', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n138', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1hwkqthZUMKLlTIl542Ez1HFJ1YofICx9', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n139', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Pwqh6B_PTMtlRdzer1RY1KddrJNaoYSb', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n140', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1GvKMHyd8i2FkogXjrYiw1gqnu8It10_1', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n141', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1wTPbhVhbzh5HA-FnLziX8A5cfuDpEfAr', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n142', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1tG3GXi63rbBLakBax0DcZkNqQO0qo7Yv', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n143', type: 'photo', url: 'https://lh3.googleusercontent.com/d/11WAv1Jyrf3qBMY80Aw4JMqVIL0SiW1X1', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n144', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1jigO-gouDnYcS_94Jlc75_jYEavJACIs', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n145', type: 'photo', url: 'https://lh3.googleusercontent.com/d/15gYktqlnWL2OdGHJp2Q6rYAQQ8Xw-MpL', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n146', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1k_w6vJZuCLM0aEZh453fm4Wjvd_BxFYd', title: 'Веселые будни', category: 'Жизнь центра' },
    { id: 'n147', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1vxzFxkCywi1JxsZ8zl0DYg2lRIBA0NNz', title: 'Творческие успехи', category: 'Творчество' },
    { id: 'n148', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1Djnj-JeRQ2ZWskigkdae0YRdWzWF1lFd', title: 'Занятия в группе', category: 'Мини-сад' },
    { id: 'n149', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1PXzIMKNTPhl9qYGxpZsB6TdglyxwGFZ2', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n150', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1GGxvGFlMeGlWQYjkl1LaUqC8Yp7SZA3x', title: 'Счастливые моменты', category: 'Жизнь центра' },
    { id: 'n151', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1xcXlV9XTUOZilB5L9O5pjAxTKu4YJgHe', title: 'Творческая мастерская', category: 'Творчество' },
    { id: 'n152', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1kYS8N5PW4vprc85hVDY8DYLbIUvuTVgu', title: 'Игры в саду', category: 'Мини-сад' },
    { id: 'n153', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1A7D6RVNxdCWEQx1_XYLzICONvrmM3WgH', title: 'Наши занятия', category: 'Обучение' },
    { id: 'n154', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1_vkKx0YNtR0ubGt5IMypyW4kqbUK7X_F', title: 'Будни в центре', category: 'Жизнь центра' },
    { id: 'n155', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1j5pR0K2ZdB_gKbnN890z8rf54SVwsxzK', title: 'Творческие моменты', category: 'Творчество' },
    { id: 'n156', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1PRQRq6tJyNu_n4x54vrpCfx2jTLyJ0Ot', title: 'Занятия в саду', category: 'Мини-сад' },
    { id: 'n157', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1NTp6tZ-BshiVeTc8ljLRuiFa-Lb8nBJR', title: 'Наши успехи', category: 'Обучение' },
    { id: 'n158', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1WSoJlYbXXaU7nx5GD-Bz0QgI1VjgY8fX', title: 'Моменты радости', category: 'Жизнь центра' },
    { id: 'n159', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1v4MbKPW5nvUZS9FRRTUz6SHpI1U2H0og', title: 'Творческий процесс', category: 'Творчество' },
    { id: 'n160', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1v21-rr-U1fzI6lnVD4Odq0PJzP9vQgm6', title: 'Игры и развитие', category: 'Мини-сад' },
    { id: 'n161', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1eex-5OUU_sPpMIU0W1I8cRs-oTlym_8K', title: 'Наши уроки', category: 'Обучение' },
    { id: 'n162', type: 'photo', url: 'https://lh3.googleusercontent.com/d/1NLiTRkmOg6uSaMSD5pZTJc_QAkJuGNJf', title: 'Веселые будни', category: 'Жизнь центра' },
  ];

  // Logic for "All Moments" - we want a good mix
  const allMoments = React.useMemo(() => {
    const photos = media.filter(m => m.type === 'photo');
    const videos = media.filter(m => m.type === 'video');
    const mixed: MediaItem[] = [];
    const maxLen = Math.max(photos.length, videos.length);
    
    for (let i = 0; i < maxLen; i++) {
      if (videos[i]) mixed.push(videos[i]);
      if (photos[i]) mixed.push(photos[i]);
    }
    return mixed;
  }, []);

  const filteredMedia = React.useMemo(() => {
    if (filter === 'all') return allMoments;
    return media.filter(item => item.type === filter);
  }, [filter, allMoments]);

  const displayedMedia = filteredMedia.slice(0, visibleCount);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(12);
  }, [filter]);

  // Infinite scroll / Lazy load logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredMedia.length) {
          setVisibleCount(prev => prev + 12);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredMedia.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + displayedMedia.length) % displayedMedia.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % displayedMedia.length);
    }
  };

  const handleClose = () => setSelectedItemIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, displayedMedia]);

  return (
    <div className="py-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Лучшие моменты</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Яркие будни, творческие успехи и веселые праздники в нашем центре
          </p>
        </motion.div>

        {/* Filters / Tabs */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="inline-flex p-2 bg-white rounded-[32px] shadow-xl border border-slate-100">
            {[
              { id: 'all', label: 'Все моменты', icon: Filter },
              { id: 'photo', label: 'Фотографии', icon: ImageIcon },
              { id: 'video', label: 'Видео-обзоры', icon: Video },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-[24px] font-bold transition-all duration-300",
                  filter === btn.id 
                    ? "bg-brand-blue text-white shadow-lg scale-105" 
                    : "bg-transparent text-slate-500 hover:text-brand-blue"
                )}
              >
                <btn.icon className="w-5 h-5" />
                <span className="hidden md:inline">{btn.label}</span>
                <span className="md:hidden">{btn.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              Яркие <span className="text-brand-blue">фото-отчеты</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full my-auto" />
            <div className="flex items-center gap-2">
              Живые <span className="text-brand-blue">видео-моменты</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {displayedMedia.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItemIndex(index)}
                className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all break-inside-avoid bg-white"
              >
                {item.type === 'photo' ? (
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="relative aspect-video">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-transform border border-white/50">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-display font-bold">{item.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Trigger */}
        {visibleCount < filteredMedia.length && (
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center mt-12">
            <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Empty State */}
        {displayedMedia.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Ничего не найдено</h3>
            <p className="text-slate-500">Попробуйте изменить фильтр</p>
          </div>
        )}

        {/* Marketing CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-brand-coral rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Хотите увидеть своего ребенка здесь?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Запишитесь на бесплатную экскурсию в наш центр и посмотрите своими глазами, как мы создаем счастливое детство
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://t.me/prodlenka_enka?text=Здравствуйте! Посмотрел галерею, хочу записаться на экскурсию"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-coral px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-brand-yellow hover:text-slate-800 transition-all shadow-xl flex items-center gap-3"
              >
                Записаться на экскурсию
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link to="/contacts" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-white/20 transition-all">
                Наши контакты
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-[110] backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 md:left-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110] backdrop-blur-sm"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-0 md:right-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110] backdrop-blur-sm"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <motion.div
                key={selectedItemIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {displayedMedia[selectedItemIndex].type === 'photo' ? (
                  <img 
                    src={displayedMedia[selectedItemIndex].url} 
                    alt={displayedMedia[selectedItemIndex].title} 
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full aspect-video max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <iframe 
                      src={displayedMedia[selectedItemIndex].url} 
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <div className="mt-8 text-center max-w-2xl">
                  <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-2 block">
                    {displayedMedia[selectedItemIndex].category}
                  </span>
                  <h4 className="text-white text-3xl font-display font-bold mb-6">
                    {displayedMedia[selectedItemIndex].title}
                  </h4>
                  
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex gap-4">
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <Instagram className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <Send className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="flex items-center gap-2 px-6 h-12 bg-brand-blue hover:bg-brand-blue/80 rounded-full text-white font-bold transition-all shadow-lg">
                        <Share2 className="w-4 h-4" />
                        Поделиться
                      </button>
                    </div>
                    <p className="text-white/40 text-sm">
                      Элемент {selectedItemIndex + 1} из {displayedMedia.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
