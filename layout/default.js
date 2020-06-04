import React, {Component, Children} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

class Index extends Component{
  render(){
    return(
      <div class="page-wrapper">
          <Header />
            {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default Index