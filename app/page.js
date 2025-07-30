'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const sectionIds = ['service', 'features', 'about', 'highlight', 'contact'];
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    const trigger = document.querySelector('#nav-trigger');
    const topNav = document.querySelector('#sticky-nav-top');
    const bottomNav = document.querySelector('#sticky-nav-bottom');

    // Observer for showing/hiding nav
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const isHidden = entry.isIntersecting;
        topNav?.classList.toggle('translate-y-[-100%]', isHidden);
        bottomNav?.classList.toggle('translate-y-full', isHidden);
      },
      { threshold: 0 }
    );

    if (trigger) {
      visibilityObserver.observe(trigger);
      setTimeout(() => {
        const rect = trigger.getBoundingClientRect();
        const fullyOutOfView = rect.bottom <= 0 || rect.top >= window.innerHeight;

        if (fullyOutOfView) {
          topNav?.classList.remove('translate-y-[-100%]');
          bottomNav?.classList.remove('translate-y-full');
        } else {
          topNav?.classList.add('translate-y-[-100%]');
          bottomNav?.classList.add('translate-y-full');
        }
      }, 100);
    }

    // Observer for active link
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const activeLinkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => activeLinkObserver.observe(section));

    // Cleanup
    return () => {
      visibilityObserver.disconnect();
      activeLinkObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-light">
      <div className="relative bg-green-dark text-light overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute w-60 h-60 bottom-2 rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-" />
        <div className="absolute w-60 h-60 right-[5rem] top-[9rem] md:right-[10rem] lg:right-[20rem] xxl:right-[30rem]
        xxxl:right-[40rem] rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-" />
        <div className="relative min-h-screen px-5 py-14 space-y-0 md:px-12 md:py-5 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10
        z-10 flex flex-col justify-between ">
          {/* Nav bar */}
          <nav className="flex justify-between items-center h-[3.5rem] rounded-full">
            <div>
              <img src="./logo.png" className="w-32 md:w-[7rem] xl:w-[8rem] xxxl:w-[9rem]" alt="" />
            </div>
            <div />
          </nav>

          {/* Hero section */}
          <div className="flex flex-col items-start md:items-center justify-center space-y-6 lg:space-y-2 xxxl:space-y-4 ">
            <div className="flex space-x-2 xxxl:space-x-4 p-1 items-center justify-between bg-light bg-opacity-10
            rounded-full border border-light border-opacity-10">
              <div className="w-12 xxl:w-16 xxl:h-6 bg-lime flex items-center justify-center rounded-full">
                <p className="text-text-dark text-xs md:text-lg xxxl:text-lg">New</p>
              </div>
              <p className="pr-2 text-xs md:text-lg">Inventory report upgraded.</p>
            </div>
            <div className="flex flex-col md:items-center space-y-6 xl:space-y-6 xxxl:space-y-8">
              <div className="w-full md:text-center space-y-1 xl:space-y-2 xxxl:space-y-3">
                <h1 className="text-[2.5rem] leading-[3.2rem] sm:text-[2.8rem] md:text-[4rem] md:leading-[4.5rem] lg:text-[4rem]
                font-medium lg:leading-[4.5rem]">Focused success<br />with smart finance.</h1>
                <h4 className="md:text-xl xxxl:text-2xl">Track performance, identify trends, and plan<br />ahead with intelligent financial reports.</h4>
              </div>
              <div className="w-40 h-10 md:w-44 md:h-14 xxxl:w-52 space-x-4 xxxl:space-x-4 flex items-center jsutify-center bg-green-accent rounded-full px-4 md:py-1 xxxl:px-4 xxxl:py-3">
                <p className="md:text-lg xxxl:text-2xl">Get in touch</p>
                <img src="./arrow-right.svg" className="lg:w-5" alt="arrow-right" />
              </div>
            </div>
          </div>

          {/* Card section */}
          <div className="hidden xl:flex justify-center xl:justify-between xl:space-x-4 xxxl:space-x-6">

            <div className=" flex flex-col justify-between w-full">
              {/* Card section 1*/}
              <div className=" w-full lg:flex justify-end">
                <div className="xxxl:w-52 h-20 flex space-x-3 bg-card-glass p-3 rounded-xl border border-light border-opacity-10">
                  <div className="flex flex-col w-full justify-center space-y-2">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg">Total Balance</p>
                    <div className="flex items-center justify-between space-x-4">
                      <p className="font-bold lg:text-md xxxl:text-lg">5780.00 EUR</p>
                      <div className="bg-green-accent rounded-full ">
                        <p className="text-[.8rem] px-2">+2.35%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card section 2*/}
              <div className="md:bottom-5lg:bottom-0 space-x-4 flex items-start justify-between">
                <div className="lg:h-20 xxl:w-72 xxxl:h-28 flex items-center space-x-5 bg-card-glass px-5 py-3 rounded-2xl bg-opacity-100
                border border-light border-opacity-10">
                  <img src="./received-icon.svg" alt="received-icon" className="lg:w-10 xxxl:w-16" />
                  <div className="flex flex-col">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg ">Received</p>
                    <p className="font-bold lg:text-md xxxl:text-xl">5780.00 EUR</p>
                  </div>
                </div>
                <img src="./dollar.svg" className="hidden lg:block lg:w-12 xxxl:w-16" alt="dollar" />
              </div>
            </div>

            {/* Center card*/}
            <div className=" lg:w-full w-[50%] h-72 md:p-4 lg:p-2 lg:space-y-4 xl:h-auto xxxl:p-4 xxxl:h-72 lg:flex flex-col bg-light text-text-dark justify-between items-center rounded-3xl ">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold lg:text-lg xxxl:text-2xl">Sales & Expense</p>
                <p className="font-semibold text-text-disabled lg:text-md xxxl:text-lg">Monthly Sales & Expense Tracker</p>
              </div>
              <div className="flex justify-between w-full text-xl">
                <div className="flex flex-col lg:space-y-1 xxxl:space-y-3">
                  <div className="flex justify-between items-center space-x-2">
                    <img src="./sales.png" className="w-6 h-6" alt="dollar" />
                    <p className="font-bold lg:text-base xxxl:text-xl">Retail Sales</p>
                    <img src="./down-arrow.svg" className="w-4" alt="down-arrow" />
                  </div>
                  <p className="font-bold lg:text-base xxxl:text-xl">Total Retail Sales</p>
                </div>
                <div className="flex flex-col lg:space-y-1 xxxl:space-y-3">
                  <div className="flex justify-between items-center space-x-2">
                    <img src="./calendar.png" className="w-6 h-6" alt="dollar" />
                    <p className="font-bold lg:text-base xxxl:text-xl">July 17</p>
                    <img src="./down-arrow.svg" className="w-4" alt="down-arrow" />
                  </div>
                  <p className="font-bold lg:text-base xxxl:text-xl">SAR 92500.00</p>
                </div>
              </div>
              <button className="flex items-center justify-center bg-text-dark text-light rounded-full lg:py-1
              xxxl:py-2 text-lg w-full lg:text-base xxxl:text-xl">
                <p className="xxxl:pb-1">Get Report</p>
              </button>
            </div>

            <div className="w-full flex flex-col justify-between">
              {/* Card section 3*/}
              <div className="w-full  lg:flex justify-start">
                <div className="xxxl:w-56 xxxl:h-28 flex space-x-3 bg-card-glass p-3 rounded-xl bg-opacity-100 border border-light border-opacity-10">
                  <div className="flex flex-col w-full justify-center space-y-2">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg">Net Income</p>
                    <div className="flex items-center justify-between space-x-4">
                      <p className="font-bold lg:text-md xxxl:text-2xl">$234.67K</p>
                      <div className="bg-green-accent rounded-full ">
                        <p className="text-[.8rem] px-2">+4.75%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card section 4*/}
              <div className=" flex items-end space-x-4 justify-between">
                <img src="./ledger.svg" className="hidden lg:block lg:w-12 xxxl:w-16" alt="dollar" />
                <div className="w-full h-20 xxxl:w-72 xxxl:h-28 flex items-center space-x-3 bg-card-glass p-3 rounded-xl bg-opacity-100 border border-light border-opacity-10">
                  <div className="flex justify-between items-center w-full">
                    <div className="relative flex items-center">
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-green-accent bg-[url('/profile1.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light" />
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-light-blue bg-[url('/profile2.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light left-6 xl:left-8 xxl:left-6  xxxl:left-8" />
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-light-purple bg-[url('/profile3.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light left-12 xl:left-16 xxl:left-12 xxxl:left-16" />
                    </div>
                    <div>
                      <p className="font-bold xxxl:text-2xl">6.3K+</p>
                      <p className="text-text-disabled lg:text-sm xxxl:text-xl">Trusted Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card section - mobile screens */}
          <div className="xl:hidden flex items-center justify-center">
            <div className="relative z-20">
              <img src="/card3_white_large.png" className="w-[22rem] sm:w-[24rem] md:w-[30rem] lg:w-[44rem]" alt="hero-image" />
            </div>
            <img src="./card1.png" className="absolute z-0 w-40 left-0 bottom-60 sm:bottom-64 md:bottom-[20rem] md:w-52 md:left-28
            lg:w-72 lg:left-[7rem] lg:bottom-[28rem] opacity-40" alt="card1" />
            <img src="./card2.png" className="absolute z-0 w-32 left-14 bottom-60 sm:left-[8rem] sm:bottom-[17rem] md:bottom-[20rem] md:w-52 md:left-[15rem]
            lg:w-68 lg:left-[20rem] lg:bottom-[31rem]" alt="card1" />
            <img src="./card4.png" className="absolute z-0 w-32 left-64 bottom-[14.5rem] sm:left-[18.5rem] sm:bottom-[16rem] md:bottom-[19rem] md:w-52 md:left-[28rem]
            lg:w-72 lg:left-[40rem] lg:bottom-[29rem] opacity-40" alt="card1" />
            <img src="./card5.png" className="absolute z-0 lg:block w-24 left-[11rem] bottom-[15.5rem] sm:w-28 sm:left-[12rem] sm:bottom-[17rem] md:bottom-[19rem] md:w-52 md:left-[22rem]
            lg:w-72 lg:left-[30rem] lg:bottom-[28rem]" alt="card1" />
          </div>
        </div>
      </div>

      {/* Sticky Nav - Top (md and up) */}
      <div
        id="sticky-nav-top"
        className="hidden md:block fixed top-0 w-full z-50 bg-light shadow-md transition-all translate-y-[-100%]"
      >
        <nav className="h-16 ">
          <ul className="flex items-center justify-between xxl:text-lg w-full font-medium py-5 md:px-12 lg:px-20 xl:px-40 xxl:px-64 xxxl:px-80">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors duration-200 ${activeLink === id ? 'text-green-accent' : 'text-text-disabled'
                    }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      {/* Sticky Nav - Bottom (sm and xs only) */}
      <div id="sticky-nav-bottom" className="md:hidden fixed bottom-5 w-full z-50 bg-light shadow-md transition-all translate-y-full">
        <nav className="flex h-16 px-4">
          <ul className="flex space-x-2 sm:space-x-4 xxl:text-lg font-medium justify-between items-center w-full">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors duration-200 ${activeLink === id ? 'text-green-accent' : 'text-text-disabled'
                    }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div id="nav-trigger" className="h-1" />

      {/* Service section*/}
      <div id="service" className="px-5 py-10 h-full border border-b border-grey-shade-3 xl:border-0 lg:px-20 md:text-center md:px-12 md:py-14 xl:px-40 xl:py-10 xxl:px-64 xxl:py-5
      xxxl:px-80 xxxl:py-10 bg-light text-text-dark">
        <div className="flex flex-col md:items-center h-full justify-between space-y-6 xl:space-y-8">
          <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full" />
            <p className="font-medium text-green-accent">Services</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-[2.5rem] leading-[3.2rem] md:text-[3.5rem] md:leading-[3.8rem] lg:text-[4rem] lg:leading-[4.5rem] xl:text-[3rem] xl:leading-[3.5rem] xxl:text-[3rem] xxl:leading-[3.4rem]
            xxxl:text-[4.4rem] font-medium xxxl:leading-[4.5rem]">Smarter Services. <br /> For the Future You.</h1>
            <h4 className="text-lg md:text-2xl text-text-disabled">Smart financial solutions to simplify your journey and <br className="hidden md:block" /> power your growth — today and beyond.</h4>
          </div>

          {/* Service card section*/}
          <div className=" flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between lg:space-x-2 bg-card p-2 rounded-3xl w-full">
            <div className="flex flex-col md:flex-row justify-between px-6 space-x-2 lg:space-x-0 lg:flex-col items-center bg-light rounded-2xl xxl:p-2 xxxl:p-4 w-full py-8">
              <img src="./book-keeping.svg" className="md:order-2 lg:order-1 xl:w-[8rem] xxl:w-[12rem] xxxl:w-[16rem] py-2" alt="book-keeping" />
              <ul className="flex flex-col h-full space-y-2 text-left py-2 lg:order-2">
                <div className="flex justify-center">
                  <h3 className="font-bold md:text-lg xxxl:text-2xl">Book-Keeping</h3>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5 pb-5" alt="check" />
                  <li className="xxxl:text-xl" >Recording transactions <br /> (income, expenses, assets, liabilities, equity)</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Maintaining accurate records</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Reconciling accounts</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Preparing financial statements</li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-6 space-x-2 lg:space-x-0 lg:flex-col items-center bg-light rounded-2xl xxl:p-2 xxxl:p-4 w-full py-8">
              <img src="./accounting.svg" className="xl:w-[10.5rem] xxl:w-[15.5rem] xxxl:w-[20.5rem] py-2" alt="book-keeping" />
              <ul className="flex flex-col  h-full space-y-2 text-left py-2">
                <div className="flex justify-center">
                  <h3 className="font-bold md:text-lg xxxl:text-2xl">Accounting</h3>
                </div>
                <div className="flex space-x-2 items-center">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Analyzing transactions</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Preparing reports</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5 pb-5" alt="check" />
                  <li className="xxxl:text-xl" >Ensuring compliance with <br /> standards and regulations</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li className="xxxl:text-xl" >Providing insights and recommendations</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="features" className="px-5 py-10 border border-b border-grey-shade-3 xl:border-0 bg-light h-full text-text-dark md:px-12 md:py-14 lg:px-20 xl:px-[.5rem] xl:py-0 xl:scale-75
      xxl:space-y-0 xxl:px-[5.5rem] xxl:scale-75 xxxl:scale-100 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col space-y-20">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
            {/* Section 1 Left side */}
            <div className="flex flex-col w-full space-y-6">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">Single Platform</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[2.5rem] leading-[3.2rem] md:text-[3rem] font-medium md:leading-[3.5rem]">One platform for <br className="hidden lg:block" /> all your reports.</h2>
                <h5 className="text-lg md:text-xl text-text-disabled">Manage daily transactions, inventory, and <br /> finances — all in one dashboard.</h5>
              </div>
              <div>
                <ul className="flex flex-col space-y-2 font-medium text-lg">
                  <div className="flex space-x-2 items-center ">
                    <img src="./check.svg" className="w-5" alt="check" />
                    <li>Real-time sales and expense tracking</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./check.svg" className="w-5" alt="check" />
                    <li>Automated inventory insights</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./check.svg" className="w-5" alt="check" />
                    <li>Ready-to-use inancial statements</li>
                  </div>
                </ul>
              </div>
            </div>

            {/* Section 1 Right side */}
            <div className="w-full h-full lg:h-auto bg-card flex justify-center items-end rounded-2xl">
              <img src="./features-1.svg" className="w-80 pt-10 lg:w-90" alt="features-1" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0">
            {/* Section 2 Left side */}
            <div className="w-full bg-card flex justify-center items-center rounded-2xl order-2 lg:order-1">
              <img src="./features-2.svg" className="w-80 pt-5" alt="features-1" />
            </div>
            {/* Section 2 Right side */}
            <div className="flex flex-col w-full space-y-6 order-1 pb-8 lg:pb-0">
              <div className="w-44 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">Effortless Delivery</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[2.5rem] leading-[3.2rem] md:text-[3rem] font-medium md:leading-[3.5rem]">Financial Clarity Without the Hassle.</h2>
                <h5 className="text-xl text-text-disabled">No tools, no training — simply send us your data and receive accurate financial reports you can trust.</h5>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-16 h-16 md:w-14 md:h-14 xl:w-14 xl:h-14 flex items-center justify-center">
                    <img src="./done.png" className="w-9 h-9" alt="done" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h5 className="font-medium">Done-For-You Reporting</h5>
                    <p>We handle the calculations, formatting, and compliance.</p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-20 h-16 md:w-14 md:h-14 xl:w-14 xl:h-14 flex items-center justify-center">
                    <img src="./easy.png" className="w-9 h-9" alt="easy" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h5 className="font-medium">Simple & Secure Process</h5>
                    <p>One quick handoff, and your reports are delivered — clean and complete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us section */}
      <div id="about" className="px-5 py-10 bg-light h-full text-text-dark border border-b border-grey-shade-3 xl:border-0 md:px-12 md:py-14 lg:px-20 lg:py-10 xl:px-44 xl:py-0
      xxl:space-y-0 xxl:px-[12rem] xxl:scale-90 xxxl:scale-100 xxxl:px-80 xxxl:py-10 ">
        <div className="flex flex-col space-y-14">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Section 1 Left side */}
            <div className="flex flex-col lg:w-[47%] space-y-6 pb-4 lg:pb-0">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">What We Are</p>
              </div>
              <div className="">
                <h2 className="text-[3rem] font-medium leading-[4rem]">Your Finance, <br className="hidden lg:block" /> Our Focus.</h2>
                <h5 className="text-xl text-text-disabled">Smart reporting. Clear insights. Total control.</h5>
              </div>
              <p className="font-medium">At Finx, we help businesses take control of their finances with accurate, real-time reporting.
                From growing startups to established enterprises, our tools keep your records organized, compliant, and ready to
                support every decision.</p>
            </div>

            {/* Section 1 Right side */}
            <div className="relative lg:w-[50%] bg-card flex justify-center items-end rounded-2xl">
              <img src="./what-we-are.svg" className="w-80   -bottom-5" alt="features-1" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row jsutify-between lg:space-x-8 lg:space-y-3 ">
            {/* Section 2 Left side */}
            <div className="lg:w-[50%] order-2 pt-4 lg:pt-0">
              <div className="w-full bg-card h-full rounded-2xl flex items-center justify-center">
                <ul className="grid grid-flow-row-dense grid-cols-2 gap-3 py-4 px-4 lg:px-8 md:gap-8 lg:gap-12 md:py-6 ">
                  <div className="flex space-x-2 items-start xxxl:items-center ">
                    <img src="./accrual-accounting.png" className="w-8 md:w-12" alt="accrual" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Accrual Accounting</li>
                  </div>
                  <div className="flex space-x-2 items-start xxxl:items-center ">
                    <img src="./cash-accounting.png" className="w-8 md:w-12" alt="cash" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Cash Accounting</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./gaap.png" alt="gaap" className="w-8 md:w-12" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">GAAP</li>
                  </div>
                  <div className="flex space-x-2 items-start xxxl:items-center ">
                    <img src="./financial-statements.png" className="w-8 md:w-12" alt="financial" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Financial Statements</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./budgeting.png" className="w-8 md:w-12" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Budgeting</li>
                  </div>
                </ul>
              </div>
            </div>
            {/* Section 2 Right side */}
            <div className="flex flex-col lg:w-[50%] space-y-6 lg:order-2">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">Our Principles</p>
              </div>
              <div>
                <h2 className="text-[3rem] font-medium leading-[4rem]">Our Foundation built on Core Principles.</h2>
                <p className="text-xl text-text-disabled">From accrual and cash accounting to GAAP standards, budgeting, and financial statements — these are the fundamentals that power every Finx solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight section*/}
      <div id="highlight" className="px-5 py-10 bg-light h-full text-text-dark border border-b border-grey-shade-3 xl:border-0 md:px-12 md:py-14 lg:px-20 lg:py-10 xl:px-52 xl:py-14
      xxl:py-0 xxl:space-y-0 xxl:px-[5.5rem] xxl:scale-75 xxxl:scale-100 xxxl:px-80 xxxl:py-20">
        <div className="flex flex-col md:items-center space-y-8 lg:space-y-14 md:text-center">
          <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full" />
            <p className="font-medium text-green-accent">Why Us?</p>
          </div>
          <div className="flex flex-col lg:space-y-4 md:items-center justify-center">
            <div className="flex space-x-2">
              <h1 className="text-[3rem] font-medium leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem]">Why</h1>
              <div className="flex flex-col items-center">
                <h1 className="text-[3rem] font-medium leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] text-green-accent">Finx?</h1>
                <img src="./highlight-bar.svg" className="w-28 lg:w-32" alt="highlight-bar" />
              </div>
            </div>
            <h1 className="text-[2.6rem] leading-[3.8rem] md:text-[3rem]  md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-medium">Because Precision Matters.</h1>
            <h4 className="text-xl lg:text-2xl text-text-disabled">Accurate, secure, and scalable financial reporting tools designed to <br className="hidden lg:block" /> streamline your operations and support confident decision-making.</h4>
          </div>

          {/* Highlight Card section*/}
          <div className="flex flex-col md:space-y-16 md:scale-75 lg:scale-100 w-full">
            <div className="hidden md:flex justify-between xxxl:px-[1.5rem]">
              {/* Card 1 */}
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./update.png" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Regularly <br /> Updating <br /> Records</h4>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./accuracy.svg" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Ensuring <br /> Accuracy </h4>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./control.svg" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left w-[6rem]">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Implementing <br /> Controls</h4>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-between w-full lg:px-[4rem] xxl:px-[12rem]">
              {/* Card 4 */}
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-24 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./audit.png" alt="update" className="w-16 ml-2" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[7rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Conducting <br /> Audits & <br /> Reviews</h4>
                </div>
              </div>
              {/* Card 5 */}
              <div className="relative w-[26rem] flex justify-center items-center ">
                <div className="relative w-22 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./test-passed.png" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left w-[14rem]">
                  <div className="w-16 h-32 absolute left-[7rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Staying Up-to-Date <br /> with Standards & <br /> Regulations</h4>
                </div>
              </div>
            </div>
            {/* Highlight Card - mobile section*/}
            <div className="md:hidden w-full space-y-8">
              {/* Card 1 */}
              <div className=" flex ">
                <div className=" w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./test-passed.png" alt="update" className="w-10 " />
                </div>
                <div className="relative flex items-center text-left">
                  <div className="w-16 h-32 absolute -left-[1.2rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-base font-medium">Staying Up-to-Date <br /> with Standards & <br /> Regulations</h4>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-between space-y-4">
                  {/* Card 2 */}
                  <div className="relative flex justify-start items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                      <img src="./control.svg" alt="update" className="w-10 " />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                      <h4 className="z-10 text-grey-shade-2 text-base font-medium">Implementing <br /> Controls</h4>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="relative flex justify-start items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                      <img src="./audit.png" alt="update" className="w-10 " />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                      <h4 className="z-10 text-grey-shade-2 text-base font-medium">Conducting <br /> Audits & <br /> Reviews</h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end w-full space-y-4">
                  {/* Card 4 */}
                  <div className="relative flex justify-between items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                      <img src="./update.png" alt="update" className="w-10 " />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                      <h4 className="z-10 text-grey-shade-2 text-base font-medium">Regularly <br /> Updating <br /> Records</h4>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="relative flex justify-between items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                      <img src="./accuracy.svg" alt="update" className="w-10 " />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                      <h4 className="z-10 text-grey-shade-2 text-base font-medium">Ensuring <br /> Accuracy</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div id="contact" className="px-5 py-10 bg-green-dark justify-between text-light text-center md:px-12 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10">
        <div className="">
          <img src="./logo.png" className="w-24" alt="logo" />
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between w-full">
          <div className="flex flex-col text-left space-y-2">
            <h5 className="font-medium text-xl">Contact Us</h5>
            <div className="">
              <div className="flex space-x-4">
                <h6 className="text-text-disabled">Phone:</h6>
                <div className="w-full">
                  <p>+91 938 747 9905</p>
                  <p>+966 53 609 6221</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <h6 className="text-text-disabled">Hours:</h6>
                <p>9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left space-y-2">
            <h5 className="font-medium text-xl">Locate Us</h5>
            <div className="flex flex-col">
              <h6>Al Malaz Riyadh,</h6>
              <h6>Saudi Arabia.</h6>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex space-x-4 items-center justify-center">
              <a href="https://wa.me/+919497436877" target="_blank" rel="noopener noreferrer">
                <img src="./whatsapp.svg" className="w-10 cursor-pointer" alt="facebook" />
              </a>
              <a href="https://www.facebook.com/share/12MTGYfVKXv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img src="./bxl-facebook.svg" className="w-6 cursor-pointer" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/fin.x.official?igsh=MWlqM2V3a3VxM2diZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <img src="./instagram-logo.svg" className="w-10 cursor-pointer" alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/company/finxofficial/" target="_blank" rel="noopener noreferrer">
                <img src="./linkedin.svg" className="w-12 cursor-pointer" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
