import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //redux form automatically defines props and methods(handlers) to our form components
    const className = `field ${meta.error && meta.touched ? "error" : " "}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input autoComplete="off" {...input} />
        {this.renderError(meta)}
        {/* returns an input that has all of the props thatcome from redux form */}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    console.log("~~Rendered form props~~", this.props);
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)} //handle submit is from redux-form we are passing in our own helper function called onSubmit
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  // assigning the redux form functionality to a variable
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped); // passing that ^^^ variable to connect that variable has the StreamCreate component as a IEFE so this one does as well
