import React from "react";

export default function TrueFalse(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
              <select class="custom-select" id={props.id} onChange={props.onChange}>
                <option selected>Choose...</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    </div>
  );
}
