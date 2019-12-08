import React, { Component } from "react";
import $ from "jquery";
import bootbox from "bootbox";
class DropDown extends Component {
  state = {
    section: [
      {
        questions: [
          {
            enInput: "",
            bnInput: "",
            weight: "",
            currentType: "",
            fields: []
          }
        ]
      }
    ],
    currentIndexOfSection: 0,
    currentIndexOfQuestion: 0,
    selectEidtInput: "",
    optionValueIndex: 0
  };

  //section and question

  AddSection = () => {
    const questions = [];
    const { section } = this.state;
    section.push({ questions });
    this.setState({ section });
  };

  AddQuestion = () => {
    const { section, currentIndexOfSection } = this.state;
    section[currentIndexOfSection].questions.push({
      enInput: "",
      bnInput: "",
      weight: "",
      currentType: "",
      fields: []
    });
    this.setState({ section });
  };

  //tools

  AddRange = () => {
    const {
      section,
      currentIndexOfSection,
      currentIndexOfQuestion
    } = this.state;
    const item = {
      type: "number",
      from: 0,
      to: 0,
      fromName: "from",
      toName: "to"
    };
    if (
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType &&
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType !== item.type
    ) {
      bootbox.confirm("Are you sure to change answer type?", res => {
        if (res) {
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.length = 0;
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.push(item);
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].currentType = item.type;
          this.setState({ section });
        }
      });
    } else {
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.length = 0;
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.push(item);
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].currentType = item.type;
      this.setState({ section });
    }
  };

  AddRadio = () => {
    const {
      section,
      currentIndexOfSection,
      currentIndexOfQuestion
    } = this.state;
    const item = { type: "radio", value: "" };
    if (
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType &&
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType !== item.type
    ) {
      bootbox.confirm("Are you sure to change answer type?", res => {
        if (res) {
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.length = 0;
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.push(item);
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].currentType = item.type;
          this.setState({ section });
        }
      });
    } else {
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.push(item);
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].currentType = item.type;
      this.setState({ section });
    }
  };

  AddCheckBox = () => {
    const {
      section,
      currentIndexOfSection,
      currentIndexOfQuestion
    } = this.state;
    const item = { type: "checkbox", value: "" };
    if (
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType &&
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType !== item.type
    ) {
      bootbox.confirm("Are you sure to change answer type?", res => {
        if (res) {
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.length = 0;
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.push(item);
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].currentType = item.type;
          this.setState({ section });
        }
      });
    } else {
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.push(item);
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].currentType = item.type;
      this.setState({ section });
    }
  };

  AddTextBox = () => {
    const {
      section,
      currentIndexOfSection,
      currentIndexOfQuestion
    } = this.state;
    const item = { type: "text", textAnswer: "", name: "textAnswer" };
    if (
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType &&
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType !== item.type
    ) {
      bootbox.confirm("Are you sure to change answer type?", res => {
        if (res) {
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.length = 0;
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.push(item);
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].currentType = item.type;
          this.setState({ section });
        }
      });
    } else {
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.length = 0;
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.push(item);
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].currentType = item.type;
      this.setState({ section });
    }
  };

  AddSelectButton = () => {
    const {
      section,
      currentIndexOfSection,
      currentIndexOfQuestion
    } = this.state;
    const item = {
      type: "select",
      values: [{ value: "--Please choose an option--" }],
      value: ""
    };
    if (
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType &&
      section[currentIndexOfSection].questions[currentIndexOfQuestion]
        .currentType !== item.type
    ) {
      bootbox.confirm("Are you sure to change answer type?", res => {
        if (res) {
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.length = 0;
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].fields.push(item);
          section[currentIndexOfSection].questions[
            currentIndexOfQuestion
          ].currentType = item.type;
          this.setState({ section });
        }
      });
    } else {
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.length = 0;
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].fields.push(item);
      section[currentIndexOfSection].questions[
        currentIndexOfQuestion
      ].currentType = item.type;
      this.setState({ section });
    }
  };

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

  render() {
    return (
      <div className="">
        <select onClick={this.handelAddElement} placeholder="select">
          <option value="">select one</option>
          <option value="item1">Range</option>
          <option value="item2">Radio Button</option>
          <option value="item3">Checkbox</option>
          <option value="item4">Textbox</option>
          <option value="item5">Select Box</option>
        </select>

        <select onClick={this.handelAddSection} placeholder="select">
          <option value="">select one</option>
          <option value="section">Section</option>
          <option value="question">Question</option>
        </select>

        <div className="question">
          <header>Questions</header>
          {this.state.section.map((sec, indexOfSection) => (
            <div
              className="redBorder"
              onClick={e => this.handelcurrentIndexOfSection(e, indexOfSection)}
            >
              <p>Section</p>
              <ul>
                {sec.questions
                  ? sec.questions.map((qus, indexOfQuestion) => (
                      <div
                        className="redBorderQs"
                        onClick={e =>
                          this.handelcurrentIndexOfQuestion(e, indexOfQuestion)
                        }
                      >
                        <p>Question</p>
                        <div className="half top">
                          <input
                            type="text"
                            value={qus.enInput}
                            name="enInput"
                            onChange={e =>
                              this.handelQuestionInput(
                                e,
                                indexOfSection,
                                indexOfQuestion
                              )
                            }
                          />
                          <input
                            type="text"
                            value={qus.bnInput}
                            name="bnInput"
                            onChange={e =>
                              this.handelQuestionInput(
                                e,
                                indexOfSection,
                                indexOfQuestion
                              )
                            }
                          />
                        </div>
                        <div className="half">
                          {qus.fields.map((field, indexOfField) => {
                            if (field.type === "text")
                              return (
                                <div>
                                  <input
                                    type={field.type}
                                    name={field.name}
                                    value={field.textAnswer}
                                    onChange={e =>
                                      this.handelFeildInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion,
                                        indexOfField
                                      )
                                    }
                                  />
                                  <select
                                    className="mdb-select sm-form"
                                    value={qus.weight}
                                    name="weight"
                                    onChange={e =>
                                      this.handelQuestionInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion
                                      )
                                    }
                                  >
                                    <option value="" disabled selected>
                                      Weight
                                    </option>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 3</option>
                                    <option value="4"> 4</option>
                                    <option value="5"> 5</option>
                                    <option value="6"> 6</option>
                                    <option value="7"> 7</option>
                                    <option value="8"> 8</option>
                                    <option value="9"> 9</option>
                                    <option value="10"> 10</option>
                                  </select>
                                  {
                                    <div className="mapping">
                                      <button
                                        onClick={() =>
                                          this.AddMappingQuestion(
                                            indexOfSection,
                                            indexOfQuestion,
                                            indexOfField
                                          )
                                        }
                                      >
                                        Mapping
                                      </button>
                                    </div>
                                  }
                                </div>
                              );
                            if (
                              field.type === "checkbox" ||
                              field.type === "radio"
                            )
                              return (
                                <div>
                                  <input type={field.type} name={field.name} />
                                  <input type="text" />
                                  <select
                                    className="mdb-select sm-form"
                                    value={qus.weight}
                                    name="weight"
                                    onChange={e =>
                                      this.handelQuestionInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion
                                      )
                                    }
                                  >
                                    <option value="" disabled selected>
                                      Weight
                                    </option>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 4</option>
                                    <option value="3"> 5</option>
                                    <option value="3"> 6</option>
                                    <option value="3"> 7</option>
                                    <option value="3"> 8</option>
                                    <option value="3"> 9</option>
                                    <option value="3"> 10</option>
                                  </select>
                                  {
                                    <div className="mapping">
                                      <button onClick={this.AddMappingQuestion}>
                                        Mapping
                                      </button>
                                    </div>
                                  }
                                </div>
                              );
                            if (field.type === "select")
                              return (
                                <div className="div">
                                  <select
                                    id="select"
                                    onChange={this.handelSelect}
                                  >
                                    {field.values.length
                                      ? field.values.map(
                                          (opt, indexOfSectionValue) => (
                                            <option
                                              contenteditable="true"
                                              value={opt.value}
                                            >
                                              {opt.value}
                                            </option>
                                          )
                                        )
                                      : null}
                                  </select>
                                  <input
                                    type="text"
                                    onChange={e =>
                                      this.handelSelectInputOnChange(e)
                                    }
                                    value={this.state.selectEidtInput}
                                    onKeyDown={e =>
                                      this.pushSelectItem(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion,
                                        indexOfField
                                      )
                                    }
                                  />
                                  <select
                                    className="mdb-select sm-form"
                                    value={qus.weight}
                                    name="weight"
                                    onChange={e =>
                                      this.handelQuestionInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion
                                      )
                                    }
                                  >
                                    <option value="" disabled selected>
                                      Weight
                                    </option>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 4</option>
                                    <option value="3"> 5</option>
                                    <option value="3"> 6</option>
                                    <option value="3"> 7</option>
                                    <option value="3"> 8</option>
                                    <option value="3"> 9</option>
                                    <option value="3"> 10</option>
                                  </select>
                                  {
                                    <div className="mapping">
                                      <button onClick={this.AddMappingQuestion}>
                                        Mapping
                                      </button>
                                    </div>
                                  }
                                </div>
                              );
                            if (field.type === "number")
                              return (
                                <div>
                                  <span>form</span>
                                  <input
                                    type={field.type}
                                    value={field.from}
                                    name={field.fromName}
                                    onChange={e =>
                                      this.handelFeildInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion,
                                        indexOfField
                                      )
                                    }
                                  />
                                  <span>to</span>
                                  <input
                                    type={field.type}
                                    value={field.to}
                                    name={field.toName}
                                    onChange={e =>
                                      this.handelFeildInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion,
                                        indexOfField
                                      )
                                    }
                                  />
                                  <select
                                    className="mdb-select sm-form"
                                    value={qus.weight}
                                    name="weight"
                                    onChange={e =>
                                      this.handelQuestionInput(
                                        e,
                                        indexOfSection,
                                        indexOfQuestion
                                      )
                                    }
                                  >
                                    <option value="" disabled selected>
                                      Weight
                                    </option>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                    <option value="3"> 4</option>
                                    <option value="3"> 5</option>
                                    <option value="3"> 6</option>
                                    <option value="3"> 7</option>
                                    <option value="3"> 8</option>
                                    <option value="3"> 9</option>
                                    <option value="3"> 10</option>
                                  </select>
                                  {
                                    <div className="mapping">
                                      <button onClick={this.AddMappingQuestion}>
                                        Mapping
                                      </button>
                                    </div>
                                  }
                                </div>
                              );
                          })}
                        </div>
                      </div>
                    ))
                  : null}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DropDown;
