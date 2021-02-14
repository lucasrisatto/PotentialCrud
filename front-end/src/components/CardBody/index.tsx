import React from "react";
import Pagination from "../../components/Pagination";

interface cardBodyProps {
  size: string;
  smallSize: string;
  loading?: boolean;
  page: number;
  count: number;
  setPage: Function;
}

const CardBody: React.FC<cardBodyProps> = ({
  size,
  smallSize,
  page,
  count,
  setPage,
  children,
}) => {
  return (
    <div className={`col-${size}`}>
      <div className="card">
        <div className="card-body p-0">
          <div className="row">
            <div className={`col-sm-${smallSize}`}>{children}</div>
          </div>
        </div>
        <div className="card-footer clearfix">
          <Pagination page={page} count={count} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default CardBody;
