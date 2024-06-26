import Head from 'next/head';
import { ReactElement } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: ReactElement;
}

const features: Feature[] = [
  {
    title: 'Centralization of Data',
    description: 'Aggregate all relevant public data about companies in one place for easy access and analysis.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M20 21V7.24a2 2 0 00-.92-1.67l-7-4.45a2 2 0 00-2.16 0l-7 4.45A2 2 0 002 7.24V21a2 2 0 002 2h12a2 2 0 002-2z"></path>
        <path d="M16 10.24V21M8 10.24V21M12 13.24V21"></path>
      </svg>
    ),
  },
  {
    title: 'Real-time Alerts',
    description: 'Receive instant notifications about significant changes or updates in company data.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M18.364 18.364a9 9 0 00-12.728 0M5.636 5.636a9 9 0 0112.728 0M12 20v2m0-18V2"></path>
      </svg>
    ),
  },
  {
    title: 'Decision-making Tools',
    description: 'Utilize powerful tools to help make informed investment decisions based on comprehensive data analysis.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h8m-8 6h16"></path>
      </svg>
    ),
  },
  {
    title: 'Data Analysis and Evaluation',
    description: 'Analyze and evaluate companies using advanced data analytics to determine their viability for investment.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M3 3v18h18M3 3h18M3 3l18 18"></path>
      </svg>
    ),
  },
  {
    title: 'Quick Information Access',
    description: 'Save time by accessing all necessary information about companies quickly and efficiently in one place.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18"></path>
      </svg>
    ),
  },
  {
    title: 'Data Visualization',
    description: 'Visualize data through intuitive charts and graphs to better understand and interpret information.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 20v-8m0 0l-8 8m8-8l8 8"></path>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Investment Data Centralization Tool</title>
        <meta name="description" content="Centralize investment data and make informed decisions with real-time alerts, decision-making tools, and data visualization." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <a href="#" className="text-xl font-bold text-gray-800">InvestSmart</a>
              <nav>
                <a href="#features" className="text-gray-800 mx-3">Features</a>
                <a href="#about" className="text-gray-800 mx-3">About</a>
                <a href="#contact" className="text-gray-800 mx-3">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <section className="text-gray-700 body-font flex w-full justify-center ">
          <div className="container mx-auto w-4/5 flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Centralize and Analyze Investment Data
              </h1>
              <p className="mb-8 leading-relaxed">
                Efficiently centralize public data on companies, receive real-time alerts, and use decision-making tools to determine whether to invest or not.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-xl">Get Started</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 py-3 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-xl border border-gray-200 ">Learn More</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="images/cards/cards-06.png" />
            </div>
          </div>
        </section>

        <section id="features" className="text-gray-700 body-font bg-gray-100">
          <div className="w-4/5  px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">POWERFUL FEATURES</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Why Choose Our Tool</h1>
            </div>
            <div className="flex flex-wrap justify-center m-4">
              {features.map((feature) => (
                <div key={feature.title} className="p-4 h-96 bg-indigo-400 w-1/3 max-w-[500px] ">
                  <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">{feature.title}</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about" src="/about-image.jpg" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
              <p className="mb-8 leading-relaxed">
                We provide an advanced investment data centralization tool designed to help investors make informed decisions by aggregating and analyzing public company data efficiently.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-gray-700 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=San%20Francisco+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
              <p className="leading-relaxed mb-5 text-gray-600">We'd love to hear from you! Please fill out the form below with any questions or comments.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
              <p className="text-xs text-gray-500 mt-3">We'll get back to you as soon as possible.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
