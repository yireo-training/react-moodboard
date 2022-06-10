const Card = (props) => {
    const showOverlay = props.isActive;
    const name = props.title;
    const imageUrl = props.image.src;

    return (
    <div onClick={props.onClickHandler} className="tw-card tw-w-full tw-relative tw-overflow-hidden tw-rounded tw-transition-opacity">
      <div className="tw-group">
        {showOverlay && (
          <div className="tw-card-overlay">
            <div className="tw-absolute tw-inset-0 tw-bg-orange-400 tw-opacity-80 tw-z-20"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-z-20">
              <strong className="tw-text-white lg:tw-text-lg tw-leading-none"></strong>
              <h3 className="tw-text-white tw-text-xl xl:tw-text-3xl tw-font-bold tw-leading-tight tw-tracking-wide tw-break-all">
              {name}
              </h3>
            </div>
          </div>
        )}

        {!showOverlay && (
          <div>
            <div className="tw-absolute tw-bottom-0 tw-inset-x-0 tw-flex tw-flex-col tw-items-center tw-z-20">
              <div className="tw-text-center tw-transform tw-transition-transform lg:tw-translate-y-8 lg:group-hover:tw--translate-y-6">
                <h3 className="tw-text-white tw-font-bold tw-text-lg lg:tw-text-2xl tw-mb-2 tw-break-all">
                  {name}
                </h3>
                <button className="tw-button tw-overflow-hidden tw-relative tw-group tw-font-bold tw-inline-flex tw-justify-center tw-items-center tw-px-3 tw-transition-colors tw-border tw-rounded-full tw-pl-6 tw-pr-3 tw-py-2 tw-border tw-border-white tw-text-white hover:tw-bg-white hover:tw-text-black tw-transition-opacity tw-opacity-0 lg:group-hover:tw-opacity-100 tw-hidden lg:tw-inline-flex">
                  Selecteer {name}{" "}
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="tw-w-4 tw-h-4 tw-mx-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="tw-absolute tw-left-1/2 tw-transform tw--translate-x-1/2 tw-w-0 tw-h-0 tw-transition-all tw-bg-white tw-rounded-full group-hover:tw-w-full group-hover:tw-h-32 tw-opacity-10 tw-pointer-events-none"></span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="tw-card-image tw-aspect-w-1 tw-aspect-h-1">
          <img
            src={imageUrl}
            className="tw-w-full tw-h-full tw-object-cover"
            alt="whatever"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
