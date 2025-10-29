import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="FileText" size={28} />
              <span className="text-xl font-bold">ПаспортЭкспресс</span>
            </div>
            <p className="text-sm text-white/70">
              Профессиональное оформление паспортов в кратчайшие сроки с 2010 года.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Загранпаспорта</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Паспорт РФ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Срочное оформление</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#guarantees" className="hover:text-white transition-colors">Гарантии</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@passport-express.ru</li>
              <li>Пн-Пт: 9:00 - 20:00</li>
              <li>Сб-Вс: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>© 2024 ПаспортЭкспресс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
