import Link from "next/link";
import { BookmarkAltIcon, CodeIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <section className="pt-40 pb-24 bg-gradient-to-b to-white from-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center lg:max-w-5xl mx-auto">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              Illustration Website is all about what you think, we can design!
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Illustration website gives you the best development services with all the
              features you need for your project dynamic, static & client side rendering,
              and more. If you are new to Tech Space we are here to build your Digital Presence.
            </p>
            <div className="max-w-md mx-auto grid sm:grid-cols-2 gap-4">
              <Link href="">
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started
                </button>
              </Link>
              <Link href="">
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-24 lg:mt-32 max-w-xl lg:max-w-full mx-auto">
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">500+ Examples</h2>
                <p className="text-slate-500">
                  Beautifully designed, expertly crafted components that follow
                  all accessibility best practices and are easy to customize.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">React, Vue, and HTML</h2>
                <p className="text-slate-500">
                  Accessible, interactive examples for React and Vue powered by
                  Headless UI, plus vanilla HTML if you’d rather write any
                  necessary JS yourself.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md bg-white shadow-md border border-slate-200">
                <BookmarkAltIcon className="h-6 w-6 text-slate-900" />
              </div>
              <div className="text-sm space-y-2">
                <h2 className="font-semibold">Fully Responsive</h2>
                <p className="text-slate-500">
                  Every example is fully responsive and carefully designed and
                  implemented to look great at any screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Leverage World-Class Talent
            </h2>
            <p className="text-lg text-slate-500">
              We are the globally-distributed network of top business, design,
              and technology talent, ready to tackle your most important
              initiatives.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-16 max-w-xl lg:max-w-full mx-auto">
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 1
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 2
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-3xl p-4 sm:p-6 hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col space-y-4">
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white flex-shrink-0 p-2">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Service 3
                </h3>
                <p className="text-slate-500">
                  Seasoned software engineers, coders, and architects with
                  expertise across hundreds of technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 place-items-center max-w-xl lg:max-w-full mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From planning to execution, and beyond
              </h2>
              <p className="text-lg text-slate-500">
                When you have a concept, the next step is to locate the right
                technology partner to help you bring it to life. Our team of
                developers, software architects, project managers, and other
                experts are all equipped with advanced and up-to-date skill sets
                to meet the unique requirements of your project. We are a
                full-service software development business that understands the
                importance of long-term partnerships and is capable of combining
                concentrated detail-oriented activity with long-term strategic
                thinking.
              </p>
            </div>
            <div className="flex items-center justify-center relative">
              <img src="https://mghsolutions.ca/img/home/slider-2.png" className="object-scale-down" width={600} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-gradient-to-b to-white from-indigo-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-indigo-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="relative">
          <img
            className="mx-auto h-8"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
            alt="Workcation"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
