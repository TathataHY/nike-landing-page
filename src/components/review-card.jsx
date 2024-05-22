import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
