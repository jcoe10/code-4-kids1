import React, { Component } from 'react';

class Modal2 extends Component {
    render() {
      return (
        <div id="modal2" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
    <form>
         <div class="form-group">
           <label for="exampleInputEmail1">Email address</label>
           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
           <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
         <div class="form-group">
           <label for="exampleInputPassword1">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
         </div>
         <div class="form-check">
           <label class="form-check-label">
             <input type="checkbox" class="form-check-input"/>
             Check me out
           </label>
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
    </form>



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  export default Modal2;
