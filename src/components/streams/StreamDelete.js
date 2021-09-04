import React from "react";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  renderActions() {
    return (
      <>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    );
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          header="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default StreamDelete;
