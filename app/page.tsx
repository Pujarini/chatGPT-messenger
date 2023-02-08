import ExampleTag from "../components/ExampleTag";

const HomePage = () => {
  return (
    <div className="flex flex-col text-white h-screen items-center justify-center px-2">
      <h1 className="text-3xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2">
        <ExampleTag />
      </div>
    </div>
  );
};

export default HomePage;
