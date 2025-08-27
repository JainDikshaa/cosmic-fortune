import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { 
  CreditCard, 
  Star, 
  Check, 
  Crown, 
  Sparkles, 
  Zap, 
  Calendar,
  Gift,
  Diamond,
  Loader2
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Billing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { user, session, subscriptionStatus, checkSubscription } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user && session) {
      checkSubscription();
    }
  }, [user, session, checkSubscription]);

  const handlePlanSelect = async (planId: string, planName: string) => {
    if (!user || !session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(planId);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planId },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Payment Error",
        description: error.message || "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const handleManageSubscription = async () => {
    if (!user || !session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to manage your subscription.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading('manage');

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe customer portal in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to open customer portal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const plans = [
    {
      id: 'cosmic-seeker',
      name: 'Cosmic Seeker',
      icon: Star,
      price: { monthly: 9.99, yearly: 99.99 },
      features: [
        '10 Oracle Consultations/month',
        'Basic Fortune History',
        'Mobile & Desktop Access',
        'Email Support',
      ],
      color: 'text-blue-400',
      popular: false,
    },
    {
      id: 'starlight-mystic',
      name: 'Starlight Mystic',
      icon: Crown,
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        'Unlimited Oracle Consultations',
        'Advanced Fortune Analytics',
        'Premium Fortune Categories',
        'Priority Support',
        'Detailed Cosmic Reports',
        'Personalized Insights',
      ],
      color: 'text-secondary',
      popular: true,
    },
    {
      id: 'celestial-oracle',
      name: 'Celestial Oracle',
      icon: Diamond,
      price: { monthly: 39.99, yearly: 399.99 },
      features: [
        'Everything in Starlight Mystic',
        'Personal Oracle Sessions (Live)',
        'Custom Fortune Categories',
        'White-label Experience',
        '24/7 VIP Support',
        'Early Access to New Features',
        'Exclusive Cosmic Events',
      ],
      color: 'text-accent',
      popular: false,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const getYearlySavings = (monthlyPrice: number, yearlyPrice: number) => {
    const yearlySavings = (monthlyPrice * 12) - yearlyPrice;
    const percentageSavings = Math.round((yearlySavings / (monthlyPrice * 12)) * 100);
    return { amount: yearlySavings, percentage: percentageSavings };
  };

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="float-animation mb-6">
            <CreditCard className="h-16 w-16 text-secondary mx-auto twinkle" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Choose Your Cosmic Path
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Select the perfect plan for your spiritual journey and unlock unlimited cosmic wisdom
          </p>

          {/* Billing Toggle */}
          <CosmicCard className="inline-flex p-2 max-w-sm mx-auto">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`flex-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`flex-1 px-4 py-2 rounded-lg transition-all duration-300 relative ${
                billingPeriod === 'yearly'
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </CosmicCard>
        </div>

        {/* Pricing Cards */}
        <div id="pricing-cards" className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const savings = getYearlySavings(plan.price.monthly, plan.price.yearly);
            
            return (
              <CosmicCard 
                key={plan.id} 
                hover 
                glow={plan.popular}
                className={`relative text-center ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow">
                      <Sparkles className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="pt-4">
                  <plan.icon className={`h-12 w-12 mx-auto mb-4 ${plan.color} twinkle`} />
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">
                      {formatPrice(plan.price[billingPeriod])}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per {billingPeriod === 'monthly' ? 'month' : 'year'}
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="text-sm text-secondary mt-1">
                        Save {formatPrice(savings.amount)} ({savings.percentage}% off)
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "cosmic" : "starlight"} 
                    className="w-full"
                    onClick={() => handlePlanSelect(plan.id, plan.name)}
                    disabled={isLoading === plan.id || (subscriptionStatus.subscribed && subscriptionStatus.subscription_tier === plan.name)}
                  >
                    {isLoading === plan.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : subscriptionStatus.subscribed && subscriptionStatus.subscription_tier === plan.name ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Current Plan
                      </>
                    ) : plan.popular ? (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Start Cosmic Journey
                      </>
                    ) : (
                      <>
                        <Star className="mr-2 h-4 w-4" />
                        Choose Plan
                      </>
                    )}
                  </Button>
                </div>
              </CosmicCard>
            );
          })}
        </div>

        {/* Current Subscription */}
        <CosmicCard className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Current Plan: {subscriptionStatus.subscribed ? subscriptionStatus.subscription_tier : 'Free Seeker'}
                </h3>
                <p className="text-muted-foreground">
                  {subscriptionStatus.subscribed 
                    ? `Active until ${subscriptionStatus.subscription_end ? new Date(subscriptionStatus.subscription_end).toLocaleDateString() : 'Unknown'}`
                    : '3 consultations remaining this month'
                  }
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="starlight" onClick={checkSubscription}>
                <Calendar className="mr-2 h-4 w-4" />
                Refresh Status
              </Button>
              {subscriptionStatus.subscribed ? (
                <Button 
                  variant="cosmic" 
                  onClick={handleManageSubscription}
                  disabled={isLoading === 'manage'}
                >
                  {isLoading === 'manage' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Gift className="mr-2 h-4 w-4" />
                      Manage Subscription
                    </>
                  )}
                </Button>
              ) : (
                <Button variant="cosmic" onClick={() => document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Gift className="mr-2 h-4 w-4" />
                  Upgrade Now
                </Button>
              )}
            </div>
          </div>
        </CosmicCard>

        {/* FAQ Section */}
        <CosmicCard>
          <h2 className="text-2xl font-bold mb-6 text-center text-gradient">
            Cosmic Questions & Answers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! You can cancel your subscription at any time. Your cosmic powers remain active until the end of your billing period.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and various cryptocurrencies for the modern mystic.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Is there a free trial?</h4>
              <p className="text-sm text-muted-foreground">
                Every new seeker gets 3 free oracle consultations to experience the cosmic wisdom firsthand.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How accurate are the fortunes?</h4>
              <p className="text-sm text-muted-foreground">
                Our cosmic algorithms channel ancient wisdom with modern precision, achieving 98% satisfaction among spiritual seekers.
              </p>
            </div>
          </div>
        </CosmicCard>
      </div>
    </div>
  );
};

export default Billing;