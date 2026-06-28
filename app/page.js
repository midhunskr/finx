import Image from 'next/image';
import StickyNav from './components/StickyNav';

const sectionIds = ['services', 'features', 'about', 'value', 'contact'];

export default function Home() {
  return (
    <div className="bg-light">
      <StickyNav sectionIds={sectionIds} />

      {/* ── Hero ── */}
      <div className="relative bg-green-dark text-light overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute w-60 h-60 bottom-2 rounded-full bg-lime blur-[6rem] mix-blend-overlay" />
        <div className="absolute w-60 h-60 right-[5rem] top-[9rem] md:right-[10rem] lg:right-[20rem] xxl:right-[30rem] xxxl:right-[40rem] rounded-full bg-lime blur-[6rem] mix-blend-overlay" />

        <div className="relative min-h-screen md:h-screen px-5 py-5 md:px-12 md:py-5 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10 z-10 flex flex-col justify-between">

          {/* Logo bar */}
          <div className="flex justify-between items-center h-[3.5rem] rounded-full">
            <Image src="/logo.png" alt="Finx" width={200} height={60} className="w-32 md:w-[7rem] xl:w-[8rem] xxxl:w-[9rem]" style={{ height: 'auto' }} priority />
          </div>

          {/* Hero content */}
          <div className="flex flex-col items-start md:items-center justify-center space-y-6 lg:space-y-2 xxxl:space-y-4">
            <div className="flex space-x-2 xxxl:space-x-4 p-1 items-center justify-between bg-light bg-opacity-10 rounded-full border border-light border-opacity-10">
              <div className="w-12 xxl:w-16 xxl:h-6 bg-lime flex items-center justify-center rounded-full">
                <span className="text-text-dark text-xs md:text-lg xxxl:text-lg">New</span>
              </div>
              <p className="pr-2 text-xs md:text-lg">Inventory report upgraded.</p>
            </div>
            <div className="flex flex-col md:items-center space-y-6 xl:space-y-6 xxxl:space-y-8">
              <div className="w-full md:text-center space-y-1 xl:space-y-2 xxxl:space-y-3">
                <h1 className="text-[2.5rem] leading-[3.2rem] sm:text-[2.8rem] md:text-[4rem] md:leading-[4.5rem] lg:text-[4rem] font-medium lg:leading-[4.5rem]">Focused success<br />with smart finance.</h1>
                <p className="md:text-xl xxxl:text-2xl">Track performance, identify trends, and plan ahead with intelligent financial reports.</p>
              </div>
              <a
                href="#contact"
                className="w-40 h-10 md:w-44 md:h-14 xxxl:w-52 space-x-4 flex items-center justify-center bg-green-accent rounded-full px-4 md:py-1 xxxl:px-4 xxxl:py-3"
              >
                <span className="md:text-lg xxxl:text-2xl">Get in touch</span>
                <Image src="/arrow-right.svg" width={20} height={20} className="lg:w-5" alt="" />
              </a>
            </div>
          </div>

          {/* Hero cards — desktop (xl+) */}
          <div className="hidden xl:flex justify-center xl:justify-between xl:space-x-4 xxxl:space-x-6">
            <div className="flex flex-col justify-between w-full">
              <div className="w-full lg:flex justify-end">
                <div className="xxxl:w-52 h-20 flex space-x-3 bg-card-glass p-3 rounded-xl border border-light border-opacity-10">
                  <div className="flex flex-col w-full justify-center space-y-2">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg">Total Balance</p>
                    <div className="flex items-center justify-between space-x-4">
                      <p className="font-bold lg:text-md xxxl:text-lg">5780.00 EUR</p>
                      <div className="bg-green-accent rounded-full">
                        <p className="text-[.8rem] px-2">+2.35%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-4 flex items-start justify-between">
                <div className="lg:h-20 xxl:w-72 xxxl:h-28 flex items-center space-x-5 bg-card-glass px-5 py-3 rounded-2xl border border-light border-opacity-10">
                  <Image src="/received-icon.svg" width={40} height={40} alt="" className="lg:w-10 xxxl:w-16" />
                  <div className="flex flex-col">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg">Received</p>
                    <p className="font-bold lg:text-md xxxl:text-xl">5780.00 EUR</p>
                  </div>
                </div>
                <Image src="/dollar.svg" width={48} height={48} className="hidden lg:block lg:w-12 xxxl:w-16" alt="" />
              </div>
            </div>

            <div className="lg:w-full w-[50%] h-72 md:p-4 lg:p-2 lg:space-y-4 xl:h-auto xxxl:p-4 xxxl:h-72 lg:flex flex-col bg-light text-text-dark justify-between items-center rounded-3xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold lg:text-lg xxxl:text-2xl">Sales &amp; Expense</p>
                <p className="font-semibold text-text-disabled lg:text-md xxxl:text-lg">Monthly Sales &amp; Expense Tracker</p>
              </div>
              <div className="flex justify-between w-full text-xl">
                <div className="flex flex-col lg:space-y-1 xxxl:space-y-3">
                  <div className="flex justify-between items-center space-x-2">
                    <Image src="/sales.png" width={24} height={24} className="w-6 h-6" alt="" />
                    <p className="font-bold lg:text-base xxxl:text-xl">Retail Sales</p>
                    <Image src="/down-arrow.svg" width={16} height={16} className="w-4" alt="" />
                  </div>
                  <p className="font-bold lg:text-base xxxl:text-xl">Total Retail Sales</p>
                </div>
                <div className="flex flex-col lg:space-y-1 xxxl:space-y-3">
                  <div className="flex justify-between items-center space-x-2">
                    <Image src="/calendar.png" width={24} height={24} className="w-6 h-6" alt="" />
                    <p className="font-bold lg:text-base xxxl:text-xl">July 17</p>
                    <Image src="/down-arrow.svg" width={16} height={16} className="w-4" alt="" />
                  </div>
                  <p className="font-bold lg:text-base xxxl:text-xl">SAR 92500.00</p>
                </div>
              </div>
              <button className="flex items-center justify-center bg-text-dark text-light rounded-full lg:py-1 xxxl:py-2 text-lg w-full lg:text-base xxxl:text-xl">
                <span className="xxxl:pb-1">Get Report</span>
              </button>
            </div>

            <div className="w-full flex flex-col justify-between">
              <div className="w-full lg:flex justify-start">
                <div className="xxxl:w-56 xxxl:h-28 flex space-x-3 bg-card-glass p-3 rounded-xl border border-light border-opacity-10">
                  <div className="flex flex-col w-full justify-center space-y-2">
                    <p className="text-text-disabled lg:text-sm xxxl:text-lg">Net Income</p>
                    <div className="flex items-center justify-between space-x-4">
                      <p className="font-bold lg:text-md xxxl:text-2xl">$234.67K</p>
                      <div className="bg-green-accent rounded-full">
                        <p className="text-[.8rem] px-2">+4.75%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end space-x-4 justify-between">
                <Image src="/ledger.svg" width={48} height={48} className="hidden lg:block lg:w-12 xxxl:w-16" alt="" />
                <div className="w-full h-20 xxxl:w-72 xxxl:h-28 flex items-center space-x-3 bg-card-glass p-3 rounded-xl border border-light border-opacity-10">
                  <div className="flex justify-between items-center w-full">
                    <div className="relative flex items-center">
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-green-accent bg-[url('/profile1.png')] bg-cover bg-center rounded-full border-[.2rem] border-light" />
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-light-blue bg-[url('/profile2.png')] bg-cover bg-center rounded-full border-[.2rem] border-light left-6 xl:left-8 xxl:left-6 xxxl:left-8" />
                      <div className="absolute xl:w-14 h-14 xxl:w-10 xxl:h-10 xxxl:w-14 xxxl:h-14 bg-light-purple bg-[url('/profile3.png')] bg-cover bg-center rounded-full border-[.2rem] border-light left-12 xl:left-16 xxl:left-12 xxxl:left-16" />
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

          {/* Hero cards — mobile (< xl) */}
          <div className="xl:hidden flex items-center justify-center">
            <div className="relative z-20">
              <Image
                src="/card3_white_large.png"
                width={704}
                height={450}
                className="w-[22rem] sm:w-[24rem] md:w-[30rem] lg:w-[44rem]"
                style={{ height: 'auto' }}
                alt="Financial dashboard overview"
                priority
              />
            </div>
            <Image src="/card1.png" width={288} height={200} className="absolute z-0 w-40 left-0 bottom-60 sm:bottom-64 md:bottom-[20rem] md:w-52 md:left-28 lg:w-72 lg:left-[7rem] lg:bottom-[28rem] opacity-40" style={{ height: 'auto' }} alt="" />
            <Image src="/card2.png" width={288} height={200} className="absolute z-0 w-32 left-14 bottom-60 sm:left-[8rem] sm:bottom-[17rem] md:bottom-[20rem] md:w-52 md:left-[15rem] lg:left-[20rem] lg:bottom-[31rem]" style={{ height: 'auto' }} alt="" />
            <Image src="/card4.png" width={288} height={200} className="absolute z-0 w-32 left-64 bottom-[14.5rem] sm:left-[18.5rem] sm:bottom-[16rem] md:bottom-[19rem] md:w-52 md:left-[28rem] lg:w-72 lg:left-[40rem] lg:bottom-[29rem] opacity-40" style={{ height: 'auto' }} alt="" />
            <Image src="/card5.png" width={288} height={200} className="absolute z-0 w-24 left-[11rem] bottom-[15.5rem] sm:w-28 sm:left-[12rem] sm:bottom-[17rem] md:bottom-[19rem] md:w-52 md:left-[22rem] lg:w-72 lg:left-[30rem] lg:bottom-[28rem]" style={{ height: 'auto' }} alt="" />
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <section id="services" className="px-5 py-10 h-full border-b border-grey-shade-3 xl:border-0 lg:px-20 md:text-center md:px-12 md:py-14 xl:px-40 xl:py-10 xxl:px-64 xxl:py-10 xxxl:px-80 xxxl:py-10 bg-light text-text-dark">
        <div className="flex flex-col md:items-center h-full justify-between space-y-6 xl:space-y-8">
          <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
            <span className="font-medium text-green-accent">Services</span>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-[2.5rem] leading-[3.2rem] md:text-[3.5rem] md:leading-[3.8rem] lg:text-[4rem] lg:leading-[4.5rem] xl:text-[3rem] xl:leading-[3.5rem] xxl:text-[3rem] xxl:leading-[3.4rem] xxxl:text-[4.4rem] font-medium xxxl:leading-[4.5rem]">Smarter Services. <br /> For the Future You.</h2>
            <p className="text-lg md:text-2xl text-text-disabled">Smart financial solutions to simplify your journey and <br className="hidden md:block" /> power your growth — today and beyond.</p>
          </div>

          <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between lg:space-x-2 bg-card p-2 rounded-3xl w-full">
            {/* Book-Keeping */}
            <div className="flex flex-col md:flex-row justify-between px-6 space-x-2 lg:space-x-0 lg:flex-col items-center bg-light rounded-2xl xxl:p-2 xxxl:p-4 w-full py-8">
              <Image src="/book-keeping.svg" width={256} height={256} className="md:order-2 lg:order-1 xl:w-[8rem] xxl:w-[12rem] xxxl:w-[16rem] py-2" style={{ height: 'auto' }} alt="" />
              <div className="flex flex-col h-full space-y-2 text-left py-2 lg:order-2">
                <h3 className="text-center font-bold md:text-lg xxxl:text-2xl">Book-Keeping</h3>
                <ul className="flex flex-col space-y-2">
                  <li className="flex space-x-2 items-start">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0 mt-1" alt="" />
                    <span className="xxxl:text-xl">Recording transactions (income, expenses, assets, liabilities, equity)</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Maintaining accurate records</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Reconciling accounts</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Preparing financial statements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Accounting */}
            <div className="flex flex-col md:flex-row justify-between px-6 space-x-2 lg:space-x-0 lg:flex-col items-center bg-light rounded-2xl xxl:p-2 xxxl:p-4 w-full py-8">
              <Image src="/accounting.svg" width={256} height={256} className="xl:w-[10.5rem] xxl:w-[15.5rem] xxxl:w-[20.5rem] py-2" style={{ height: 'auto' }} alt="" />
              <div className="flex flex-col h-full space-y-2 text-left py-2">
                <h3 className="text-center font-bold md:text-lg xxxl:text-2xl">Accounting</h3>
                <ul className="flex flex-col space-y-2">
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Analyzing transactions</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Preparing reports</span>
                  </li>
                  <li className="flex space-x-2 items-start">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0 mt-1" alt="" />
                    <span className="xxxl:text-xl">Ensuring compliance with standards and regulations</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                    <span className="xxxl:text-xl">Providing insights and recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="px-5 py-10 border-b border-grey-shade-3 xl:border-0 bg-light h-full text-text-dark md:px-12 md:py-14 lg:px-20 xl:px-40 xl:py-10 xxl:px-64 xxl:py-10 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col space-y-20">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
            {/* Left */}
            <div className="flex flex-col w-full space-y-6">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
                <span className="font-medium text-green-accent">Single Platform</span>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[2.5rem] leading-[3.2rem] md:text-[3rem] font-medium md:leading-[3.5rem]">One platform for <br className="hidden lg:block" /> all your reports.</h2>
                <p className="text-lg md:text-xl text-text-disabled">Manage daily transactions, inventory, and finances — all in one dashboard.</p>
              </div>
              <ul className="flex flex-col space-y-2 font-medium text-lg">
                <li className="flex space-x-2 items-center">
                  <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                  <span>Real-time sales and expense tracking</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                  <span>Automated inventory insights</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <Image src="/check.svg" width={20} height={20} className="w-5 shrink-0" alt="" />
                  <span>Ready-to-use financial statements</span>
                </li>
              </ul>
            </div>
            {/* Right */}
            <div className="w-full h-full lg:h-auto bg-card flex justify-center items-end rounded-2xl">
              <Image src="/features-1.svg" width={320} height={240} className="w-80 pt-10 lg:w-90" style={{ height: 'auto' }} alt="Dashboard showing sales, expenses, and inventory in one view" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0">
            {/* Left */}
            <div className="w-full bg-card flex justify-center items-center rounded-2xl order-2 lg:order-1">
              <Image src="/features-2.svg" width={320} height={240} className="w-80 pt-5" style={{ height: 'auto' }} alt="Financial report delivery interface" />
            </div>
            {/* Right */}
            <div className="flex flex-col w-full space-y-6 order-1 pb-8 lg:pb-0">
              <div className="w-44 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
                <span className="font-medium text-green-accent">Effortless Delivery</span>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="text-[2.5rem] leading-[3.2rem] md:text-[3rem] font-medium md:leading-[3.5rem]">Financial Clarity Without the Hassle.</h2>
                <p className="text-xl text-text-disabled">No tools, no training — simply send us your data and receive accurate financial reports you can trust.</p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-16 h-16 md:w-14 md:h-14 xl:w-14 xl:h-14 flex items-center justify-center shrink-0">
                    <Image src="/done.png" width={36} height={36} className="w-9 h-9" alt="" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-medium">Done-For-You Reporting</h3>
                    <p>We handle the calculations, formatting, and compliance.</p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-2">
                  <div className="bg-green-accent rounded-xl p-2 w-16 h-16 md:w-14 md:h-14 xl:w-14 xl:h-14 flex items-center justify-center shrink-0">
                    <Image src="/easy.png" width={36} height={36} className="w-9 h-9" alt="" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-medium">Simple &amp; Secure Process</h3>
                    <p>One quick handoff, and your reports are delivered — clean and complete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="px-5 py-10 bg-light h-full text-text-dark border-b border-grey-shade-3 xl:border-0 md:px-12 md:py-14 lg:px-20 lg:py-10 xl:px-40 xl:py-10 xxl:px-64 xxl:py-10 xxxl:px-80 xxxl:py-10">
        <div className="flex flex-col space-y-14">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Left */}
            <div className="flex flex-col lg:w-[47%] space-y-6 pb-4 lg:pb-0">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
                <span className="font-medium text-green-accent">What We Are</span>
              </div>
              <div>
                <h2 className="text-[3rem] font-medium leading-[4rem]">Your Finance, <br className="hidden lg:block" /> Our Focus.</h2>
                <p className="text-xl text-text-disabled">Smart reporting. Clear insights. Total control.</p>
              </div>
              <p className="font-medium">At Finx, we help businesses take control of their finances with accurate, real-time reporting. From growing startups to established enterprises, our tools keep your records organized, compliant, and ready to support every decision.</p>
            </div>
            {/* Right */}
            <div className="relative lg:w-[50%] bg-card flex justify-center items-end rounded-2xl">
              <Image src="/what-we-are.svg" width={320} height={240} className="w-80 -bottom-5" style={{ height: 'auto' }} alt="Team working on financial management" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Left */}
            <div className="lg:w-[50%] order-2 pt-4 lg:pt-0">
              <div className="w-full bg-card h-full rounded-2xl flex items-center justify-center">
                <ul className="grid grid-flow-row-dense grid-cols-2 gap-3 py-4 px-4 lg:px-8 md:gap-8 lg:gap-12 md:py-6">
                  <li className="flex space-x-2 items-start xxxl:items-center">
                    <Image src="/accrual-accounting.png" width={48} height={48} className="w-8 md:w-12 shrink-0" style={{ height: 'auto' }} alt="" />
                    <span className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Accrual Accounting</span>
                  </li>
                  <li className="flex space-x-2 items-start xxxl:items-center">
                    <Image src="/cash-accounting.png" width={48} height={48} className="w-8 md:w-12 shrink-0" style={{ height: 'auto' }} alt="" />
                    <span className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Cash Accounting</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/gaap.png" width={48} height={48} className="w-8 md:w-12 shrink-0" style={{ height: 'auto' }} alt="" />
                    <span className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">GAAP</span>
                  </li>
                  <li className="flex space-x-2 items-start xxxl:items-center">
                    <Image src="/financial-statements.png" width={48} height={48} className="w-8 md:w-12 shrink-0" style={{ height: 'auto' }} alt="" />
                    <span className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Financial Statements</span>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image src="/budgeting.png" width={48} height={48} className="w-8 md:w-12 shrink-0" style={{ height: 'auto' }} alt="" />
                    <span className="pb-2 font-bold text-grey-shade-2 text-lg md:text-xl">Budgeting</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col lg:w-[50%] space-y-6 lg:order-2">
              <div className="w-36 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
                <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
                <span className="font-medium text-green-accent">Our Principles</span>
              </div>
              <div>
                <h2 className="text-[3rem] font-medium leading-[4rem]">Our Foundation built on Core Principles.</h2>
                <p className="text-xl text-text-disabled">From accrual and cash accounting to GAAP standards, budgeting, and financial statements — these are the fundamentals that power every Finx solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value / Why Finx ── */}
      <section id="value" className="px-5 py-10 bg-light h-full text-text-dark border-b border-grey-shade-3 xl:border-0 md:px-12 md:py-14 lg:px-20 lg:py-10 xl:px-40 xl:py-14 xxl:px-64 xxl:py-14 xxxl:px-80 xxxl:py-20">
        <div className="flex flex-col md:items-center space-y-8 lg:space-y-14 md:text-center">
          <div className="w-24 flex items-center justify-center space-x-2 border border-green-accent rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full" aria-hidden="true" />
            <span className="font-medium text-green-accent">Why Us?</span>
          </div>
          <div className="flex flex-col lg:space-y-4 md:items-center justify-center">
            <h2 className="flex space-x-2">
              <span className="text-[3rem] font-medium leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem]">Why</span>
              <span className="flex flex-col items-center">
                <span className="text-[3rem] font-medium leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] text-green-accent">Finx?</span>
                <Image src="/highlight-bar.svg" width={128} height={12} className="w-28 lg:w-32" style={{ height: 'auto' }} alt="" />
              </span>
            </h2>
            <p className="text-[2.6rem] leading-[3.8rem] md:text-[3rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-medium">Because Precision Matters.</p>
            <p className="text-xl lg:text-2xl text-text-disabled">Accurate, secure, and scalable financial reporting tools designed to <br className="hidden lg:block" /> streamline your operations and support confident decision-making.</p>
          </div>

          {/* Value cards — desktop (md+) */}
          <div className="flex flex-col md:space-y-16 w-full">
            <div className="hidden md:flex justify-between xxxl:px-[1.5rem]">
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <Image src="/update.png" width={56} height={56} className="w-14 ml-3" alt="" />
                </div>
                <div className="flex items-center text-left w-36">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Regularly Updating Records</p>
                </div>
              </div>
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <Image src="/accuracy.svg" width={56} height={56} className="w-14 ml-3" alt="" />
                </div>
                <div className="flex items-center text-left w-36">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Ensuring Accuracy</p>
                </div>
              </div>
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-28 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <Image src="/control.svg" width={56} height={56} className="w-14 ml-3" alt="" />
                </div>
                <div className="flex items-center text-left w-36">
                  <div className="w-16 h-32 absolute left-[6rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Implementing Controls</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-between w-full lg:px-[4rem] xxl:px-[6rem]">
              <div className="relative w-72 flex justify-center items-center">
                <div className="relative w-24 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <Image src="/audit.png" width={64} height={64} className="w-16 ml-2" alt="" />
                </div>
                <div className="flex items-center text-left w-36">
                  <div className="w-16 h-32 absolute left-[7rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Conducting Audits &amp; Reviews</p>
                </div>
              </div>
              <div className="relative w-[26rem] flex justify-center items-center">
                <div className="relative w-22 h-28 flex justify-between items-center p-2 bg-light rounded-2xl border-[.4rem] border-card">
                  <Image src="/test-passed.png" width={56} height={56} className="w-14 ml-3" alt="" />
                </div>
                <div className="flex items-center text-left w-36">
                  <div className="w-16 h-32 absolute left-[7rem] lg:left-[8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-xl font-medium leading-8">Staying Up-to-Date with Standards &amp; Regulations</p>
                </div>
              </div>
            </div>

            {/* Value cards — mobile */}
            <div className="md:hidden w-full space-y-8">
              <div className="flex">
                <div className="w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card shrink-0">
                  <Image src="/test-passed.png" width={40} height={40} className="w-10" alt="" />
                </div>
                <div className="relative flex items-center text-left">
                  <div className="w-16 h-32 absolute -left-[1.2rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                  <p className="z-10 text-grey-shade-2 text-base font-medium">Staying Up-to-Date with Standards &amp; Regulations</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-between space-y-4">
                  <div className="relative flex justify-start items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card shrink-0">
                      <Image src="/control.svg" width={40} height={40} className="w-10" alt="" />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                      <p className="z-10 text-grey-shade-2 text-base font-medium">Implementing Controls</p>
                    </div>
                  </div>
                  <div className="relative flex justify-start items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card shrink-0">
                      <Image src="/audit.png" width={40} height={40} className="w-10" alt="" />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                      <p className="z-10 text-grey-shade-2 text-base font-medium">Conducting Audits &amp; Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end w-full space-y-4">
                  <div className="relative flex justify-between items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card shrink-0">
                      <Image src="/update.png" width={40} height={40} className="w-10" alt="" />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                      <p className="z-10 text-grey-shade-2 text-base font-medium">Regularly Updating Records</p>
                    </div>
                  </div>
                  <div className="relative flex justify-between items-center">
                    <div className="relative w-[5rem] h-[6rem] flex justify-center items-center p-2 bg-light rounded-2xl border-[.4rem] border-card shrink-0">
                      <Image src="/accuracy.svg" width={40} height={40} className="w-10" alt="" />
                    </div>
                    <div className="flex items-center text-left">
                      <div className="w-16 h-32 absolute left-[3.8rem] bg-light shadow-[-32.350955963134766px_0px_26.959131240844727px_-26.959131240844727px_rgba(0,0,0,0.50)]" aria-hidden="true" />
                      <p className="z-10 text-grey-shade-2 text-base font-medium">Ensuring Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="px-5 py-10 bg-green-dark text-light md:px-12 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10">
        <div className="mb-6">
          <Image src="/logo.png" width={96} height={29} className="w-24" style={{ height: 'auto' }} alt="Finx" />
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between w-full">
          <div className="flex flex-col text-left space-y-2">
            <h3 className="font-medium text-xl">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-4">
                <span className="text-text-disabled w-10">Phone:</span>
                <div className="w-full">
                  <p>+91 949 743 6877</p>
                  <p>+966 53 609 6221</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="text-text-disabled w-10">Hours:</span>
                <p>9:00 AM - 5:00 PM</p>
              </div>
              <div className="flex space-x-4">
                <span className="text-text-disabled w-10">Email:</span>
                <p>info@finxofficial.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left space-y-2">
            <h3 className="font-medium text-xl">Locate Us</h3>
            <address className="not-italic flex flex-col">
              <span>Al Malaz Riyadh,</span>
              <span>Saudi Arabia.</span>
            </address>
          </div>
          <div className="flex items-start">
            <div className="flex space-x-4 items-center justify-center">
              <a href="https://wa.me/+919497436877" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                <Image src="/whatsapp.svg" width={40} height={40} className="w-10" alt="WhatsApp" />
              </a>
              <a href="https://www.facebook.com/share/12MTGYfVKXv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Image src="/bxl-facebook.svg" width={24} height={24} className="w-6" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/fin.x.official?igsh=MWlqM2V3a3VxM2diZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Image src="/instagram-logo.svg" width={40} height={40} className="w-10" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/finxofficial/" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn">
                <Image src="/linkedin.svg" width={48} height={48} className="w-12" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
