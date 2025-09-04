import React from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "See exactly how this will work for your business",
    "Get a plan designed specifically for your industry",
    "Find out how many more customers you could get",
    "Start getting results in under 1 week"
  ];

  return (
    <section id="cta" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Turn Your Database Into Revenue
          </h2>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-8 border border-blue-500">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-6 h-6 text-white mr-2" />
            <span className="text-lg font-medium text-white">SCHEDULE YOUR CONSULTATION</span>
          </div>
          
          <div className="min-h-[400px] rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Book Your Strategy Call</h3>
              <p className="text-slate-300 mb-4">Schedule a free consultation to see how we can help your business</p>
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
                Schedule Now
              </button>
            </div>
          </div>
        </div>

        {/* Trust Signals Below Form */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold text-green-400">100% FREE Strategy Call</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">No Pressure</div>
              <div className="text-slate-300 text-sm">We'll show you what's possible. No pushy sales tactics or high-pressure closes.</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Real Results</div>
              <div className="text-slate-300 text-sm">See actual case studies and results from businesses just like yours.</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Custom Plan</div>
              <div className="text-slate-300 text-sm">Get a personalized strategy designed specifically for your business and industry.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;