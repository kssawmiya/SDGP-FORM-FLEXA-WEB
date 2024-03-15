import { create } from "zustand";

interface FormState {
  mobileBankingChecked: boolean;
  signImageUrl: string;
  sessionId: string;
  setSignImageUrl: (checked: string) => void;
  setMobileBankingChecked: (checked: boolean) => void;
  setSessionId: (checked: string) => void;
}

const useFormStore = create<FormState>((set) => ({
  mobileBankingChecked: false,
  signImageUrl: "",
  sessionId: "",
  setSessionId: (session) => set({ sessionId: session }),
  setMobileBankingChecked: (checked) => set({ mobileBankingChecked: checked }),
  setSignImageUrl: (url) => set({ signImageUrl: url }),
}));

export default useFormStore;
