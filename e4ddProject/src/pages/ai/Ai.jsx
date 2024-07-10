import React from 'react';
import './Ai.css';

const Ai = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <img
  src="./Ai/ai3.jpg" // Replace with your actual image path
  alt="AI Banner"
  className="w-full h-[85vh] object-cover"
/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container w-full mx-auto p-6 bg-gradient-to-r from-gray-700 via-gray-500 to-green-300 text-white font-sans">
  <h1 className="text-4xl font-bold text-gradient mb-4">AI Business Solutions</h1>
  <h4 className="text-2xl font-semibold text-pink-600 mb-6">Increase business value through disruptive AI-driven products</h4>
  <p className="text-base leading-6 text-white-800">
    Machine learning and artificial intelligence are essential to a modern enterprise’s success in a digital world. Our AI business solutions focus on helping companies deploy intelligent algorithms powered by machine learning and AI to achieve automation. With over 20 years of experience in industries ranging from Technology, Financial Services, E-commerce, and Manufacturing, we understand business, as well as user needs to design and engineer AI development services products that deliver value to customers.
  </p>
  <p className="mt-4 text-base leading-6 text-white-800">
    We are a team of Data Scientists, Machine Learning Specialists, Technology Consultants, and UX experts who work collaboratively with clients to uncover business-level opportunities and develop products that take your enterprise to the next level.
  </p>
</div>


<div className="text-center mt-12 relative">
  <h2 className="text-3xl font-semibold mb-4 relative z-10" style={{ backgroundImage: 'linear-gradient(to right, #ff0000, #ff8800)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
    <span className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
      <span className="text-orange-800">◆</span>
    </span>
    Our AI Business Solutions Include
    <span className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
      <span className="text-purple-800">◆</span>
    </span>
  </h2>
</div>





<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Custom algorithm development */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/ca.jpg"
      alt="Custom algorithm development"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">Custom Algorithm Development</h3>
      <p className="text-gray-700">
        Boost efficiency by reducing manual and time-consuming processes through custom AI and ML algorithm development. Whether you need to automate repetitive tasks, generate insights faster, or improve customer experience, our custom AI development capabilities will support your specific business problem.
      </p>
    </div>
  </div>

  {/* AI/ML consulting */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/aiml.jpg"
      alt="AI/ML consulting"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">AI/ML Consulting</h3>
      <p className="text-gray-700">
        Identify potential opportunities to automate using our AI and ML capabilities. We work closely with client teams to improve existing solutions as well as those in the conceptual stages to ensure greater accuracy and success.
      </p>
    </div>
  </div>

  {/* Python automation */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/py.jpg"
      alt="Python automation"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">Python Automation</h3>
      <p className="text-gray-700">
        Optimize processes across IT operations though Python-based automation. We deploy full-stack automation to handle complex applications that drive critical business processes. With our AI solutions for business, expect faster development cycles, fewer bugs in your IT system, and quicker resolution of any platform issues.
      </p>
    </div>
  </div>

  {/* AI model development */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/aim.jpg"
      alt="AI model development"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">AI Model Development</h3>
      <p className="text-gray-700">
        We excel in delivering AI development services that drive tangible business outcomes. Our team of experts, steeped in a data-driven approach, specialize in crafting custom AI models to address complex business challenges. Our expertise encompasses natural language processing, computer vision, predictive analytics, and machine learning, whether its AI solutions for healthcare or corporate operations, its all aimed at enhancing efficiency and delivering meaningful business impact. Elite for Digital Development has ample member data labelling and annotation team which helps us develop algorithms with greater accuracy.
      </p>
    </div>
  </div>

  {/* Influencer analytics */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/ia.jpg"
      alt="Influencer analytics"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">Influencer Analytics</h3>
      <p className="text-gray-700 mb-2">
        Leverage our innovative proprietary tool to measure influencer marketing RoIe. This helps you to:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Track relevance of influencer posts</li>
        <li>Measure engagement and impact of influencer marketing across channels</li>
        <li>Identify influencers which give you maximum bang for your buck</li>
        <li>Take strategic decisions based on influencers’ promotional activities and target segment engagement</li>
      </ul>
    </div>
  </div>

  {/* Sentiment analysis */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/sa1.jpg"
      alt="Sentiment analysis"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">Sentiment Analysis</h3>
      <p className="text-gray-700 mb-2">
        Get data-driven insights into user-generated content (UGC) to identify opportunities for improving your customer experience and marketing campaigns. Our self-serve dashboard lets you drill down into customer feedback to capture:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Category insights</li>
        <li>Topic spread</li>
        <li>Sentiment spread</li>
        <li>Consumer perceptions</li>
        <li>Competitive insights</li>
      </ul>
    </div>
  </div>

  {/* Video intelligence */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-purple">
    <img
      src="./Ai/vi.jpg"
      alt="Video intelligence"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">Video Intelligence</h3>
      <p className="text-gray-700 mb-2">
        Our proprietary algorithm scans through hours of videos to detect brand placements using image annotation. The scalable technology helps you:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Number of objects present:</strong> The algorithm can detect multiple objects in the same frame simultaneously.</li>
        <li><strong>Aspects being endorsed:</strong> Algorithm does not just detect, but also classifies the objects into multiple attributes.</li>
        <li><strong>Timestamp and length of endorsement:</strong> The exact time in the video stream when a given brand is endorsed, and even calculates the duration of endorsement.</li>
      </ul>
      <p className="text-gray-700 mt-2">
        This ensures precise data for your brand across various video content.
      </p>
    </div>
  </div>

</div>


      </div>
    </div>
  );
};

export default Ai;
