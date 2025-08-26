import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { Sparkles, Star, Zap, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import cosmicHero from '@/assets/cosmic-hero.jpg';

const Landing = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Cosmic Insights',
      description: 'Tap into the universal energy and receive profound guidance from the stars above.',
    },
    {
      icon: Star,
      title: 'Personalized Readings',
      description: 'Each fortune is uniquely crafted for your spiritual journey and current life path.',
    },
    {
      icon: Zap,
      title: 'Instant Wisdom',
      description: 'Get immediate cosmic guidance whenever you need clarity and direction.',
    },
    {
      icon: Shield,
      title: 'Sacred Privacy',
      description: 'Your spiritual journey remains completely private and confidential.',
    },
  ];

  const testimonials = [
    {
      name: 'Luna Starweaver',
      text: 'The cosmic insights I received changed my entire perspective on life. Truly magical!',
      rating: 5,
    },
    {
      name: 'Orion Mystic',
      text: 'Every reading feels like a personal conversation with the universe itself.',
      rating: 5,
    },
    {
      name: 'Aurora Celestial',
      text: 'The accuracy and depth of these fortunes are absolutely incredible.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{ backgroundImage: `url(${cosmicHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="float-animation">
            <Sparkles className="mx-auto h-20 w-20 text-secondary mb-8 twinkle" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Starlit Oracle</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock the cosmic wisdom that awaits you. Discover your destiny through the ancient art of divination, guided by celestial forces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/ask">
              <Button variant="cosmic" size="lg" className="text-lg px-8 py-6">
                <Sparkles className="mr-2 h-5 w-5" />
                Ask the Oracle
              </Button>
            </Link>
            <Button variant="starlight" size="lg" className="text-lg px-8 py-6">
              <Users className="mr-2 h-5 w-5" />
              Join Thousands
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">Fortunes Revealed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">15K+</div>
              <div className="text-sm text-muted-foreground">Spiritual Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Cosmic Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Choose Starlit Oracle?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the most advanced cosmic guidance platform in the universe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <CosmicCard key={index} hover className="text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4 twinkle" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CosmicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Cosmic Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from fellow travelers on their spiritual journeys
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <CosmicCard key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-accent">{testimonial.name}</div>
              </CosmicCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <CosmicCard className="max-w-4xl mx-auto text-center" glow>
          <Clock className="h-16 w-16 text-primary mx-auto mb-6 pulse-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Cosmic Journey Awaits
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't let another moment pass without the guidance you deserve. 
            The stars are aligned for your discovery.
          </p>
          <Link to="/ask">
            <Button variant="cosmic" size="lg" className="text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Begin Your Journey
            </Button>
          </Link>
        </CosmicCard>
      </section>
    </div>
  );
};

export default Landing;