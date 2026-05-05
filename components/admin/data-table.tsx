type DataTableProps = {
  columns: string[];
  rows: Array<Array<React.ReactNode>>;
};

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead className="bg-[#eef3e9]">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-black" key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr className="border-t border-[var(--border)]" key={index}>
              {row.map((cell, cellIndex) => (
                <td className="px-4 py-3" key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
