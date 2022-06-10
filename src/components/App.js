import CardGrid from "./CardGrid";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col w-64">
        <Sidebar />
      </aside>
      <main className="w-full h-full">
        <CardGrid />
      </main>
    </div>
  );
};

export default App;
