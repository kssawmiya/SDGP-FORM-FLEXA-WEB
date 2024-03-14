import { create } from "zustand";

interface FormState {
  mobileBankingChecked: boolean;
  signImageUrl: string;
  setSignImageUrl: (checked: string) => void;
  setMobileBankingChecked: (checked: boolean) => void;
}

const useFormStore = create<FormState>((set) => ({
  mobileBankingChecked: false,
  signImageUrl: "",
  setMobileBankingChecked: (checked) => set({ mobileBankingChecked: checked }),
  setSignImageUrl: (url) => set({ signImageUrl: url }),
}));

export default useFormStore;
