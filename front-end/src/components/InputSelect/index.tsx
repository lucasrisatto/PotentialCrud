import React, { useRef, useEffect } from "react";
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from "react-select";
import { useField } from "@unform/core";

import { Content, Container } from "./styles";

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return "";
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <Content isErrored={!!error}>
        <ReactSelect
          className="react-select-container"
          classNamePrefix="react-select"
          defaultValue={defaultValue}
          ref={selectRef}
          {...rest}
        />
      </Content>
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Select;
