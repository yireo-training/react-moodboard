import { useState } from "react";
import Card from "./Card";
import branches from "./data/branches";

const CardGrid = () => {
  const [activeBranchId, setActiveBranchId] = useState();
  //const dataUrl ="https://typo3.inspirium.nl/typo3/api/1/pages?parentId=";

  return (
    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-mb-6 tw-gap-6">
      {branches.map((branch) => (
        <Card
          {...branch}
          key={branch.id}
          isActive={activeBranchId === branch.id}
          onClickHandler={() => setActiveBranchId(branch.id)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
