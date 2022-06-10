import ChildImage from "./ChildImages/ChildImage";

const ChildImages = ({ activeBranch }) => {
  return (
    <div className="tw-image-list tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
      {activeBranch.childImages.map((childImage) => (
        <ChildImage childImage={childImage} />
      ))}
    </div>
  );
};

export default ChildImages;
