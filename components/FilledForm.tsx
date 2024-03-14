// @ts-nocheck
import DisplayForm from "./DisplayForm";
import FooterButton from "./FooterButton";

const FilledForm = () => {
  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <DisplayForm />
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services/thankYou" text="Print" isBack={""} />
      </div>
    </div>
  );
};

export default FilledForm;
