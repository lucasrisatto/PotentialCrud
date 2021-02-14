import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import ButtonCustom from "../../components/ButtonCustom";
import Card from "../../components/Card";
import CardBody from "../../components/CardBody";
import Table from "../../components/Table";
import TitlePage from "../../components/TitlePage";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import { date } from "../../utils/formatDate";
import columns from "./schema";

interface DevelopersData {
  id: number;
  name: string;
  sex: string;
  age: number;
  hobby: string;
  date_birth: string;
}

const Developers: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [developer, setDeveloper] = useState<DevelopersData[]>([]);

  async function getData(url: string) {
    try {
      setLoading(true);
      const response = await api.get(url);
      console.log("response", response);
      setDeveloper(response.data.data);
      setCount(response.data.total);
      setLoading(false);
    } catch (err) {
      setDeveloper([]);
      /*addToast({
        type: "error",
        title: "Não foi possível efetuar a consulta!",
        description: "Erro!",
      });*/
      setLoading(false);
    }
  }

  function handleDelete(id: number) {
    Swal.fire({
      title: "Deseja excluir o registro?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then(async (result) => {
      if (result.value) {
        try {
          setLoading(true);
          await api.delete(`developers/${id}`);
          history.push("/");
          const response = await api.get(`developers?`);
          setDeveloper(response.data);
          setLoading(false);
          /*addToast({
            type: 'success',
            title: 'Registro excluído',
            description: 'Registro excluído com sucesso',
          });*/
        } catch (error) {
          /*addToast({
            type: 'error',
            title: 'Excluir registro',
            description: 'Ocorreu um erro ao excluir o registro',
          });*/
          setLoading(false);
        }
      }
    });
  }

  const handleSearch = useCallback(() => {
    getData(`developers?page=${page}&search=${search}`);
  }, [page, search]);

  useEffect(() => {
    getData(`developers?page=${page}&limit=20&order=id`);
  }, [page]);

  return (
    <>
      <TitlePage title="Desenvolvedores" icon="fa-list" action="listagem" />
      <section>
        <div className="container-fluid">
          <Card>
            <div className="form-group col-sm-8 col-xs-12">
              <Link to="/developers/new">
                <ButtonCustom
                  type="button"
                  color="primary"
                  icon="fa-plus-square"
                >
                  Incluir
                </ButtonCustom>
              </Link>
            </div>
            <div className="form-group col-sm-4 col-xs-12">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="input-group-append">
                  <ButtonCustom
                    type="button"
                    color="primary"
                    onClick={handleSearch}
                    icon="fa-search"
                  />
                </span>
              </div>
            </div>
          </Card>
          <div className="row">
            <CardBody
              size="12"
              smallSize="12"
              page={page}
              count={count}
              setPage={setPage}
              loading={loading}
            >
              <Table id="developers" columns={columns}>
                {developer &&
                  developer.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.sex}</td>
                      <td>{data.age}</td>
                      <td>{data.hobby}</td>
                      <td>{date(data.date_birth)}</td>
                      <td className="text-right">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-flat"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="fa fa-tasks" />
                          </button>

                          <div className="dropdown-menu dropdown-menu-right">
                            <Link to={`/developers/${data.id}/edit`}>
                              <button className="dropdown-item">
                                <i className="fa fa-edit mr-2" />
                                Editar
                              </button>
                            </Link>

                            <button
                              className="dropdown-item"
                              onClick={() => handleDelete(data.id)}
                            >
                              <i className="fa fa-ban mr-2" /> Excluir
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </Table>
            </CardBody>
          </div>
        </div>
      </section>
    </>
  );
};

export default Developers;
