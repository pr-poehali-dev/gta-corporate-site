import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Grand The Auto V</h1>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О корпорации</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Команда</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/cbb4092d-dac6-4e0d-9483-439b1161a385/files/829f0fb0-bb84-4ed4-8263-105ca3a156a6.jpg')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className={`container mx-auto px-6 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Grand The Auto V
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Премиальная корпорация с мировым именем. Элегантность, статус и безупречное качество.
          </p>
          <Button 
            onClick={() => scrollToSection('about')}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">О корпорации</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Grand The Auto V — это символ превосходства в корпоративном мире. 
                  Мы создаем решения, которые определяют стандарты индустрии и вдохновляют на достижения.
                </p>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Наша миссия — предоставлять клиентам исключительный сервис и инновационные продукты, 
                  объединяя традиции качества с передовыми технологиями.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Trophy" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold mb-2 text-primary">25+</h3>
                    <p className="text-muted-foreground">Лет опыта</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold mb-2 text-primary">500+</h3>
                    <p className="text-muted-foreground">Клиентов</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Globe" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold mb-2 text-primary">50+</h3>
                    <p className="text-muted-foreground">Стран</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold mb-2 text-primary">100+</h3>
                    <p className="text-muted-foreground">Наград</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-12 text-center">Наша команда</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Александр Иванов', role: 'Генеральный директор', icon: 'Briefcase' },
                { name: 'Елена Петрова', role: 'Финансовый директор', icon: 'LineChart' },
                { name: 'Михаил Сидоров', role: 'Директор по развитию', icon: 'TrendingUp' },
                { name: 'Анна Смирнова', role: 'Директор по маркетингу', icon: 'Megaphone' },
                { name: 'Дмитрий Кузнецов', role: 'Технический директор', icon: 'Cpu' },
                { name: 'Ольга Волкова', role: 'HR-директор', icon: 'Heart' }
              ].map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  <div 
                    className="h-64 bg-cover bg-center relative"
                    style={{ 
                      backgroundImage: `url('https://cdn.poehali.dev/projects/cbb4092d-dac6-4e0d-9483-439b1161a385/files/8bd3a667-8668-4ac5-af85-526c4990917e.jpg')`,
                      filter: 'grayscale(100%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                    <Icon 
                      name={member.icon as any} 
                      size={64} 
                      className="absolute bottom-4 right-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <p className="text-muted-foreground">Los-Santos Mirror Park Дом 217</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <p className="text-muted-foreground">1345821</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </div>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Сообщение" 
                        rows={5}
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2024 Grand The Auto V. Все права защищены.</p>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
}