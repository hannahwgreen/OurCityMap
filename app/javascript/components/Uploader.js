import React from "react"
import PropTypes from "prop-types"
import Dropzone from 'react-dropzone'
import request from "superagent";

class Uploader extends React.Component {

  constructor() {
    super()
    this.state = {
      files: [],
    }
  }

  render () {
    return (
      <div>
        <div>Drop Photo Here: {this.props.csrf}</div>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
              return "This file is authorized";
            }
            if (isDragReject) {
              return "This file is not authorized";
            }
            return acceptedFiles.length || rejectedFiles.length
              ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
              : "Try dropping some files.";
          }}
        </Dropzone>

        <hr/>
        <h2>Dropped files</h2>
        <ul>
          {
            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
          }
        </ul>
      </div>
    );
  }


  onDrop(files) {

      this.setState({
        files
      });

      // files.map(f => {

        // const fd = new FormData();
        // fd.append("upload[title]", f.name);
        // fd.append("upload[file]", f)
        //

        // request
        //   // .post('/uploads/')
        //   .set('x-csrf-Token', this.props.csrf)
        //   .set('accept', 'json')
        //   .query({ format: 'json' })
        //   .send( fd ) // sends a JSON post body
        //   .end((err, res) => {
        //     // Calling the end function will send the request
        //   });
        this.props.handler(files[0])
    }
  }

Uploader.propTypes = {
  csrf: PropTypes.string
};

export default Uploader;
