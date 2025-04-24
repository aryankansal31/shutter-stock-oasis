
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Feedback = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-brand-dark/50 border-white/10 backdrop-blur-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Share Your Experience</h3>
            <p className="text-white/80 mb-6">
              We value your feedback! Help us improve our service by sharing your thoughts.
            </p>
            <Button className="bg-brand-neon-blue text-white hover:bg-brand-neon-blue/80">
              Provide Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
