import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Анна Соколова',
      rating: 5,
      text: 'Сделали загранпаспорт за 4 дня! Очень довольна, всё быстро и качественно. Рекомендую!'
    },
    {
      name: 'Михаил Петров',
      rating: 5,
      text: 'Нужен был срочный паспорт для поездки. Ребята справились за сутки! Профессионалы своего дела.'
    },
    {
      name: 'Елена Кузнецова',
      rating: 5,
      text: 'Отличный сервис! Помогли со всеми документами, всё объяснили. Получила паспорт точно в срок.'
    }
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground">Что говорят те, кто уже получил паспорта с нами</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold">{review.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
