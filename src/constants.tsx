import type { Category } from './types';
import { PaintBrushIcon, MusicalNoteIcon, CakeIcon } from '@heroicons/react/24/outline';

export const CATEGORIES: Category[] = [
  {
    id: 'portraits',
    title: 'Портреты на холсте',
    description: 'Закажите эксклюзивный портрет на холсте по фото. Художник Артем Пономарев превратит вашу фотографию в настоящее произведение искусства. Идеальный подарок на день рождения, юбилей или свадьбу. Гарантируем высокое качество и ручную работу.',
    performer: 'Артем Пономарев',
    performerBio: 'Превращаю фото в вечные воспоминания на холсте. Более 10 лет опыта в живописи.',
    performerAvatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100',
    icon: (props) => <PaintBrushIcon {...props} />,
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    options: [
      { id: 'oil', name: 'Масло', price: 'от 5000₽', imageUrl: 'https://images.unsplash.com/photo-1599749021903-891395539137?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Классический стиль с использованием масляных красок. Создает глубокие, насыщенные цвета и текстуру. Такой портрет будет выглядеть солидно и прослужит десятилетия.' },
      { id: 'watercolor', name: 'Акварель', price: 'от 3500₽', imageUrl: 'https://images.unsplash.com/photo-1513360371669-44de1e7ade2b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Легкий и воздушный стиль. Акварель придает портрету нежность и свежесть. Идеально подходит для женских и детских портретов.' },
      { id: 'digital', name: 'Digital Art', price: 'от 2500₽', imageUrl: 'https://images.unsplash.com/photo-1617797721858-008c9c7f1f6c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Современная техника, создаваемая на графическом планшете. Позволяет добиться высокой детализации и стилизации под любой жанр. Отправляется в цифровом виде или печатается на холсте.' },
    ],
    orderSteps: [
      { id: 'style', title: 'Выберите стиль', description: 'Определите внешний вид вашего портрета.', component: 'style' },
      { id: 'upload', title: 'Загрузите фото', description: 'Нам нужно качественное фото для работы.', component: 'upload' },
      { id: 'details', title: 'Добавьте детали', description: 'Любые пожелания и комментарии.', component: 'details' },
      { id: 'confirm', title: 'Подтверждение', description: 'Проверьте и подтвердите ваш заказ.', component: 'confirm' },
    ],
    faq: [
        { question: "Какие фотографии подходят для портрета?", answer: "Лучше всего подходят четкие фотографии с хорошим освещением, где хорошо видно лицо. Чем выше качество фото, тем детальнее будет портрет." },
        { question: "Сколько времени занимает изготовление?", answer: "В среднем, от 5 до 14 дней в зависимости от сложности и текущей загруженности художника. Digital Art обычно быстрее." },
        { question: "Как происходит доставка?", answer: "Готовые портреты на холсте надежно упаковываются и доставляются курьерской службой. Digital-портреты отправляются на вашу электронную почту в высоком разрешении." }
    ]
  },
  {
    id: 'songs',
    title: 'Авторские песни',
    description: 'Закажите песню, написанную специально для вас. Николай Пономарев создаст музыкальную композицию, которая расскажет вашу историю, передаст чувства и станет незабываемым саундтреком к важному событию.',
    performer: 'Николай Пономарев',
    performerBio: 'Создаю саундтреки для самых важных моментов вашей жизни. Музыка - это язык души.',
    performerAvatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100',
    icon: (props) => <MusicalNoteIcon {...props} />,
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
     options: [
      { id: 'acoustic', name: 'Акустика', price: 'от 8000₽', imageUrl: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Классическая гитара и вокал. Искреннее и душевное исполнение.' },
      { id: 'pop', name: 'Поп-музыка', price: 'от 12000₽', imageUrl: 'https://images.unsplash.com/photo-1598488581884-f3a34a3d826a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Современное звучание с битами и синтезаторами. Запоминающийся мотив.' },
      { id: 'rock', name: 'Рок-баллада', price: 'от 15000₽', imageUrl: 'https://images.unsplash.com/photo-1593132399784-336c589635b7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Мощный вокал и гитарные риффы. Для самых сильных эмоций.' },
    ],
    orderSteps: [
      { id: 'style', title: 'Выберите жанр', description: 'Какой стиль музыки вам нравится?', component: 'style' },
      { id: 'details', title: 'Расскажите историю', description: 'Опишите, о чем должна быть песня.', component: 'details' },
      { id: 'confirm', title: 'Подтверждение', description: 'Проверьте и подтвердите ваш заказ.', component: 'confirm' },
    ]
  },
  {
    id: 'bouquets',
    title: 'Вкусные букеты',
    description: 'Подарите эмоции, которые можно попробовать на вкус. Анастасия Пономарева соберет изысканный букет из свежих фруктов, сладостей или деликатесов, который удивит и порадует ваших близких.',
    performer: 'Анастасия Пономарева',
    performerBio: 'Собираю букеты, которые дарят не только красоту, но и вкус. Каждый букет - уникальная история.',
    performerAvatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=100',
    icon: (props) => <CakeIcon {...props} />,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    options: [
      { id: 'fruit', name: 'Фруктовый', price: 'от 3000₽', imageUrl: 'https://images.unsplash.com/photo-1610924445398-e794716417a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Композиция из свежих сезонных фруктов и ягод. Полезно и красиво.' },
      { id: 'sweet', name: 'Сладкий', price: 'от 2500₽', imageUrl: 'https://images.unsplash.com/photo-1623963423238-204b4073f820?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Букет из конфет, шоколада и зефира. Настоящий рай для сладкоежек.' },
      { id: 'savory', name: 'Сытный', price: 'от 4000₽', imageUrl: 'https://images.unsplash.com/photo-1612497184852-6d2c4b8b6c0e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300', description: 'Оригинальный букет из колбас, сыров, орехов и овощей. Отличный мужской подарок.' },
    ],
    orderSteps: [
        { id: 'style', title: 'Выберите состав', description: 'Что будет в основе вашего букета?', component: 'style' },
        { id: 'details', title: 'Особые пожелания', description: 'Аллергии, предпочтения и т.д.', component: 'details' },
        { id: 'confirm', title: 'Подтверждение', description: 'Проверьте и подтвердите ваш заказ.', component: 'confirm' },
    ]
  }
];