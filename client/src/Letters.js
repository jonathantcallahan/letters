import React, {Component} from 'react'

class Letters extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.new_letter = this.new_letter.bind(this)
    }
    new_letter = e => {
        console.log(e.screenX, e.screenY)
    }
    render(){
        return(
            <div className='letters' onMouseMove={this.new_letter}>
                asdf
            </div>
        )
    }
}

export default Letters