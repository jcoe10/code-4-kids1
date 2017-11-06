import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Kids extends Component {
    render() {
      return (
         <Jumbotron>
             <center>
                <h1 class="display-3">Hey!</h1>
                <h2>Would you like to learn something awesome?</h2>
                <hr class="my-4" />
                <p class="lead">
                    <div>
                        <center>

                                <a href="../../index1.html" type="button" class="btn btn-success">YES</a>
                                <a href="../../home.html" type="button" class="btn btn-danger">NO</a>


                        </center>
                    </div>
                </p>
        
        </center>

         </Jumbotron>
      );
    }
  }
  export default Kids;
 
  
  
  
  


