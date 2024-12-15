import BagasseHero2 from "./BagasseHero2";
import BagasseNav from "./BagasseNav";


const BagasseHero = () => {
  return (
    <div className="bg-white hero-img rounded-b-2xl" >
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl h-[100vh] flex justify-center items-center flex-col h-100">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Nature's bounty is full of healing power
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            The Earth thrives when we embrace the simplicity of natural products, honoring the wisdom of the planet's own creations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#bento"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
};

export default BagasseHero;
