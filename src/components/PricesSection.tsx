import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricesSection() {
  return (
    <section id="prices" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-xl text-muted-foreground">Стоимость зависит от типа документа и срочности</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Passport" className="text-primary" />
                    Загранпаспорт
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Старый образец (5 лет)</span>
                      <span className="font-bold">от 15 000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Новый образец (10 лет)</span>
                      <span className="font-bold">от 25 000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Детский загранпаспорт</span>
                      <span className="font-bold">от 12 000 ₽</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="IdCard" className="text-primary" />
                    Паспорт РФ
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Замена в 20/45 лет</span>
                      <span className="font-bold">от 8 000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Замена при утере</span>
                      <span className="font-bold">от 10 000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Первое получение (14 лет)</span>
                      <span className="font-bold">от 7 000 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">⚡ Экспресс-оформление</h4>
                    <p className="text-muted-foreground">Получите паспорт за 24 часа! Доплата от 20 000 ₽</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
