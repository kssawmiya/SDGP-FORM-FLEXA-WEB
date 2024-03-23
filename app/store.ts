import { create } from "zustand";

interface FormState {
  mobileBankingChecked: boolean;
  signImageUrl: string;
  sessionId: string;
  name: string;
  message: string;
  setSignImageUrl: (checked: string) => void;
  setMobileBankingChecked: (checked: boolean) => void;
  setSessionId: (checked: string) => void;
  setName: (checked: string) => void;
}

const useFormStore = create<FormState>((set) => ({
  mobileBankingChecked: false,
  signImageUrl: "",
  sessionId: "",
  name: "",
  message: "",
  setSessionId: (session) => set({ sessionId: session }),
  setMobileBankingChecked: (checked) => set({ mobileBankingChecked: checked }),
  setSignImageUrl: (url) => set({ signImageUrl: url }),
  setName: (name) => set({ name: name }),
  setMessage: (message) => set({ message: message }),
}));

export default useFormStore;
