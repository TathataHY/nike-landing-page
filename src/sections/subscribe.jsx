import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-lg:flex-col justify-between items-center gap-10 max-container"
    >
      <h3 className="lg:max-w-md font-bold font-palanquin text-4xl leading-[68px]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex max-sm:flex-col items-center gap-5 sm:border-slate-gray p-2.5 sm:border rounded-full w-full lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
