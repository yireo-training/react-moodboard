import { useState, useEffect } from "react";
import CardGrid from "./CardGrid";
import Sidebar from "./Sidebar";
import {fetchRemoteBranches} from "../helper/branches";
import ChildImages from "./ChildImages";

const App = () => {
  const [branches, setBranches] = useState([]);
  const [activeBranch, setActiveBranch] = useState();

  useEffect(() => {
    fetchRemoteBranches().then(remoteBranches => {
      setBranches(remoteBranches.pages);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex">
      <aside className="flex flex-col w-64">
        <Sidebar activeBranch={activeBranch} />
      </aside>
      <main className="w-full h-full">
      {!activeBranch && <CardGrid branches={branches} activeBranch={activeBranch} setActiveBranch={setActiveBranch} />}
        {activeBranch && <ChildImages activeBranch={activeBranch} />}
      </main>
    </div>
  );
};

export default App;
