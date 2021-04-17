import React from "react";

const AllFiles = ({ fileItems }) => {
  console.log(fileItems[0].name);

  const renderedItems = fileItems.map((item, index) => {
    return (
      <tr className="active">
        <td>
          <input type="checkbox" value={index} />
        </td>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.sharing}</td>
        <td>{item.date}</td>
        <td>{item.size}</td>
        <td>...</td>
      </tr>
    );
  });

  console.log(renderedItems);

  return (
    <div className="files">
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

      {/* <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" ng-model="x.dedbuffer" />
          </td>

          <td>Griffin</td>
        </tr>
      </table> */}
    </div>
  );
};

export default AllFiles;
