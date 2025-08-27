import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { checkSubscription } = useAuth();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Refresh subscription status after successful payment
    if (sessionId) {
      setTimeout(() => {
        checkSubscription();
      }, 2000);
    }
  }, [sessionId, checkSubscription]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="float-animation mb-6">
            <CheckCircle className="h-20 w-20 text-secondary mx-auto twinkle" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gradient">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground">
            Welcome to your cosmic journey, seeker
          </p>
        </div>

        <CosmicCard className="p-8 text-center">
          <Sparkles className="h-12 w-12 text-accent mx-auto mb-4 twinkle" />
          
          <h2 className="text-xl font-semibold mb-4">
            Your Subscription is Active
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Thank you for joining the cosmic community! Your subscription has been activated 
            and you now have access to unlimited oracle consultations and premium features.
          </p>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/dashboard')} 
              variant="cosmic" 
              className="w-full"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Button>
            
            <Button 
              onClick={() => navigate('/ask')} 
              variant="starlight" 
              className="w-full"
            >
              Start Your First Consultation
            </Button>
          </div>
        </CosmicCard>

        <CosmicCard className="mt-6 p-6">
          <h3 className="text-lg font-semibold mb-4 text-center text-gradient">
            What's Next?
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Unlimited oracle consultations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Access to premium fortune categories</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Detailed cosmic analytics and insights</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Priority customer support</span>
            </div>
          </div>
        </CosmicCard>
      </div>
    </div>
  );
};

export default PaymentSuccess;