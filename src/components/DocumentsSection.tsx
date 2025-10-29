import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function DocumentsSection() {
  const documents = [
    'Старый паспорт (при замене)',
    'Свидетельство о рождении',
    'Фотографии 3.5x4.5 см (4 шт)',
    'Военный билет (для мужчин до 27 лет)',
    'Квитанция об оплате госпошлины',
    'Заявление (заполним за вас)'
  ];

  return (
    <section id="documents" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Необходимые документы</h2>
          <p className="text-xl text-muted-foreground">Базовый пакет для оформления паспорта</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm">
                  <Icon name="Info" className="inline mr-2" size={16} />
                  <strong>Важно:</strong> Точный список документов зависит от вашей ситуации. Мы проконсультируем вас бесплатно!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
