import React, { Component } from "react";


class CodeButtons extends Component {
    render() {
      return (
       <div>
        <center>
        
        <div class="btn-group" data-toggle="buttons">
  <label class="btn btn-secondary">
    <input type="checkbox" checked autocomplete="off"/>HTML
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"/> CSS
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"/> JavaScript
  </label>
</div>

        </center>
       </div>
      );
    }
  }
  export default CodeButtons;