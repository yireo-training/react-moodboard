import Button from "../Button";

const Step2 = ({activeBranch}) => {
  console.log(activeBranch);

  return (
    <div className="tw-sidebar md:tw-shadow-lg lg:tw-shadow-none tw-w-full md:tw-w-80 lg:tw-w-auto tw-overflow-y-auto lg:tw-overflow-y-visible tw-fixed lg:tw-static tw-transform tw-transition-transform lg:tw-translate-x-0 tw-top-8 tw-bottom-0 tw-right-0 tw-z-20 tw-py-20 tw-px-6 tw-bg-white lg:tw-p-0 2xl:tw-pl-24 tw-translate-x-full">
      <div className="tw-steps tw-mb-8">
        <p className="tw-text-xl tw-mb-4">
          Step <strong>2/3</strong>
        </p>
        <h2 className="tw-font-bold tw-font-heading tw-uppercase tw-leading-none tw-text-primary tw-text-2xl lg:tw-text-5xl tw-mb-6">
          Step 2
        </h2>
        <h3 className="tw-font-bold tw-text-2xl tw-mb-3">Choosen branch: {activeBranch.title}</h3>
        <p className="tw-leading-7">Laat je inspireren en selecteer minimaal 5 sfeerbeelden die jouw droominterieur visualiseren. In de volgende stap kun je producten en diensten toevoegen om je moodboard compleet te maken.</p>
      </div>
      <div className="lg:tw-flex tw-justify-end tw-mb-20">
        <Button label="Next" />
      </div>
    </div>
  );
};
export default Step2;
