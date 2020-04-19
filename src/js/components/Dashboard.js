import React from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import NavBar from './NavBar'
import DisplayBlocks from './DisplayBlocks'
import * as actions from '../actions/Actions';
import Cart from './Cart'
import store from '../utils/createStore';
import TotalWorth from './totalWorth'


 class Dashboard extends React.Component {

     handleInc(e) {
        store.dispatch(actions.increment(e.id))
    }

    handleDec(e) {
         store.dispatch(actions.decrement(e.id))
    }

    render() {
        let displayBlock = []
        this.props.items.items.map((data, index) => {
               displayBlock.push(<DisplayBlocks key={index}  inc = {this.handleInc.bind(this)} dec={this.handleDec.bind(this)} obj={data}></DisplayBlocks>)
        })

        let addedItems = []
        this.props.items.addedItems.map((data, index) => {
            addedItems.push(<Cart key={index}  obj={data} totalPrice = {this.props.items.total}></Cart>)
        })

        var totalAmout = this.props.items.total

        return(
            <>
            <Header/>
             <NavBar/>
             {displayBlock}
             {addedItems}
             <TotalWorth total = {totalAmout}/>
             </>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        addedItems: state.addedItems,
        total: state.total
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        // addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)