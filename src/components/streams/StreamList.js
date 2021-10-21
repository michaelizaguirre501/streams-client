import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams = (streams) => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled animated list">{this.renderStreams()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
