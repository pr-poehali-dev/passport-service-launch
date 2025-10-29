import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
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

  return (
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
  );
}
