
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../constants';
import { useTelegram } from '../hooks/useTelegram';
import type { Category } from '../types';
import { 
    CursorArrowRaysIcon, 
    PencilSquareIcon, 
    GiftIcon,
    SparklesIcon,
    UserGroupIcon,
    ChatBubbleBottomCenterTextIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { user, tg } = useTelegram();
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/category/${categoryId}`);
    };

    const handleQuickRequest = (category: Category) => {
        tg.showPopup({
            title: 'Быстрая заявка',
            message: `Хотите, чтобы ${category.performer} связался с вами по поводу "${category.title}"? Ваши контактные данные из Telegram будут переданы исполнителю.`,
            buttons: [
                { id: 'send', type: 'default', text: 'Да, отправить' },
                { type: 'cancel', text: 'Отмена' },
            ]
        }, (buttonId: string) => {
            if (buttonId === 'send') {
                tg.showAlert(`Ваша заявка отправлена! ${category.performer} скоро с вами свяжется.`);
            }
        });
    };
    
    const handleBecomeCreator = () => {
        navigate('/become-performer');
    };

    const howItWorksSteps = [
        { icon: CursorArrowRaysIcon, title: 'Выберите подарок', description: 'Ознакомьтесь с нашими уникальными предложениями и выберите то, что вам по душе.' },
        { icon: PencilSquareIcon, title: 'Персонализируйте', description: 'Укажите все ваши пожелания, загрузите фото и добавьте важные детали.' },
        { icon: GiftIcon, title: 'Получите шедевр', description: 'Наш мастер создаст подарок, а мы доставим его вам в лучшем виде.' },
    ];

    const whyUsItems = [
        { icon: SparklesIcon, title: '100% Уникальность', description: 'Каждый подарок создается вручную с нуля, второго такого не будет.' },
        { icon: UserGroupIcon, title: 'Талантливые мастера', description: 'Мы работаем только с проверенными художниками, музыкантами и флористами.' },
        { icon: ChatBubbleBottomCenterTextIcon, title: 'Учитываем пожелания', description: 'Прямая связь с исполнителем для обсуждения всех деталей вашего заказа.' },
    ];
    
    const filteredCategories = CATEGORIES.filter(category =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.performer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12 pb-4">
            {/* Hero Section */}
            <header className="text-center pt-4">
                 <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    VPodarke
                </h1>
                <p className="text-hint mt-2 text-lg">Маркетплейс подарков и услуг на заказ</p>
                <p className="text-foreground mt-4 max-w-2xl mx-auto">
                    Здравствуйте, {user?.first_name || 'Гость'}! Добро пожаловать в мир, где каждый подарок — это история. Мы помогаем вам дарить не просто вещи, а настоящие эмоции.
                </p>
            </header>
            
            {/* Categories Section */}
            <section>
                <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Выберите свой идеальный подарок</h2>
                
                {/* Search Bar */}
                <div className="relative mb-6 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Найти портрет, песню, букет..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 bg-card border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        aria-label="Поиск подарков"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-hint" />
                </div>
                
                {filteredCategories.length > 0 || searchQuery === '' ? (
                    <div className="grid grid-cols-2 gap-4">
                        {filteredCategories.map((category) => (
                            <CategoryCard 
                                key={category.id} 
                                category={category}
                                onClick={() => handleCategoryClick(category.id)}
                                onQuickRequest={handleQuickRequest}
                            />
                        ))}
                        
                        {/* "Add Service" Card */}
                        <div 
                            onClick={handleBecomeCreator}
                            className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 ring-1 ring-zinc-700 hover:ring-primary transition-all duration-300 cursor-pointer flex flex-col"
                        >
                            <div className="relative">
                                <img className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1556742044-51c30a4422e3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" alt="Добавить услугу" />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm p-1.5 rounded-full shadow-md">
                                    <PlusCircleIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="absolute bottom-2 left-3">
                                    <h3 className="font-bold text-lg text-white leading-tight">Добавить свою услугу</h3>
                                </div>
                            </div>
                            <div className="p-3 flex-grow flex flex-col">
                                <p className="text-sm text-hint mb-3 flex-grow line-clamp-2">Предлагайте свои уникальные услуги и находите новых клиентов.</p>
                                <div className="flex items-center justify-center gap-2 mt-auto">
                                    <button 
                                        className="bg-primary w-full text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                                        aria-label="Стать исполнителем"
                                    >
                                        Стать исполнителем
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                   <p className="text-center text-hint py-8">Подарки не найдены. Попробуйте другой запрос.</p>
                )}
            </section>
            
            {/* How It Works Section */}
            <section>
                <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Всего 3 простых шага</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="flex-1 p-4 bg-card rounded-lg ring-1 ring-zinc-800 flex flex-col items-center text-center">
                            <div className="bg-primary/10 p-3 rounded-full mb-3">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                            <p className="text-sm text-hint">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Why Us Section */}
            <section>
                <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Почему выбирают нас?</h2>
                <div className="space-y-4">
                     {whyUsItems.map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-card rounded-lg ring-1 ring-zinc-800">
                            <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                               <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">{item.title}</h3>
                                <p className="text-sm text-hint">{item.description}</p>
                            </div>
                        </div>
                     ))}
                </div>
            </section>

            {/* Final CTA */}
            <footer className="text-center p-4 bg-card rounded-lg ring-1 ring-zinc-800">
                <h3 className="font-semibold text-foreground">Остались вопросы?</h3>
                <p className="text-sm text-hint mt-1 mb-3">Наш менеджер готов помочь вам с выбором и ответить на любые вопросы.</p>
                <button 
                    onClick={() => tg.showAlert('Для связи с менеджером, пожалуйста, напишите в поддержку @YourSupportUsername. (Это демо-версия)')}
                    className="bg-primary/80 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary transition-colors"
                >
                    Связаться с менеджером
                </button>
            </footer>
        </div>
    );
};

export default HomePage;
