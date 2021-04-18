import React from "react";

const AllFiles = ({ fileItems }) => {
  const renderedItems =
    fileItems.length > 0
      ? fileItems.map((item, index) => {
          return (
            <tr className="active">
              <td>
                <input type="checkbox" value={index} />
              </td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>
                {item.sharing.length >= 4
                  ? `${item.sharing[0]}, ${item.sharing[1]}, ${
                      item.sharing[2]
                    } +${item.sharing.length - 3} more`
                  : item.sharing.join(", ")}
              </td>
              <td>{item.date}</td>
              <td>{item.size}</td>
              <td>...</td>
            </tr>
          );
        })
      : [];

  return renderedItems.length > 0 ? (
    <>
      <h1>All Files</h1>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Type</th>
          <th>Sharing</th>
          <th>Date</th>
          <th>Size</th>
          <th></th>
        </tr>
        {renderedItems}
      </table>
    </>
  ) : (
    <>
      <h1>All Files</h1>

      <div>No files</div>
    </>
  );
};

export default AllFiles;
