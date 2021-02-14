import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Input from "../../../components/Input";
import { AnimationContainer, Container, Content } from "./styles";
import api from "../../../services/api";
import getValidationErrors from "../../../utils/validation";
import Button from "../../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import normalizeDate from "../../../utils/normalizeDate";
import Select from "../../../components/InputSelect";
import Swal from "sweetalert2";

interface DevelopersData {
  id?: number;
  name?: string;
  sex?: string;
  age?: number;
  hobby?: string;
  date_birth?: string;
}

const DevelopersForm: React.FC = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [data, setData] = useState<DevelopersData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await api.get(`developers?page=1&id=${id}&order=id`);
        setData(response.data.data[0]);
        console.log(response);
        setData({
          ...response.data.data[0],
          date_birth: normalizeDate(response.data.data[0].date_birth),
        });
        formRef.current?.setFieldValue("sex", {
          value: response.data.data[0].sex,
          label: "",
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    if (id) {
      getData();
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: DevelopersData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório!"),
          age: Yup.string().required("Idade obrigatória!"),
          date_birth: Yup.string().required("Data de nascimento obrigatória!"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (id) {
          await api.put(`/developers/${id}`, data);
        } else {
          await api.post("/developers", data);
        }

        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history]
  );

  function handleCancel() {
    Swal.fire({
      title: "Deseja voltar para a Listagem?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.value) {
        history.push("/");
      }
    });
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form initialData={data} ref={formRef} onSubmit={handleSubmit}>
            <h5>Cadastro de Desenvolvedor</h5>
            <br />
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />

            <label htmlFor="sex">Sexo</label>
            <Select
              name="sex"
              placeholder=" "
              isClearable={true}
              options={[
                { value: "M", label: "Masculino" },
                { value: "F", label: "Feminino" },
              ]}
              getOptionLabel={(option) => {
                switch (option.value) {
                  case "M":
                    return "Masculino";
                  case "F":
                    return "Feminino";
                  default:
                    return "";
                }
              }}
            />

            <label htmlFor="age">Idade</label>
            <Input type="number" name="age" />

            <label htmlFor="hobby">Hobby</label>
            <Input type="text" name="hobby" />

            <label htmlFor="date_birth">Data de Nascimento</label>
            <Input type="date" name="date_birth" />

            <Button type="submit">Salvar</Button>
          </Form>

          <a onClick={handleCancel}>
            <FiArrowLeft />
            Voltar para Listagem
          </a>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default DevelopersForm;
