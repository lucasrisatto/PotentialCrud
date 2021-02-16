import React from "react";
import { render } from "@testing-library/react";
import DevelopersForm from "../../pages/Developers/form";

jest.mock('react-router-dom', () => {
  return {
    useParam: jest.fn(),
  }
})

describe("Pagina de Cadastro de desenvolvedor", () => {
  it("pode cadastrar um desenvolvedor", () => {
    const { debug } = render(<DevelopersForm />);

    debug();
  });
});
