class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(device){
    this.setState({ device })
  }

  render() {
    let selectedDevice
      if (this.state.device == "map") {
        selectedDevice = <MapContainer />
      }

    return(
      <div>
        <div className="row">
            <DeviceToggle
              device={this.props.device}
              handler={this.handleChange}
            />
        </div>
        {selectedDevice}
      </div>
    )
  }
}
export default Home;
