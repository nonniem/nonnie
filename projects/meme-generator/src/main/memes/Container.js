import React from "react";
import Meme from "./Meme";
import MemesComponent from "./Component";
import {connect} from "react-redux";



class MemeContainer extends React.Component{
    constructor(){
      super();
      this.genList = this.genList.bind(this);
    }

    genList(){
      return this.props.memes.map((meme, i)=>{
              return <Meme
                          key={meme.top + i}
                          meme={meme}/>
      })
    }

    render(){
        return(
            <MemesComponent
                    genList={this.genList}/>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    memes: state.memes
  }
}



export default connect(mapStateToProps, {})(MemeContainer);
