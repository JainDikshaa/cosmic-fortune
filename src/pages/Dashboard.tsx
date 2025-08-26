import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { 
  Sparkles, 
  Star, 
  TrendingUp, 
  Calendar,
  Crown,
  Zap,
  BookOpen,
  Target,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const recentFortunes = [
    {
      id: 1,
      question: "What does my career path hold for me?",
      preview: "The cosmic winds whisper of transformation approaching...",
      date: "2 days ago",
      category: "career",
    },
    {
      id: 2,
      question: "Will I find true love this year?",
      preview: "In the constellation of your current circumstances...",
      date: "5 days ago",
      category: "love",
    },
  ];

  const cosmicStats = [
    { label: "Fortunes Received", value: "12", icon: Star, color: "text-secondary" },
    { label: "Accuracy Rate", value: "98%", icon: Target, color: "text-accent" },
    { label: "Days Active", value: "23", icon: Calendar, color: "text-primary" },
    { label: "Cosmic Level", value: "Mystic", icon: Crown, color: "text-secondary" },
  ];

  const quickActions = [
    {
      title: "Ask the Oracle",
      description: "Seek cosmic guidance for your pressing questions",
      icon: Sparkles,
      href: "/ask",
      variant: "cosmic" as const,
    },
    {
      title: "View Fortune History",
      description: "Revisit your collection of cosmic wisdom",
      icon: BookOpen,
      href: "/history",
      variant: "starlight" as const,
    },
    {
      title: "Upgrade Plan",
      description: "Unlock unlimited cosmic consultations",
      icon: Zap,
      href: "/billing",
      variant: "starlight" as const,
    },
  ];

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, <span className="text-gradient">Luna Seeker</span>
              </h1>
              <p className="text-muted-foreground">
                The cosmos awaits your next inquiry. What wisdom shall we unlock today?
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Last visit: Yesterday</span>
            </div>
          </div>
        </div>

        {/* Cosmic Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cosmicStats.map((stat, index) => (
            <CosmicCard key={index} hover className="text-center">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color} twinkle`} />
              <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CosmicCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gradient">
                Cosmic Actions
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <CosmicCard hover className="text-center h-full">
                      <action.icon className="h-12 w-12 text-accent mx-auto mb-4 twinkle" />
                      <h3 className="font-semibold mb-2">{action.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {action.description}
                      </p>
                      <Button variant={action.variant} size="sm" className="w-full">
                        Explore
                      </Button>
                    </CosmicCard>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">
                  Recent Cosmic Wisdom
                </h2>
                <Link to="/history">
                  <Button variant="starlight" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentFortunes.map((fortune) => (
                  <CosmicCard key={fortune.id} hover>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{fortune.date}</span>
                          <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs capitalize">
                            {fortune.category}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-1 text-accent">
                          {fortune.question}
                        </h3>
                        <p className="text-muted-foreground text-sm italic">
                          {fortune.preview}
                        </p>
                      </div>
                    </div>
                  </CosmicCard>
                ))}
                
                {recentFortunes.length === 0 && (
                  <CosmicCard className="text-center py-12">
                    <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">No cosmic wisdom yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Begin your journey by asking your first question to the oracle
                    </p>
                    <Link to="/ask">
                      <Button variant="cosmic">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Ask Your First Question
                      </Button>
                    </Link>
                  </CosmicCard>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Status */}
            <CosmicCard className="text-center" glow>
              <Crown className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
              <h3 className="text-lg font-semibold mb-2">Free Seeker</h3>
              <p className="text-muted-foreground text-sm mb-4">
                3 consultations remaining this month
              </p>
              <div className="w-full bg-glass-border rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full w-1/4"></div>
              </div>
              <Link to="/billing">
                <Button variant="cosmic" size="sm" className="w-full">
                  <Zap className="mr-2 h-4 w-4" />
                  Upgrade to Unlimited
                </Button>
              </Link>
            </CosmicCard>

            {/* Cosmic Insights */}
            <CosmicCard>
              <h3 className="text-lg font-semibold mb-4 text-gradient">
                Today's Cosmic Energy
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mercury Retrograde</span>
                  <span className="text-accent text-sm">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Moon Phase</span>
                  <span className="text-secondary text-sm">Waxing Gibbous</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Lucky Numbers</span>
                  <span className="text-primary text-sm">7, 14, 21</span>
                </div>
              </div>
            </CosmicCard>

            {/* Progress Tracking */}
            <CosmicCard>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-accent mr-2" />
                <h3 className="text-lg font-semibold">Cosmic Growth</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Spiritual Insights</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-glass-border rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cosmic Connection</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-glass-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Wisdom Level</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-glass-border rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
            </CosmicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;