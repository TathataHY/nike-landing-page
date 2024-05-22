import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-2xl text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
