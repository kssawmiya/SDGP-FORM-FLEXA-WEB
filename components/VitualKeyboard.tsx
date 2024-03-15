import React, { useState, useRef, useEffect } from "react";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface VirtualKeyboardProps {
  onChange: (input: string) => void;
  initialInput?: string;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onChange,
  initialInput = "",
}) => {
  const [input, setInput] = useState(initialInput);
  const [layoutName, setLayoutName] = useState("default");
  const keyboardRef = useRef<KeyboardReactInterface | null>(null);

  useEffect(() => {
    onChange(input);
  }, [input, onChange]);

  const handleShift = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default");
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (input: string) => {
    setInput(input);
    if (keyboardRef.current) {
      keyboardRef.current.setInput(input);
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChangeInput}
      onKeyPress={onKeyPress}
    />
  );
};

export default VirtualKeyboard;
