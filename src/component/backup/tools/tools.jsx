import bootbox from "bootbox";
import Handelers from "./handeler";
class Tools extends Handelers {
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
}

export default Tools;
