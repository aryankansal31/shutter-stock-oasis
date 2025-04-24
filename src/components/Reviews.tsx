
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Creative Studios",
    rating: 5,
    comment: "Amazing collection of high-quality photos. Exactly what our agency needed!"
  },
  {
    id: 2,
    name: "Mark Wilson",
    company: "Tech Innovate",
    rating: 5,
    comment: "The best stock photo service we've used. Great variety and quality."
  },
  {
    id: 3,
    name: "Emma Davis",
    company: "Design Hub",
    rating: 4,
    comment: "Excellent selection of images. Very satisfied with the service."
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-brand-darker/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 neon-text">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-brand-dark/50 border-white/10 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-neon-blue fill-brand-neon-blue" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">{review.comment}</p>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/60">{review.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
