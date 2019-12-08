import { Component } from "react";
import $ from "jquery";
class Handelers extends Component {
  handelAddElement = e => {
    if (e.currentTarget.value === "item1") this.AddRange();
    if (e.currentTarget.value === "item2") this.AddRadio();
    if (e.currentTarget.value === "item3") this.AddCheckBox();
    if (e.currentTarget.value === "item4") this.AddTextBox();
    if (e.currentTarget.value === "item5") this.AddSelectButton();
    e.currentTarget.value = "";
  };

  handelAddSection = e => {
    if (e.currentTarget.value === "section") this.AddSection();
    if (e.currentTarget.value === "question") this.AddQuestion();
    e.currentTarget.value = "";
  };

  handelcurrentIndexOfSection = (e, indexOfSection) => {
    // $(".redBorder").css("border", "1px solid black");
    // e.target.style.border = "1px solid red";
    if (indexOfSection !== this.state.currentIndexOfSection) {
      this.setState({
        currentIndexOfSection: indexOfSection,
        currentIndexOfQuestion: 0
      });
    }
    this.setState({ currentIndexOfSection: indexOfSection });
  };

  handelcurrentIndexOfQuestion = (e, currentIndexOfQuestion) => {
    console.log(currentIndexOfQuestion);
    // $(".redBorderQs").css("border", "1px solid black");
    // e.target.style.border = "1px solid red";
    this.setState({ currentIndexOfQuestion });
  };

  // handelInputChange = (e, indexOfSection, indexOfQuestion) => {
  //   console.log(e.currentTarget.value, indexOfSection, indexOfQuestion);
  // };

  handelSelect = e => {
    this.setState({ selectEidtInput: e.currentTarget.value });
  };

  handelSelectInputOnChange = e => {
    let val = e.currentTarget.value;
    let selectEidtInput = val;
    this.setState({ selectEidtInput });
  };

  pushSelectItem = (e, indexOfSection, indexOfQuestion, indexOfField) => {
    if (e.key === "Enter") {
      let { section, selectEidtInput } = this.state;
      section[indexOfSection].questions[indexOfQuestion].fields[
        indexOfField
      ].values.push({ value: selectEidtInput });
      this.setState({ section, selectEidtInput: "" });
    }
  };

  AddMappingQuestion = () => {
    this.AddQuestion();
  };

  //Question input and weight handel

  handelQuestionInput = (
    { currentTarget },
    indexOfSection,
    indexOfQuestion
  ) => {
    const { section } = this.state;
    const { name, value } = currentTarget;
    section[indexOfSection].questions[indexOfQuestion][name] = value;
    this.setState({ section });
  };

  handelFeildInput = (
    { currentTarget },
    indexOfSection,
    indexOfQuestion,
    indexOfField
  ) => {
    const { section } = this.state;
    const { name, value } = currentTarget;
    section[indexOfSection].questions[indexOfQuestion].fields[indexOfField][
      name
    ] = value;
    this.setState({ section });
  };
}

export default Handelers;
