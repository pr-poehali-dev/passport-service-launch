import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: 'Shield',
      title: 'Официальное оформление',
      description: 'Работаем строго в рамках законодательства РФ'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Гарантируем получение документа в обещанный срок'
    },
    {
      icon: 'Users',
      title: 'Опыт 15 лет',
      description: 'Оформили более 50 000 паспортов'
    },
    {
      icon: 'CheckCircle',
      title: 'Возврат средств',
      description: 'Полный возврат при срыве сроков'
    }
  ];

  return (
    <section id="guarantees" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши гарантии</h2>
          <p className="text-xl text-muted-foreground">Работаем честно и берём ответственность на себя</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={guarantee.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
