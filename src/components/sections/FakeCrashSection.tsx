import React from 'react';

const FakeCrashSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-left p-8 bg-white text-gray-800">
      <div className="max-w-2xl w-full">
        <div className="flex items-center mb-8">
            <svg className="w-16 h-16 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12 2L1 21h22L12 2z"
                    stroke="red"
                    strokeWidth="1.5"
                    fill="black"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                <g fill="red">
                    <path d="M11 9h2v6h-2z" />
                    <path d="M11 17h2v2h-2z" />
                </g>
            </svg>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">This site can’t be reached</h1>
                <p className="text-gray-500 mt-1">The connection was reset.</p>
            </div>
        </div>
        
        <div className="text-gray-600 space-y-2">
            <p>Try:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Checking the connection</li>
                <li>Checking the proxy and the firewall</li>
                <li>Running Windows Network Diagnostics</li>
            </ul>
        </div>

        <p className="mt-4 text-sm text-gray-500">
            ERR_CONNECTION_RESET
            <span className="ml-2 font-semibold text-gray-600">KINDLY_SCROLLDOWN</span>
        </p>

      </div>
       <div className="absolute bottom-8 text-gray-400 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default FakeCrashSection;