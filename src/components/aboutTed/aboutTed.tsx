import React from "react";
const TEDDescriptionComponent = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 opacity-20 z-[0] transform rotate-45"></div>
      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-12 relative">
          What is TED and TEDx?
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="transition-all duration-700 ease-in-out transform hover:scale-105 group relative">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              TED: Ideas Worth Spreading
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              TED is a global community devoted to spreading ideas, usually in
              the form of short, powerful talks (18 minutes or less). TED began
              in 1984 as a conference where Technology, Entertainment, and
              Design converged, and today covers almost all topics — from
              science to business to global issues — in more than 100 languages.
            </p>
          </div>
          <div className="transition-all duration-700 ease-in-out transform hover:scale-105 group relative">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              TEDx: Independently Organized Events
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              TEDx is a program of local, self-organized events that bring
              people together to share a TED-like experience. At a TEDx event,
              TED Talks videos and live speakers combine to spark deep
              discussion and connection in a small group. These local,
              self-organized events are branded TEDx, where x = independently
              organized TED event.
            </p>
          </div>
          <div className="transition-all duration-700 ease-in-out transform hover:scale-105 group relative">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why TEDx Matters
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              TEDx events provide a platform for thought-provoking discussions
              and foster connection within local communities. These events are
              independently organized, yet they maintain the spirit of TED by
              bringing together people who are passionate about making the world
              a better place through the power of ideas.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-40 bg-red-600 opacity-20 z-0 transform rotate-45"></div>
    </section>
  );
};
export default TEDDescriptionComponent;