import React, { useState } from "react";

//declar
//each td will have a ternary operator className={checked.includes(index)}
//when a box is checked, we pass the index to an onCheck function
//the onCheck function will first see if checked includes the index
//if it does not, push it
//if it does, filter it

//whenever

const AllFiles = ({ fileItems }) => {
  const [checked, setChecked] = useState([]);

  const onCheck = (isChecked, index) => {
    // console.log(checked, isChecked);
    if (isChecked) {
      let checkedItems = [...checked, index];
      setChecked(checkedItems);
    } else {
      console.log("filtering");
      let checkedItems = checked.filter((item) => item !== index);
      console.log(checkedItems);
      setChecked(checkedItems);
    }
  };

  const renderedItems =
    fileItems.length > 0
      ? fileItems.map((item, index) => {
          return (
            <tr className={checked.includes(index) ? "activated" : ""}>
              <td>
                <input
                  type="checkbox"
                  value={index}
                  onClick={(e) => onCheck(e.target.checked, index)}
                />
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
