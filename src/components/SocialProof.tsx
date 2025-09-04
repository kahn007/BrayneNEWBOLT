import React from 'react';

const SocialProof = () => {
  return (
    <section id="proof" className="py-20 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't just take <span className="text-blue-400"> our word</span> for it
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how local business owners like you are getting more customers 
            without working harder or hiring more staff.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Real Estate Success Story</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <div className="flex items-center justify-center h-full text-slate-400">
                  <p>Video testimonial placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Insurance Success Story</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <div className="flex items-center justify-center h-full text-slate-400">
                  <p>Video testimonial placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots Slideshow */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">See BrayneAI in Action</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out" id="slideshow-track">
                  <div className="w-full flex-shrink-0">
                    <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-slate-400">Screenshot 1 - Home Services Automation</p>
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0">
                    <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-slate-400">Screenshot 2 - Real Estate Automation</p>
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0">
                    <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-slate-400">Screenshot 3 - Insurance Automation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                onClick={() => {
                  const track = document.getElementById('slideshow-track');
                  if (track) {
                    const currentIndex = parseInt(track.dataset.currentIndex || '0');
                    const newIndex = currentIndex === 0 ? 2 : currentIndex - 1;
                    track.style.transform = `translateX(-${newIndex * 100}%)`;
                    track.dataset.currentIndex = newIndex.toString();
                  }
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                onClick={() => {
                  const track = document.getElementById('slideshow-track');
                  if (track) {
                    const currentIndex = parseInt(track.dataset.currentIndex || '0');
                    const newIndex = (currentIndex + 1) % 3;
                    track.style.transform = `translateX(-${newIndex * 100}%)`;
                    track.dataset.currentIndex = newIndex.toString();
                  }
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map((index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-slate-600 hover:bg-blue-400 transition-colors duration-300 cursor-pointer"
                    onClick={() => {
                      const track = document.getElementById('slideshow-track');
                      if (track) {
                        track.style.transform = `translateX(-${index * 100}%)`;
                        track.dataset.currentIndex = index.toString();
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA after testimonials */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6">
            Ready to see these results for your business?
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            See How This Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;