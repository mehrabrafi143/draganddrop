import React from "react";

const ToolBox = ({ handelAddElement, handelAddSection }) => {
  return (
    <React.Fragment>
      <select onClick={handelAddElement} placeholder="select">
        <option value="">select one</option>
        <option value="item1">Range</option>
        <option value="item2">Radio Button</option>
        <option value="item3">Checkbox</option>
        <option value="item4">Textbox</option>
        <option value="item5">Select Box</option>
      </select>
      <select onClick={handelAddSection} placeholder="select">
        <option value="">select one</option>
        <option value="section">Section</option>
        <option value="question">Question</option>
      </select>
    </React.Fragment>
  );
};

export default ToolBox;
