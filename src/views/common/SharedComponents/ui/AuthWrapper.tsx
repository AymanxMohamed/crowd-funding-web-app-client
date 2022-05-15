import React from 'react';

const AuthWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-16 pb-12 md:pt-24 md:pb-20">
              {children}
            </div>
          </div>
      </main>
    </div>
  )
}

export default AuthWrapper;
