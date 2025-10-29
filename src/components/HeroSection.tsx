import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">🚀 Работаем 15 лет</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Паспорт за <span className="text-primary">3 дня</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оформим загранпаспорт или паспорт РФ в кратчайшие сроки. Без очередей и бюрократии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contacts">Оформить паспорт</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#services">Узнать цены</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Довольны</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/52e5dd2d-ef12-4e66-ac4a-c10a8a9eba65/files/ae8268b1-042c-45b4-99f3-3704a4380a22.jpg" 
              alt="Паспортные услуги"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
