import React from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import NavBar from './NavBar'
import DisplayBlocks from './DisplayBlocks'
import * as actions from '../actions/Actions';
import '../resources/dashboard.scss'
import { Card, Icon, Image } from 'semantic-ui-react'


 class Dashboard extends React.Component {

     handleInc(e) {
        this.props.addItem(e.id)
    }

    handleDec(e) {
         this.props.deleteItem(e.id)   
    }

    render() {
        let displayBlock = []
        this.props.items.items.map((data, index) => {
               displayBlock.push(<DisplayBlocks key={index}  inc = {this.handleInc.bind(this)} dec={this.handleDec.bind(this)} obj={data}></DisplayBlocks>)
        })
        return(
            <div className='container'>
            <Header/>
             <NavBar noOfItems = {this.props.addedItems.length}/>
             {displayBlock}
             </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        addedItems: state.items.addedItems,
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
         addItem: (id)=>{dispatch(actions.increment(id))},
         deleteItem : (id)=>{dispatch(actions.decrement(id))}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)