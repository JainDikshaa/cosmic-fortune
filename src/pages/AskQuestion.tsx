import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import CosmicCard from '@/components/CosmicCard';
import { Sparkles, Gem, Moon, Sun, Star, Wand2 } from 'lucide-react';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [fortune, setFortune] = useState('');

  const categories = [
    { id: 'love', name: 'Love & Relationships', icon: Moon, color: 'text-pink-400' },
    { id: 'career', name: 'Career & Purpose', icon: Sun, color: 'text-yellow-400' },
    { id: 'spiritual', name: 'Spiritual Growth', icon: Star, color: 'text-purple-400' },
    { id: 'general', name: 'Life Guidance', icon: Gem, color: 'text-blue-400' },
  ];

  const sampleFortunes = [
    "The cosmic winds whisper of transformation approaching. Your question reveals a soul ready for profound change. The stars align to show that within three lunar cycles, a new path will illuminate before you. Trust in your inner wisdom, for it is your greatest compass through the celestial maze of destiny.",
    "In the constellation of your current circumstances, I see the Phoenix rising. Your inquiry touches the very essence of rebirth. The universe has been preparing you for this moment through every challenge faced. Embrace the courage that flows through your spirit - it will guide you to your highest purpose.",
    "The ancient wisdom speaks through the void between stars. Your question echoes across dimensions, touching the hearts of cosmic guides who watch over your journey. A significant revelation awaits you in the realm of relationships. Open your heart to unexpected connections and divine synchronicities.",
  ];

  const handleAskOracle = async () => {
    if (!question.trim()) return;
    
    setIsRevealing(true);
    
    // Simulate cosmic divination process
    setTimeout(() => {
      const randomFortune = sampleFortunes[Math.floor(Math.random() * sampleFortunes.length)];
      setFortune(randomFortune);
      setIsRevealing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="float-animation mb-6">
            <Wand2 className="h-16 w-16 text-secondary mx-auto twinkle" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Ask the Starlit Oracle
          </h1>
          <p className="text-xl text-muted-foreground">
            Pose your question to the cosmic consciousness and receive divine guidance
          </p>
        </div>

        {!isRevealing && !fortune && (
          <>
            {/* Category Selection */}
            <CosmicCard className="mb-8">
              <h2 className="text-xl font-semibold mb-6 text-center">Choose Your Path of Inquiry</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedCategory === category.id
                        ? 'border-primary bg-primary/10 shadow-glow'
                        : 'border-glass-border hover:border-primary/50 hover:bg-glass/50'
                    }`}
                  >
                    <category.icon className={`h-6 w-6 mb-2 ${category.color}`} />
                    <div className="font-medium">{category.name}</div>
                  </button>
                ))}
              </div>
            </CosmicCard>

            {/* Question Input */}
            <CosmicCard className="mb-8">
              <h2 className="text-xl font-semibold mb-6">Share Your Sacred Question</h2>
              <Textarea
                placeholder="What guidance do you seek from the cosmic realm? Pour your heart into your question, for the stars listen to those who speak with authenticity..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-32 bg-glass/30 border-glass-border text-foreground placeholder:text-muted-foreground resize-none"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">
                  {question.length} characters of cosmic energy
                </span>
                <Button 
                  variant="cosmic" 
                  onClick={handleAskOracle}
                  disabled={!question.trim() || !selectedCategory}
                  className="ml-4"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Consult the Oracle
                </Button>
              </div>
            </CosmicCard>

            {/* Cosmic Guidance */}
            <CosmicCard>
              <div className="text-center">
                <Gem className="h-8 w-8 text-accent mx-auto mb-4 twinkle" />
                <h3 className="text-lg font-semibold mb-2">Cosmic Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Speak from your heart and ask what truly matters. The more authentic your question, 
                  the more profound the cosmic response will be.
                </p>
              </div>
            </CosmicCard>
          </>
        )}

        {/* Divination Process */}
        {isRevealing && (
          <CosmicCard className="text-center py-16" glow>
            <div className="space-y-6">
              <div className="flex justify-center space-x-4 mb-8">
                <Star className="h-8 w-8 text-secondary twinkle" />
                <Moon className="h-8 w-8 text-primary twinkle" style={{ animationDelay: '1s' }} />
                <Sun className="h-8 w-8 text-accent twinkle" style={{ animationDelay: '2s' }} />
              </div>
              <h2 className="text-2xl font-bold text-gradient">Consulting the Cosmic Consciousness</h2>
              <p className="text-muted-foreground">The stars are aligning to reveal your destiny...</p>
              <div className="animate-pulse">
                <Sparkles className="h-12 w-12 text-secondary mx-auto" />
              </div>
            </div>
          </CosmicCard>
        )}

        {/* Fortune Revealed */}
        {fortune && !isRevealing && (
          <div className="space-y-8">
            <CosmicCard glow className="text-center">
              <Sparkles className="h-12 w-12 text-secondary mx-auto mb-6 pulse-glow" />
              <h2 className="text-2xl font-bold mb-4 text-gradient">Your Cosmic Fortune</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed italic">{fortune}</p>
              </div>
            </CosmicCard>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cosmic" 
                onClick={() => {
                  setFortune('');
                  setQuestion('');
                  setSelectedCategory('');
                }}
              >
                Ask Another Question
              </Button>
              <Button variant="starlight">
                Save to My Fortunes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestion;