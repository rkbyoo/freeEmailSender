import React from 'react';
import Form from '../components/Form';

function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center flex justify-center items-center cursor-pointer">
          <span className="transition duration-300 hover:text-purple-400">Send</span>
          <span className="mx-2 transition duration-300 hover:text-pink-500">Emails</span>
          <span className="transition duration-300 hover:text-orange-500">Anonymously</span>
        </h1>
        <p className="text-center mt-2 text-gray-300">
          Your privacy is our priority. Send emails without revealing your identity.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-4">
        <section className="bg-gray-800 shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-white">Get Started</h2>
          <p className="text-center mt-2 text-gray-300">
            Fill out the form below to send your anonymous email.
          </p>

          {/* Form Placeholder */}
          <div className="mt-6">
            <Form />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p>&copy; 2025 Anon Email Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
