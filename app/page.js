import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-light">
      <div className="relative bg-green-dark text-light h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute w-60 h-60 bottom-2 rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-70" />
        <div className="absolute w-60 h-60 right-[40rem] rounded-full bg-lime blur-[6rem] mix-blend-overlay opacity-70" />
        <div className="relative h-full px-5 py-5 space-y-0 md:px-12 lg:px-20 lg:py-5 xl:px-52 xl:py-10 xxl:space-y-0 xxxl:px-80 xxxl:py-10
        z-10 flex flex-col justify-between ">
          {/* Nav bar */}
          <nav className="flex justify-between items-center h-[3.5rem] rounded-full
           ">
            <div>
              <img src="./logo.png" className="w-24 md:w-[5rem] lg:w-[5rem] xl:w-[6rem] xxxl:w-[7rem]" alt="" />
            </div>
            <ul className="hidden lg:flex space-x-10 xxl:text-lg">
              <li><a href="#" className="text-light hover:text-green-accent">Home</a></li>
              <li><a href="#" className="text-light hover:text-green-accent">About</a></li>
              <li><a href="#" className="text-light hover:text-green-accent">Services</a></li>
              <li><a href="#" className="text-light hover:text-green-accent">Contact</a></li>
            </ul>
            <div />
          </nav>

          {/* Hero section */}
          <div className="flex flex-col items-start md:items-center justify-center space-y-6 lg:space-y-2 xxxl:space-y-4 ">
            <div className="flex space-x-2 xxxl:space-x-4 p-1 items-center justify-between bg-light bg-opacity-10
            rounded-full border border-light border-opacity-10">
              <div className="w-14 xxl:w-16 xxl:h-6 bg-lime flex items-center justify-center rounded-full">
                <p className="text-text-dark md:text-lg  xxxl:text-lg">New</p>
              </div>
              <p className="pr-2 md:text-lg">Inventory report upgraded.</p>
            </div>
            <div className="flex flex-col md:items-center space-y-6 xl:space-y-6 xxxl:space-y-8">
              <div className="w-full md:text-center space-y-1 xl:space-y-2 xxxl:space-y-3">
                <h1 className="text-[2.5rem] leading-[3.2rem] sm:text-[2.8rem] md:text-[4rem] md:leading-[4.5rem] lg:text-[4rem]
                font-medium lg:leading-[4.5rem]">Focused success<br />with smart finance.</h1>
                <h4 className="m ai:text-xl xxxl:text-2xl">Track performance, identify trends, and plan<br />ahead with intelligent financial reports.</h4>
              </div>
              <div className="w-40 h-10 md:w-44 md:h-14 xxxl:w-52 space-x-4 xxxl:space-x-4 flex items-center jsutify-center bg-green-accent rounded-full px-4 md:py-1 xxxl:px-4 xxxl:py-3">
                <p className="md:text-lg xxxl:text-2xl pb-1">Get in touch</p>
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
              <div className="md:bottom-5lg:bottom-0  flex items-start justify-between">
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
              <div className=" flex items-end justify-between">
                <img src="./ledger.svg" className="hidden lg:block lg:w-12 xxxl:w-16" alt="dollar" />
                <div className="w-52 h-20 xxxl:w-72 xxxl:h-28 flex items-center space-x-3 bg-card-glass p-3  rounded-xl bg-opacity-100 border border-light border-opacity-10">
                  <div className="flex justify-between items-center w-full">
                    <div className="relative flex items-center">
                      <div className="absolute w-10 h-10 xxxl:w-14 xxxl:h-14 bg-green-accent bg-[url('/profile1.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light" />
                      <div className="absolute w-10 h-10 xxxl:w-14 xxxl:h-14 bg-light-blue bg-[url('/profile2.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light left-6 xxxl:left-8" />
                      <div className="absolute w-10 h-10 xxxl:w-14 xxxl:h-14 bg-light-purple bg-[url('/profile3.png')] bg-cover bg-center rounded-full
                        border-[.2rem] border-light left-12 xxxl:left-16" />
                    </div>
                    <div>
                      <p className="font-bold xxxl:text-2xl">99.25K+</p>
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
              <img src="/card3_white.png" className="lg:w-[40rem] lg:hidden" alt="hero-image" />
              <img src="/card3_white_large.png" className="lg:w-[44rem] hidden lg:block" alt="hero-image" />
            </div>
            <img src="./card1.png" className="absolute z-0 w-40 left-0 bottom-60 sm:bottom-64 md:bottom-[20rem] md:w-52 md:left-28
            lg:w-72 lg:left-[7rem] lg:bottom-[28rem] opacity-40" alt="card1" />
            <img src="./card2.png" className="absolute z-0 w-32 left-14 bottom-60 sm:left-[8rem] sm:bottom-[17rem] md:bottom-[20rem] md:w-52 md:left-[15rem]
            lg:w-68 lg:left-[20rem] lg:bottom-[31rem]" alt="card1" />
            <img src="./card4.png" className="absolute z-0 w-32 left-64 bottom-[14.5rem] sm:left-[18.5rem] sm:bottom-[16rem] md:bottom-[19rem] md:w-52 md:left-[30rem]
            lg:w-72 lg:left-[40rem] lg:bottom-[29rem] opacity-40" alt="card1" />
            <img src="./card5.png" className="absolute z-0 lg:block w-24 left-[11rem] bottom-[15.5rem] sm:w-28 sm:left-[12rem] sm:bottom-[17rem] md:bottom-[19rem] md:w-52 md:left-[22rem]
            lg:w-72 lg:left-[30rem] lg:bottom-[28rem]" alt="card1" />
          </div>
        </div>
      </div>

      {/* Service section*/}
      <div className="lg:px-20 lg:py-5 xl:px-52 xl:py-10 xxl:space-y-0 xxxl:px-80 xxxl:py-10 bg-light h-screen text-text-dark text-center">
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
          <div className="flex justify-between space-x-2 bg-card p-2 rounded-2xl w-[84%] xxxl:w-[68%]">
            <div className="flex flex-col items-center bg-light rounded-xl p-4 w-full">
              <img src="./book-keeping.svg" className="py-2" alt="book-keeping" />
              <div>
                <h3 className="font-bold">Book-Keeping</h3>
              </div>
              <ul className="flex flex-col space-y-2 text-left py-2">
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5 pb-3" alt="check" />
                  <li>Recording transactions <br /> (income, expenses, assets, liabilities, equity)</li>
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
            <div className="flex flex-col items-center bg-light rounded-xl p-4 w-full">
              <img src="./accounting.svg" className="py-2" alt="book-keeping" />
              <div>
                <h3 className="font-bold">Accounting</h3>
              </div>
              <ul className="flex flex-col space-y-2 text-left py-2">
                <div className="flex space-x-2 items-center">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li>Analyzing transactions</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li>Preparing reports</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li>Ensuring compliance with <br /> standards and regulations</li>
                </div>
                <div className="flex space-x-2 items-center ">
                  <img src="./check.svg" className="w-5" alt="check" />
                  <li>Providing insights and recommendations</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-light h-screen text-text-dark lg:px-20 lg:py-10 xl:px-52 xl:py-10 xxl:space-y-0 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col space-y-14">
          <div className="flex ">
            {/* Section 1 Left side */}
            <div className="flex flex-col w-full space-y-6">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">Single Platform</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[3rem] font-medium leading-[3.5rem]">One platform for <br /> all your reports.</h2>
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
          <div className="flex space-x-4">
            {/* Section 2 Left side */}
            <div className="relative w-full bg-card flex justify-center items-center rounded-2xl">
              <img src="./features-2.svg" className="w-80 pt-4" alt="features-1" />
            </div>
            <div>
            </div>
            {/* Section 2 Right side */}
            <div className="flex flex-col w-full space-y-6 ">
              <div className="w-44 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" />
                <p className="font-medium text-green-accent">Effortless Delivery</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[3rem] font-medium leading-[3.5rem]">Financial Clarity Without the Hassle.</h2>
                <h5 className="text-xl text-text-disabled">No tools, no training — simply send us your data and receive accurate financial reports you can trust.</h5>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-14 h-14 flex items-center justify-center">
                    <img src="./done.png" className="w-9 h-9" alt="done" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h5 className="font-medium">Done-For-You Reporting</h5>
                    <p>We handle the calculations, formatting, and compliance.</p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-14 h-14 flex items-center justify-center">
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
      <div className="bg-light h-screen text-text-dark lg:px-20 lg:py-5 xl:px-52 xl:py-10 xxl:space-y-0 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col space-y-14">
          <div className="flex justify-between space-y-3">
            {/* Section 1 Left side */}
            <div className="flex flex-col w-[50%] space-y-6">
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
            <div className="relative w-[50%] bg-card flex justify-center items-end rounded-2xl">
              <img src="./what-we-are.svg" className="w-80   -bottom-5" alt="features-1" />
            </div>
            <div>
            </div>
          </div>
          <div className="flex jsutify-between space-x-8 space-y-3 ">
            {/* Section 2 Left side */}
            <div className="w-[50%]">
              <div className="w-full bg-card h-full rounded-2xl flex items-center justify-center">
                <ul className="grid grid-flow-row-dense grid-cols-2 px-8 gap-6">
                  <div className="flex space-x-2 items-center ">
                    <img src="./accrual-accounting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-xl">Accrual Accounting</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./cash-accounting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-xl">Cash accounting</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./gaap.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-xl">GAAP</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./financial-statements.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-xl">Financial Statements</li>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <img src="./budgeting.png" alt="" />
                    <li className="pb-2 font-bold text-grey-shade-2 text-xl">Budgeting</li>
                  </div>
                </ul>
              </div>
            </div>
            <div>
            </div>
            {/* Section 2 Right side */}
            <div className="flex flex-col w-[50%] space-y-6">
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
      <div className="bg-light justify-between h-screen text-text-dark text-center lg:px-20 lg:py-5 xl:px-52 xl:py-10 xxl:space-y-0 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col items-center  space-y-14">
          <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full" />
            <p className="font-medium text-green-accent">Why Us?</p>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div className="flex space-x-2">
              <h1 className="text-[4rem] font-medium leading-[4.5rem]">Why</h1>
              <div className="flex flex-col items-center">
                <h1 className="text-[4rem] text-green-accent font-medium leading-[4.5rem]">Finx?</h1>
                <img src="./highlight-bar.svg" className="w-32" alt="highlight-bar" />
              </div>
            </div>
            <h1 className="text-[4rem] font-medium leading-[4.5rem]">Because Precision Matters.</h1>
            <h4 className="text-2xl text-text-disabled">Accurate, secure, and scalable financial reporting tools designed to <br /> streamline your operations and support confident decision-making.</h4>
          </div>

          {/* Why Us Card section*/}
          <div className="flex flex-col space-y-14">
            <div className="flex justify-between ">
              {/* Card 1 */}
              <div className="relative w-72 inline-flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./update.png" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Regularly <br /> Updating <br /> Records</h4>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative w-72 inline-flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./accuracy.svg" alt="update" className="w-14 ml-3" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Ensuring <br /> Accuracy </h4>
                </div>
              </div>
              {/* Card 3 */}
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
              {/* Card 4 */}
              <div className="relative w-72 inline-flex justify-center items-center">
                <div className="relative w-24 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <img src="./audit.png" alt="update" className="w-16 ml-2" />
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-32 absolute left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" />
                  <h4 className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Conducting <br /> Audits & <br /> Reviews</h4>
                </div>
              </div>
              {/* Card 5 */}
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
    </div>
  )
}
