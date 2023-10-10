exports.generateTable = (data) => {
  const headers = Object.keys(data[0]);
  const table = `
    <table>
      <thead>
        <tr>
          ${headers.map((header) => `<th>${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${data
          .map((row) => {
            return `
              <tr>
                ${headers.map((header) => `<td>${row[header]}</td>`).join('')}
              </tr>
            `;
          })
          .join('')}
      </tbody>
    </table>
  `;
  return table;
};
