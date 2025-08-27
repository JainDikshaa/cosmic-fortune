import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CosmicCard from '@/components/CosmicCard';
import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="float-animation mb-6">
            <XCircle className="h-20 w-20 text-destructive mx-auto" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gradient">
            Payment Cancelled
          </h1>
          <p className="text-muted-foreground">
            Your cosmic journey awaits when you're ready
          </p>
        </div>

        <CosmicCard className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">
            No Payment Was Processed
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Your payment was cancelled and no charges were made to your account. 
            You can return to try again anytime, or continue exploring with your free consultations.
          </p>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/billing')} 
              variant="cosmic" 
              className="w-full"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate('/dashboard')} 
              variant="starlight" 
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Dashboard
            </Button>
          </div>
        </CosmicCard>

        <CosmicCard className="mt-6 p-6">
          <h3 className="text-lg font-semibold mb-4 text-center text-gradient">
            Free Features Still Available
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>3 free oracle consultations per month</span>
            </div>
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Basic fortune history tracking</span>
            </div>
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
              <span>Access to standard cosmic insights</span>
            </div>
          </div>
        </CosmicCard>
      </div>
    </div>
  );
};

export default PaymentCancelled;