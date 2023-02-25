function App() {
  return (
    <div className="text-lg text-center font-bold m-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-sky-500 p-5 rounded-md">First col</div>
        <div className="bg-sky-500 p-5 rounded-md">Second col</div>
        <div className="bg-sky-500 col-span-2 p-5 rounded-md">Third col</div>
        <div className="bg-sky-500 p-5 rounded-md">Fourth col</div>
        <div className="bg-sky-500 p-5 col-span-2 rounded-md">Fifth col</div>
        <div className="bg-sky-500 p-5 rounded-md">Sixth col</div>
      </div>
    </div>
  );
}

export default App;
