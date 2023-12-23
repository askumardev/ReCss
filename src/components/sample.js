
import React, { Component } from "react";
import axios from "axios";

class SampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samplists: [],
    };
  }

  loadSamples() {
    axios
      .get("/api/v1/samples")
      .then((res) => {
        this.setState({ samplists: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadSamples();
  }

  render() {
    return (
      <div>
        <div className="taskContainer">
          
        </div>
        <div className="wrapItems">
          <table className="table">
            <thead>
              <tr>
                <th>S.N</th>
                <th> Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.samplists.map((data, index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.name}</td>
                      <td>{data.comment}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>         
        </div>
      </div>
    );
  }
}

export default SampleContainer;


