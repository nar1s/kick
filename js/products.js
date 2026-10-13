/*
  КАТАЛОГ KICK
  Чтобы изменить позицию или фото — правьте только этот файл.

  Поля:
    id      — уникальный код (латиница, без пробелов)
    name    — заголовок карточки
    surface — покрытие / назначение (короткая метка на карточке)
    desc    — одна строка описания
    photo   — путь к фото (пока у всех одно)
*/

const DEFAULT_PHOTO = 'img/boots.jpg';

const PRODUCTS = [
  { id: 'boots-fg', name: 'Бутсы', surface: 'Натуральный газон', desc: 'Шипы для сцепления на траве, лёгкий верх.', photo: DEFAULT_PHOTO },
  { id: 'boots-ag', name: 'Бутсы', surface: 'Искусственный газон', desc: 'Короткие частые шипы для синтетики.', photo: DEFAULT_PHOTO },
  { id: 'boots-tf', name: 'Бутсы', surface: 'Жёсткий грунт', desc: 'Многошиповка для твёрдых полей и коробок.', photo: DEFAULT_PHOTO },
  { id: 'boots-kids', name: 'Бутсы', surface: 'Детские', desc: 'Лёгкие бутсы для юных футболистов.', photo: DEFAULT_PHOTO },
  { id: 'futsal', name: 'Футзалки', surface: 'Зал', desc: 'Плоская нескользящая подошва.', photo: DEFAULT_PHOTO },
  { id: 'futsal-street', name: 'Футзалки', surface: 'Зал и асфальт', desc: 'Для мини-футбола в зале и на улице.', photo: DEFAULT_PHOTO },
  { id: 'futsal-kids', name: 'Футзалки', surface: 'Детские', desc: 'Удобные футзалки для детских секций.', photo: DEFAULT_PHOTO },
  { id: 'sneakers', name: 'Кроссовки', surface: 'Город', desc: 'Повседневные кроссовки на каждый день.', photo: DEFAULT_PHOTO },
  { id: 'running', name: 'Кроссовки', surface: 'Бег', desc: 'Лёгкие кроссовки для бега.', photo: DEFAULT_PHOTO },
  { id: 'training', name: 'Кроссовки', surface: 'Тренировки', desc: 'Для зала, кроссфита и разминки.', photo: DEFAULT_PHOTO },
];
