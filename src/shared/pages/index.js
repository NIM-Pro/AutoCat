'use strict'

const React = require('react')
const {connect} = require('react-redux')
const fetch = require('isomorphic-fetch')
const Acts = require('../actions/hello')

class HelloPage extends React.Component {
  static need = [
    () => Acts.fetchData()
  ]
  componentDidMount() {
    if (this.props.state.hello.text.length === 0)
      this.props.dispatch(Acts.fetchData())
  }
  a() {
    this.props.dispatch(Acts.appendText('!'))
    // this.setState({
    //   text: this.state.text + '!'
    // })
  }
  render() {
    return <h1 onClick={()=> this.a()}>{this.props.state.hello.text}</h1>
  }
}

module.exports = connect(state => ({state}))(HelloPage)
