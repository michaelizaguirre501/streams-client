import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props);
  }
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
          content={`Are you sure you want to delete the stream ${this.props.stream.title}?`}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamDelete);
