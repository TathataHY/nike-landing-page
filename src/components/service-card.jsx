const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 shadow-3xl px-10 py-16 rounded-[20px] w-full sm:w-[350px] sm:min-w-[350px]">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-bold font-palanquin text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray break-words leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
