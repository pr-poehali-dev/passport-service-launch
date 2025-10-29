import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  const services = [
    {
      title: 'Загранпаспорт старого образца',
      description: '36 страниц, срок действия 5 лет',
      price: 'от 15 000 ₽',
      duration: '3-5 дней',
      icon: 'BookOpen'
    },
    {
      title: 'Загранпаспорт нового образца',
      description: '46 страниц, биометрический, 10 лет',
      price: 'от 25 000 ₽',
      duration: '5-7 дней',
      icon: 'Fingerprint'
    },
    {
      title: 'Замена паспорта РФ',
      description: 'По возрасту, утере или порче',
      price: 'от 8 000 ₽',
      duration: '1-3 дня',
      icon: 'RefreshCw'
    },
    {
      title: 'Срочное оформление',
      description: 'Паспорт за 1 день (экспресс)',
      price: 'от 45 000 ₽',
      duration: '24 часа',
      icon: 'Zap'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">Оформляем все виды паспортов быстро и надёжно</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Цена:</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Срок:</span>
                    <Badge variant="secondary">{service.duration}</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <a href="#contacts">Заказать</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
