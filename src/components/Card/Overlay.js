const Overlay = (props) => {
  const name = props.name;

  return (
    <div className="tw-card-overlay">
      <div className="tw-absolute tw-inset-0 tw-bg-orange-400 tw-opacity-80 tw-z-20"></div>
      <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-z-20">
        <strong className="tw-text-white lg:tw-text-lg tw-leading-none"></strong>
        <h3 className="tw-text-white tw-text-xl xl:tw-text-3xl tw-font-bold tw-leading-tight tw-tracking-wide tw-break-all">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Overlay;
