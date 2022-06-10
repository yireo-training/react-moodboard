import Card from "./Card";
import Loader from "./Loader";

const CardGrid = props => {
  const activeBranch = props.activeBranch;
  const setActiveBranch = props.setActiveBranch;
  const branches = props.branches;

  if (!branches) {
    return <Loader/>
  }

  return (
    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-mb-6 tw-gap-6">
      {branches.map((branch) => (
        <Card
          {...branch}
          key={branch.uid}
          isActive={activeBranch && activeBranch.uid === branch.uid}
          onClickHandler={() => setActiveBranch(branch)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
