export default function Home() {
  return (
    <main>
      <body className="bg-light">
        <div className="relative bg-green-dark text-light h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />
          <div className="absolute w-60 h-60 bottom-2 rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-70" />
          <div className="absolute w-60 h-60 right-[40rem] rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-70" />
          <div className="relative px-96 py-10 z-10 flex flex-col justify-between space-y-14">
            {/* Nav bar */}
            <nav className="flex justify-between items-center h-[3.5rem] rounded-full">
              <div>
                <img src="./Logo.svg" className="w-[7rem]" alt="" />
              </div>
              <ul className="flex space-x-10 text-lg">
                <li><a href="#" className="text-light hover:text-green-accent">Home</a></li>
                <li><a href="#" className="text-light hover:text-green-accent">About</a></li>
                <li><a href="#" className="text-light hover:text-green-accent">Services</a></li>
                <li><a href="#" className="text-light hover:text-green-accent">Contact</a></li>
              </ul>
              <div />
            </nav>

            {/* Hero section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex space-x-4 p-1 items-center justify-between bg-light bg-opacity-10 rounded-full border border-light border-opacity-10">
                <div className="w-16 h-6 bg-lime flex items-center justify-center rounded-full">
                  <p className="text-text-dark">New</p>
                </div>
                <p className="pr-2">Inventory Report Upgraded.</p>
              </div>
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full text-center space-y-3">
                  <h1 className="text-[4rem] font-medium leading-[4.5rem]">Focused success<br />with smart finance.</h1>
                  <h4 className="text-2xl ">Track performance, identify trends, and plan<br />ahead with intelligent financial reports.</h4>
                </div>
                <div className="flex space-x-4 items-center jsutify-center bg-green-accent rounded-full px-4 py-3">
                  <p className="text-2xl">Get in touch</p>
                  <img src="./arrow-right.svg" alt="arrow-right" />
                </div>
              </div>
            </div>

            {/* Card section */}
            <div className="">
              <div className="flex justify-between space-x-4">
                <div className="flex flex-col justify-between w-full">

                  {/* Card section 1*/}
                  <div className="w-full flex justify-end">
                    <div className="flex space-x-3 bg-card-glass p-3 w-52 rounded-xl bg-opacity-100 border border-light border-opacity-10">
                      <div className="flex flex-col w-full">
                        <p className="text-text-disabled">Total Balance</p>
                        <div className="flex items-center justify-between space-x-4">
                          <p className="font-bold">5780.00 EUR</p>
                          <div className="bg-green-accent rounded-full ">
                            <p className="text-[.8rem] px-2">+2.35%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card section 2*/}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-5 bg-card-glass px-5 py-3 w-72 h-28 rounded-2xl bg-opacity-100 border border-light border-opacity-10">
                      <img src="./received-icon.svg" alt="received-icon" className="w-16" />
                      <div className="flex flex-col">
                        <p className="text-text-disabled text-lg">Received</p>
                        <p className="font-bold text-xl">5780.00 EUR</p>
                      </div>
                    </div>
                    <img src="./dollar.svg" className="w-16" alt="dollar" />
                  </div>
                </div>

                {/* Center card*/}
                <div className="w-full p-4 h-72 flex flex-col bg-light text-text-dark justify-between items-center rounded-3xl ">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">Sales & Expense</p>
                    <p className="font-semibold text-text-disabled">Monthly Sales & Expense Tracker</p>
                  </div>
                  <div className="flex justify-between w-full text-xl">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center space-x-2">
                        <img src="./sales.png" className="w-6 h-6" alt="dollar" />
                        <p className="font-bold">Retail Sales</p>
                        <img src="./down-arrow.svg" className="w-4" alt="down-arrow" />
                      </div>
                      <p className="font-bold">Total Retail Sales</p>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center space-x-2">
                        <img src="./calendar.png" className="w-6 h-6" alt="dollar" />
                        <p className="font-bold">July 17</p>
                        <img src="./down-arrow.svg" className="w-4" alt="down-arrow" />
                      </div>
                      <p className="font-bold">SAR 92500.00</p>
                    </div>
                  </div>
                  <button className="flex items-center justify-center bg-text-dark text-light rounded-full px-4 py-2 text-lg w-full">
                    Get Report
                  </button>
                </div>
                <div className="w-full flex flex-col justify-between">

                  {/* Card section 3*/}
                  <div className="flex space-x-3 bg-card-glass p-3 w-52 rounded-xl bg-opacity-100 border border-light border-opacity-10">
                    <div className="flex flex-col w-full">
                      <p className="text-text-disabled">Total Balance</p>
                      <div className="flex items-center justify-between space-x-4">
                        <p className="font-bold">5780.00 EUR</p>
                        <div className="bg-green-accent rounded-full ">
                          <p className="text-[.8rem] px-2">+2.35%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card section 4*/}
                  <div className="flex items-end justify-between">
                    <img src="./dollar.svg" className="w-16" alt="dollar" />
                    <div className="flex space-x-3 bg-card-glass p-3 w-44 rounded-xl bg-opacity-100 border border-light border-opacity-10">
                      <img src="./received-icon.svg" alt="received-icon" className="w-10" />
                      <div className="flex flex-col">
                        <p className="text-text-disabled">Received</p>
                        <p className="font-bold">5780.00 EUR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service section*/}
        <div className="bg-light px-96 py-24 h-screen text-text-dark text-center ">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
              <div className="w-2 h-2 bg-green-accent rounded-full" />
              <p className="font-medium text-green-accent">Services</p>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[4rem] font-medium leading-[4.5rem] w-">Smarter Services. <br /> For the Future You.</h1>
              <h4 className="text-2xl text-text-disabled">Smart financial solutions to simplify your journey and <br /> power your growth — today and beyond.</h4>
            </div>

            {/* Service card section*/}
            <div className="w-[80%] bg-card p-2 rounded-2xl flex gap-2 justify-between">
              {/* Service card 1*/}
              <div className="w-full rounded-xl bg-light p-4">
                <div className="flex flex-col items-center">
                  <img src="./book-keeping.svg" alt="book-keeping" />
                  <div>
                    <h3 className="font-bold">Book-Keeping</h3>
                  </div>
                  <ul className="flex flex-col space-y-2">
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Recording transactions (income, expenses, assets, liabilities, equity)</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Maintaining accurate records</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Reconciling accounts</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Preparing financial statements</li>
                    </div>
                  </ul>
                </div>
              </div>
              {/* Service card 2*/}
              <div className="w-full rounded-xl bg-light p-4">
                <div className="flex flex-col items-center">
                  <img src="./accounting.svg" alt="accounting" />
                  <div>
                    <h3 className="font-bold">Accounting</h3>
                  </div>
                  <ul className="flex flex-col space-y-2">
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Analyzing transactions</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Preparing reports</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Ensuring compliance with standards and regulations</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Providing insights and recommendations</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-light px-96 py-20 h-screen text-text-dark ">
          <div className="flex flex-col space-y-8">
            <div className="flex ">
              {/* Section 1 Left side */}
              <div className="flex flex-col w-full space-y-6">
                <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                  <div className="w-2 h-2 bg-green-accent rounded-full" />
                  <p className="font-medium text-green-accent">Single Platform</p>
                </div>
                <div>
                  <h2 className="text-[3rem] font-medium leading-[4rem]">One platform for <br /> all your reports.</h2>
                  <h5 className="text-xl text-text-disabled">Manage daily transactions, inventory, and <br /> finances — all in one dashboard.</h5>
                </div>
                <div>
                  <ul className="flex flex-col space-y-2 font-medium">
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Recording transactions (income, expenses, assets, liabilities, equity)</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Maintaining accurate records</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Reconciling accounts</li>
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <img src="./check.svg" className="w-5" alt="check" />
                      <li>Preparing financial statements</li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* Section 1 Right side */}
              <div className="relative w-full bg-card flex justify-center items-end rounded-2xl">
                <img src="./features-1.svg" className="w-90 absolute  -bottom-5" alt="features-1" />
              </div>
              <div>
              </div>
            </div>
            <div className="flex space-x-4 -">
              {/* Section 2 Left side */}
              <div className="w-full bg-card flex justify-center items-end rounded-2xl">
                <img src="./features-2.svg" className="w-90" alt="features-1" />
              </div>
              <div>
              </div>
              {/* Section 2 Right side */}
              <div className="flex flex-col w-full space-y-6 ">
                <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                  <div className="w-2 h-2 bg-green-accent rounded-full" />
                  <p className="font-medium text-green-accent">Instant Access</p>
                </div>
                <div>
                  <h2 className="text-[3rem] font-medium leading-[4rem]">Getting started is <br /> fast and effortless.</h2>
                  <h5 className="text-xl text-text-disabled">Set up your financial reports in  minutes — <br />no complex onboarding, no learning curve.</h5>
                </div>
                <div className="flex justify-between w-96">
                  <div className="flex w-44 items-center space-x-2 bg-card rounded-lg p-2">
                    <img src="./instant-setup.svg" className="w-12" alt="instant-setup" />
                    <p className="font-bold">Instant Setup</p>
                  </div>
                  <div className="flex w-44 items-center space-x-2 bg-card rounded-lg p-2">
                    <img src="./plugnplay.svg" className="w-12" alt="plugnplay" />
                    <p className="font-bold">Plug-n-Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us section */}
        <div className="bg-light px-96 h-screen py-28 text-text-dark ">
          <div className="flex flex-col space-y-8">
            <div className="flex space-x-8">
              {/* Section 1 Left side */}
              <div className="flex flex-col w-full space-y-6">
                <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                  <div className="w-2 h-2 bg-green-accent rounded-full" />
                  <p className="font-medium text-green-accent">What We Are</p>
                </div>
                <div>
                  <h2 className="text-[3rem] font-medium leading-[4rem]">Your Finance, <br /> Our Focus.</h2>
                  <h5 className="text-xl text-text-disabled">Smart reporting. Clear insights. Total control.</h5>
                </div>
                <p className="font-medium">At Finx, we help businesses take control of their finances with accurate, real-time reporting.
                  From growing startups to established enterprises, our tools keep your records organized, compliant, and ready to
                  support every decision.</p>
              </div>

              {/* Section 1 Right side */}
              <div className="relative w-full bg-card flex justify-center items-end rounded-2xl">
                <img src="./what-we-are.svg" className="w-80   -bottom-5" alt="features-1" />
              </div>
              <div>
              </div>
            </div>
            <div className="flex space-x-4 space-y-3 ">
              {/* Section 2 Left side */}
              <div className="w-full bg-card  rounded-2xl">
                <ul className="flex flex-col py-6 px-8">
                  <div className="flex space-x-2 items-center ">
                    <img src="./accrual-accounting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2">Accrual Accounting</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./cash-accounting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2">Cash accounting</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./gaap.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2">GAAP</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./financial-statements.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2">Financial Statements</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./budgeting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2">Budgeting</li>
                  </div>
                </ul>
              </div>
              <div>
              </div>
              {/* Section 2 Right side */}
              <div className="flex flex-col w-full space-y-6 ">
                <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                  <div className="w-2 h-2 bg-green-accent rounded-full" />
                  <p className="font-medium text-green-accent">Our Principles</p>
                </div>
                <div>
                  <h2 className="text-[3rem] font-medium leading-[4rem]">Our Foundation built on <br /> Core Principles.</h2>
                  <p className="text-xl text-text-disabled">From accrual and cash accounting to GAAP standards, budgeting, and financial statements — these are the fundamentals that power every Finx solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Us section*/}
        <div className="bg-light px-96 py-20 justify-between h-screen text-text-dark text-center ">
          <div className="flex flex-col items-center  space-y-14">
            <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
              <div className="w-2 h-2 bg-green-accent rounded-full" />
              <p className="font-medium text-green-accent">Why Us?</p>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
              <div className="flex space-x-2">
                <h1 className="text-[4rem] font-medium leading-[4.5rem] w-">Why</h1>
                <div>
                  <h1 className="text-[4rem] font-medium leading-[4.5rem] w-">Finx?</h1>
                  <img src="./highlight-bar.svg" className="w-32" alt="highlight-bar" />
                </div>
              </div>
              <h4 className="text-2xl text-text-disabled">Accurate, secure, and scalable financial reporting tools designed to <br /> streamline your operations and support confident decision-making.</h4>
            </div>

            {/* Why Us Card section*/}
            <div className="flex flex-col space-y-14">
              <div className="flex justify-between ">
                <div className="relative w-72 inline-flex justify-center items-center">
                  <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                    <img src="./update.png" alt="update" className="w-14 ml-3" />
                  </div>
                  <div className="flex items-center text-left">
                    <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                    <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Regularly <br /> Updating <br /> Records</h4>
                  </div>
                </div>
                <div className="relative w-72 inline-flex justify-center items-center">
                  <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                    <img src="./accuracy.svg" alt="update" className="w-14 ml-3" />
                  </div>
                  <div className="flex items-center text-left">
                    <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                    <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Ensuring <br /> Accuracy </h4>
                  </div>
                </div>
                <div className="relative w-72 inline-flex justify-center items-center">
                  <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                    <img src="./control.svg" alt="update" className="w-14 ml-3" />
                  </div>
                  <div className="flex items-center text-left w-[6rem]">
                    <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                    <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Implementing <br /> Controls</h4>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full px-32">
                <div className="relative w-72 inline-flex justify-center items-center">
                  <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                    <img src="./audit.png" alt="update" className="w-14 ml-3" />
                  </div>
                  <div className="flex items-center text-left">
                    <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                    <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Regularly <br /> Updating <br /> Records</h4>
                  </div>
                </div>
                <div className="relative w-[26rem] inline-flex justify-center items-center ">
                  <div className="relative w-22 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                    <img src="./test-passed.png" alt="update" className="w-14 ml-3" />
                  </div>
                  <div className="flex items-center text-left w-[14rem]">
                    <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                    <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Staying Up-to-Date <br /> with Standards & <br /> Regulations</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}
