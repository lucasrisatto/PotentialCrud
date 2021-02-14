import React from "react";

interface columnsProps {
  text: string;
  width: string;
}

interface tableProps {
  id: string;
  columns: columnsProps[];
}

const Table: React.FC<tableProps> = ({ id, columns, children }) => {
  return (
    <table
      id={id}
      className="table table-striped table-hover table-condensed table-sm"
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th className={column.width}>{column.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
