const Button = (props) => {
  const label = props.label;
  const clickHandler = props.clickHandler ?? function () {};

  return (
    <button
      onClick={clickHandler}
      className="tw-button tw-overflow-hidden tw-relative tw-group tw-font-bold tw-inline-flex tw-justify-center tw-items-center tw-px-3 tw-transition-colors tw-border tw-rounded-full tw-pl-6 tw-pr-3 tw-py-2 tw-border tw-border-white tw-text-white hover:tw-bg-white hover:tw-text-black tw-transition-opacity tw-opacity-0 lg:group-hover:tw-opacity-100 tw-hidden lg:tw-inline-flex"
    >
      {label}
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
  );
};

export default Button;
