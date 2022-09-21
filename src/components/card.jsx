const Card = ({
  isRead,
  imageSrc,
  name,
  content,
  time,
  message,
  additionalImageSrc,
}) => {
  return (
    <div
      className={
        "flex rounded-lg my-2 p-3 justify-between " +
        (isRead ? "" : "bg-blue-light")
      }
    >
      <div className={"flex space-x-4 "}>
        <img className=" h-10 w-10" src={imageSrc} alt="" />
        <div>
          <span className="font-extrabold hover:text-blue hover:cursor-pointer text-very-dark-blue">
            {name}
          </span>{" "}
          {content}
          {isRead || (
            <span className="h-2 w-2 bg-red rounded-full  mx-2 inline-block"></span>
          )}
          <div>
            <p className="text-grayish-blue">{time} ago</p>
          </div>
          {message && (
            <div className="border border-grey-blue-light hover:cursor-pointer rounded pl-3 pr-3 py-3 hover:bg-grey-blue-light">
              {message}
            </div>
          )}
        </div>
      </div>
      {additionalImageSrc && (
        <img
          className=" h-10 w-10 hover:cursor-pointer"
          src={additionalImageSrc}
          alt=""
        />
      )}
    </div>
  );
};

export default Card;
