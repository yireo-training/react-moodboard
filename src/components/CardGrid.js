import { useState, useEffect } from "react";
import Card from "./Card";
import {fetchRemoteBranches} from "../helper/branches";

const CardGrid = () => {
  const [branches, setBranches] = useState([]);
  const [activeBranchId, setActiveBranchId] = useState();

  useEffect(() => {
    fetchRemoteBranches().then(remoteBranches => {
      console.log(remoteBranches);
      setBranches(remoteBranches.pages);
    });
  }, []);

  return (
    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-mb-6 tw-gap-6">
      {branches.map((branch) => (
        <Card
          {...branch}
          key={branch.uid}
          isActive={activeBranchId === branch.uid}
          onClickHandler={() => setActiveBranchId(branch.uid)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
