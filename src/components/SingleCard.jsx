import { ResultItem } from "./ResultItem";

export function SingleCard() {
  return (
    <>
      <main className="flex flex-col md:flex-row w-full md:max-w-2xl md:mx-auto md:my-32 md:bg-white md:rounded-4xl">
        <div className="w-full rounded-b-4xl bg-indigo-600 pb-12 md:w-1/2 md:rounded-4xl">
          <p className="font-Han font-medium text-center text-xl text-gray-300 p-6">
            Your Result
          </p>
          {/* circle start */}
          <div className="w-42 h-42  rounded-full mx-auto bg-gradient-to-t from-indigo-600/40 to-indigo-900/60">
            <p className="text-center text-6xl text-white font-Han font-extrabold p-12">
              76
              <p className="font-Han font-medium text-xl text-gray-400">
                of 100
              </p>
            </p>
          </div>
          {/* circle end */}
          <h1 className="font-Han font-semibold text-white text-center text-3xl my-4">
            Great
          </h1>
          <p className="font-Han font-medium text-gray-300 text-center max-w-3/4 mx-auto text-lg">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="font-Han font-bold text-2xl m-6 text-gray-700">
            Summary
          </h2>
          <ResultItem />
          <button className="min-w-4/5 bg-gray-600 mx-auto rounded-full h-16 font-Han font-extrabold text-2xl text-gray-200 hover:bg-indigo-600 active:bg-indigo-600">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
