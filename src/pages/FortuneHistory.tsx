import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { Calendar, Star, Moon, Sun, Gem, Trash2, Share2, BookOpen } from 'lucide-react';

const FortuneHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockFortunes = [
    {
      id: 1,
      question: "What does my career path hold for me?",
      fortune: "The cosmic winds whisper of transformation approaching. Your question reveals a soul ready for profound change. The stars align to show that within three lunar cycles, a new path will illuminate before you.",
      category: "career",
      date: "2024-01-15",
      saved: true,
    },
    {
      id: 2,
      question: "Will I find true love this year?",
      fortune: "In the constellation of your current circumstances, I see the Phoenix rising. Your inquiry touches the very essence of rebirth. The universe has been preparing you for this moment through every challenge faced.",
      category: "love",
      date: "2024-01-10",
      saved: true,
    },
    {
      id: 3,
      question: "How can I grow spiritually?",
      fortune: "The ancient wisdom speaks through the void between stars. Your question echoes across dimensions, touching the hearts of cosmic guides who watch over your journey.",
      category: "spiritual",
      date: "2024-01-05",
      saved: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Fortunes', icon: Gem },
    { id: 'love', name: 'Love', icon: Moon },
    { id: 'career', name: 'Career', icon: Sun },
    { id: 'spiritual', name: 'Spiritual', icon: Star },
  ];

  const filteredFortunes = selectedFilter === 'all' 
    ? mockFortunes 
    : mockFortunes.filter(fortune => fortune.category === selectedFilter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="float-animation mb-6">
            <BookOpen className="h-16 w-16 text-secondary mx-auto twinkle" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Your Fortune Chronicle
          </h1>
          <p className="text-xl text-muted-foreground">
            Revisit the cosmic wisdom you've gathered on your spiritual journey
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <CosmicCard className="text-center">
            <div className="text-2xl font-bold text-secondary">3</div>
            <div className="text-sm text-muted-foreground">Total Fortunes</div>
          </CosmicCard>
          <CosmicCard className="text-center">
            <div className="text-2xl font-bold text-secondary">2</div>
            <div className="text-sm text-muted-foreground">Saved</div>
          </CosmicCard>
          <CosmicCard className="text-center">
            <div className="text-2xl font-bold text-secondary">15</div>
            <div className="text-sm text-muted-foreground">Days Active</div>
          </CosmicCard>
          <CosmicCard className="text-center">
            <div className="text-2xl font-bold text-secondary">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </CosmicCard>
        </div>

        {/* Filter Tabs */}
        <CosmicCard className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedFilter === category.id ? "cosmic" : "starlight"}
                size="sm"
                onClick={() => setSelectedFilter(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </CosmicCard>

        {/* Fortune List */}
        <div className="space-y-6">
          {filteredFortunes.length > 0 ? (
            filteredFortunes.map((fortune) => (
              <CosmicCard key={fortune.id} hover className="relative">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(fortune.date)}
                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs capitalize">
                          {fortune.category}
                        </span>
                        {fortune.saved && (
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-accent">
                      "{fortune.question}"
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed italic">
                      {fortune.fortune}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2 md:w-24">
                    <Button variant="ghost" size="sm" className="flex-1 md:flex-none">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 md:flex-none text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CosmicCard>
            ))
          ) : (
            <CosmicCard className="text-center py-16">
              <Gem className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No fortunes found</h3>
              <p className="text-muted-foreground mb-6">
                {selectedFilter === 'all' 
                  ? "You haven't consulted the oracle yet. Begin your cosmic journey today!"
                  : `No fortunes found in the ${selectedFilter} category.`
                }
              </p>
              <Button variant="cosmic">
                <Star className="mr-2 h-4 w-4" />
                Ask Your First Question
              </Button>
            </CosmicCard>
          )}
        </div>

        {/* Load More */}
        {filteredFortunes.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="starlight">
              Load More Cosmic Wisdom
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortuneHistory;