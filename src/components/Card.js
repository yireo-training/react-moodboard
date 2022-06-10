import Button from "./Button";
import Overlay from "./Card/Overlay";

const Card = (props) => {
    const showOverlay = props.isActive;
    const name = props.title;
    const imageUrl = props.image.src;

    return (
    <div onClick={props.onClickHandler} className="tw-card tw-w-full tw-relative tw-overflow-hidden tw-rounded tw-transition-opacity">
      <div className="tw-group">
        {showOverlay && <Overlay name={name}/>}

        {!showOverlay && (
          <div>
            <div className="tw-absolute tw-bottom-0 tw-inset-x-0 tw-flex tw-flex-col tw-items-center tw-z-20">
              <div className="tw-text-center tw-transform tw-transition-transform lg:tw-translate-y-8 lg:group-hover:tw--translate-y-6">
                <h3 className="tw-text-white tw-font-bold tw-text-lg lg:tw-text-2xl tw-mb-2 tw-break-all">
                  {name}
                </h3>
                <Button label={"Selecteer " + name}/>
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
