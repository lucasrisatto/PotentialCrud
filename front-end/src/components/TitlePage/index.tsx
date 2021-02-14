import React from "react";

interface TitlePageProps {
  title: string;
  description?: string;
  action?: string;
  icon?: string;
}
const TitlePage: React.FC<TitlePageProps> = ({
  title,
  description,
  action,
  icon,
}) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">
              {icon && <i className={`nav-icon fas ${icon}`} />} {title}{" "}
              <small className="text-md font-weight-light">{description}</small>
            </h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {action && (
                <>
                  <li className="breadcrumb-item">{title}</li>
                  <li className="breadcrumb-item active">{action}</li>
                </>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
