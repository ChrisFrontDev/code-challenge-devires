import React, { InputHTMLAttributes, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import { InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  name,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <InputWrapper isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}

        <input
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputWrapper>
    </>
  );
};

export default Input;
