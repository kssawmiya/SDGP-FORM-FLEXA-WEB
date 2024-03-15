// @ts-nocheck
import FormButton from "@/components/FormButton";
import InfoPoint from "./InfoPoint";
import FooterButton from "./FooterButton";

const SavingPage = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col p-20 ">
      <div className="flex items-center justify-center w-full">
        <p className="text-4xl text-fuchsia-900 font-bold">
          Requirements and Benefits of Saving Account
        </p>
      </div>
      <div className="flex justify-end mt-5">
        <FormButton />
      </div>

      <div>
        <p className="text-fuchsia-900 text-4xl font-bold mb-5">Requirements</p>
        <div>
          <InfoPoint text="You have to be above 18+" />
          <InfoPoint text="You have to possess with NIC/Passport to prove your identification" />
        </div>
      </div>

      <div className="mt-[50px]">
        <p className="text-fuchsia-900 text-4xl font-bold mb-5">Benefits</p>
        <div>
          <InfoPoint text="You are eligible to enroll for Mobile Banking" />
          <InfoPoint text="You are eligible to enroll for Internet Banking" />
          <InfoPoint text="You are eligible to enroll Debit/Shopping Card" />
        </div>
      </div>

      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services" text="Go Back" isBack={true} />
        <FooterButton
          link="/services/option"
          text="Start Filling"
          isBack={false}
        />
      </div>
    </div>
  );
};
//
export default SavingPage;
