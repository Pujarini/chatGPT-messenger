import { SunIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ExampleTag = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center mb-5">
          <SunIcon className="h-8 w-8" />
          Example
        </div>
        <div className="flex flex-col space-y-5">
          <button className="exampleText">
            Explain quantum computing in simple terms
          </button>
          <button className="exampleText">
            Got any creative ideas for a 10 year old’s birthday?
          </button>
          <button className="exampleText">
            How do I make an HTTP request in Javascript?
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mb-5">
          <BoltIcon className="h-8 w-8" />
          Capabilities
        </div>
        <div className="flex flex-col space-y-5">
          <button className="exampleText">
            Remembers what user said earlier in the conversation
          </button>
          <button className="exampleText">
            Allows user to provide follow-up corrections
          </button>
          <button className="exampleText">
            Trained to decline inappropriate requests
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />
          Limitations
        </div>
        <div className="flex flex-col space-y-5">
          <button className="exampleText">
            May occasionally generate incorrect information
          </button>
          <button className="exampleText">
            May occasionally produce harmful instructions or biased content
          </button>
          <button className="exampleText">
            Limited knowledge of world and events after 2021
          </button>
        </div>
      </div>
    </>
  );
};

export default ExampleTag;
