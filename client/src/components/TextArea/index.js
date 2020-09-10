import React from "react";

export default function TextArea(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      
      <textarea onChange={props.onChange} class="form-control" id={props.id} rows={props.rows}></textarea>
    </div>
  );
}
