const ChildImage = (props) => {
  const imageSrc = props.childImage.src;

  return (
    <div className="tw-w-full tw-relative tw-overflow-hidden tw-rounded tw-transition-opacity">
      <button className="tw-heart-icon tw-group tw-absolute tw-top-4 lg:tw-top-8 tw-right-0 tw-z-20 tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-8 lg:tw-w-16 lg:tw-h-10 tw-bg-white tw-text-primary tw-rounded-l">
        <svg
          className="tw-w-5 tw-h-5 lg:tw-w-7 lg:tw-h-7 tw-transform tw-transition-transform group-hover:tw-scale-90 tw-fill-current"
          viewBox="0 0 28 27"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m2.059 11.689 11.576 13.833c.2.238.526.235.723 0l11.575-13.833-.462.591a6.98 6.98 0 0 0 1.392-3.008c.09-.452.137-.92.137-1.399 0-3.793-2.937-6.868-6.561-6.868-2.99 0-5.511 2.093-6.303 4.955l-.272-.005C13.072 3.092 10.55 1 7.56 1 3.937 1 1 4.075 1 7.868c0 .479.047.946.136 1.398a6.977 6.977 0 0 0 1.393 3.009"
          ></path>
        </svg>
      </button>
      <div className="tw-card-image tw-aspect-w-1 tw-aspect-h-1">
        <img
          src={imageSrc}
          className="tw-w-full tw-h-full tw-object-cover"
          loading=""
          alt="whatever"
        />
      </div>
    </div>
  );
};

export default ChildImage;
