import React, { useCallback, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';

import Input from "../../components/Input";
import { AnimationContainer, Container, Content } from "./styles";
import api from "../../services/api";
import getValidationErrors from '../../utils/validation'

interface DevelopersData {
  id: number;
  name: string;
  sex: string;
  age: number;
  hobby: string
  date_birth: string;
}

const Developers: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: DevelopersData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório!'),
          age: Yup.string().required('Idade obrigatória!'),
          date_birth: Yup.date().required('Data de nascimento obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/developers', data);

        history.push('/list');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    }, [history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça Seu Cadastro</h1>

            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />

            <label htmlFor="sex">Sexo</label>
            <Input type="text" name="sex" />

            <label htmlFor="age">Idade</label>
            <Input type="number" name="age" />

            <label htmlFor="hobby">Hobby</label>
            <Input type="text" name="hobby" />

            <label htmlFor="date_birth">Data de Nascimento</label>
            <Input type="date" name="date_birth" />

            <button>Cadastrar</button>
          </Form>

          <Link to="/list">
          Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Developers;
