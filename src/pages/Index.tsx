import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

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

  const documents = [
    'Старый паспорт (при замене)',
    'Свидетельство о рождении',
    'Фотографии 3.5x4.5 см (4 шт)',
    'Военный билет (для мужчин до 27 лет)',
    'Квитанция об оплате госпошлины',
    'Заявление (заполним за вас)'
  ];

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

  const faqs = [
    {
      question: 'Как быстро можно получить загранпаспорт?',
      answer: 'Минимальный срок оформления загранпаспорта старого образца – 3 дня, нового образца – 5 дней. При срочном оформлении (экспресс-услуга) можно получить документ за 24 часа.'
    },
    {
      question: 'Какие документы нужны для оформления?',
      answer: 'Базовый пакет: паспорт РФ, свидетельство о рождении, фотографии, военный билет (для мужчин призывного возраста). Полный список зависит от типа документа и предоставляется при консультации.'
    },
    {
      question: 'Это законно?',
      answer: 'Да, мы работаем полностью легально. Оформление происходит через официальные каналы МВД РФ. Мы берём на себя подготовку документов и ускорение процесса.'
    },
    {
      question: 'Что если сорвутся сроки?',
      answer: 'Мы гарантируем соблюдение заявленных сроков. В случае их нарушения по нашей вине – полный возврат оплаченной суммы.'
    },
    {
      question: 'Можно ли оформить для ребёнка?',
      answer: 'Да, оформляем детские загранпаспорта. Требуется присутствие законного представителя и дополнительные документы на ребёнка.'
    },
    {
      question: 'Работаете ли вы с регионами?',
      answer: 'Да, оформляем документы для жителей любых регионов РФ. Возможна дистанционная подача документов через курьерскую службу.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen">
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

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на частые вопросы о наших услугах</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-xl text-white/90">Заполните форму, и мы свяжемся с вами в течение 15 минут</p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите, какой паспорт вам нужен и в какие сроки"
                      className="mt-2 min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Phone" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                  <div>
                    <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">info@passport-express.ru</div>
                  </div>
                  <div>
                    <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Офис</div>
                    <div className="text-sm text-muted-foreground">г. Москва, ул. Тверская, 1</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
}
