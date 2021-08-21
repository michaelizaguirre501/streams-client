import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  return (
    <div>
      StreamDelete
      <Modal
        header={"Delete Stream"}
        content={"Are you sure you want to delete this stream?"}
        redirect={"/"}
      />
    </div>
  );
};

export default StreamDelete;
