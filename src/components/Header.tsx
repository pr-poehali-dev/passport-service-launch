import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="FileText" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">ПаспортЭкспресс</h1>
              <p className="text-xs text-muted-foreground">Быстрое оформление документов</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#documents" className="text-sm font-medium hover:text-primary transition-colors">Документы</a>
            <a href="#guarantees" className="text-sm font-medium hover:text-primary transition-colors">Гарантии</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contacts">Оставить заявку</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
