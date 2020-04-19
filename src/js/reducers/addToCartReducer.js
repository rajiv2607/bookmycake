import * as ActionConstants from "../actions/ActionConstants";


// const initState = {
//     items: [
//         {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110},
//         {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8},
//         {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120},
//         {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260}
//     ],
//     addedItems:[],
//     total: 0

// }

const initialState = {
    items : [
        {
            id:1,
            name: "Vanilla Almond",
            price : 300,
            discription : "Light and sweet but moist and rich in flavor, our Vanilla Almond cake is filled and frosted with our house vanilla buttercream. Vanilla Almond Amycakes are decorated with sparkly clear crystal sprinkles, pearl sprinkles and a ring of buttercream rosettes",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity : 0
        },
        {
            id:2,
            name :"Golden Chocolate",
            price :300,
            discription : "Old fashioned, buttery golden yellow cake, just as moist and dense as Grandma used to make. Filled and frosted with our house chocolate buttercream. Golden Chocolate Amycakes are decorated with ascending gold sprinkles, chocolate ganache drizzle and dark chocolate curls and flakes.",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity:0
        },
        {
            id:3,
            name :"Red Velvet",
            price :300,
            discription : "One of our most popular cakes, our red velvet is always moist and dense with a light chocolate flavor. It is perfectly paired when filled and frosted with our house vanilla buttercream. Red Velvet Amycakes are decorated with red velvet cake crumbs and a ring of buttercream rosettes.",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity:0
        },
        {
            id:4,
            name :"Peanut Butter Cup",
            price :300,
            discription : "Moist, fudgy chocolate cake, filled and frosted with our creamy peanut butter buttercream. Peanut Butter Cup Amycakes are decorated with chocolate ganache drizzle, chocolate curls and peanut butter cups.",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity:0
        },
        {
            id:5,
            name :"Choco Lava Cake",
            price :300,
            discription : "Moist, fudgy chocolate cake, filled and frosted with our creamy peanut butter buttercream. Peanut Butter Cup Amycakes are decorated with chocolate ganache drizzle, chocolate curls and peanut butter cups.",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity:0
        },
        {
            id:6,
            name :"Cup Cakes",
            price :300,
            discription : "Moist, fudgy chocolate cake, filled and frosted with our creamy peanut butter buttercream. Peanut Butter Cup Amycakes are decorated with chocolate ganache drizzle, chocolate curls and peanut butter cups.",
            src: require('../resources/imageShelf/rich-chocolate-cake.png'),
            quantity:0
        }
    ],
    addedItems:[],
    total: 0
}


const addToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case  ActionConstants.QUANTITY_INCREASES :
            {
                let addedItem = state.items.find(item=> item.id === action.id)
                let existed_item= state.addedItems.find(item=> action.id === item.id)
                if(existed_item) {
                    addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
                }
                else{
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + addedItem.price 
                    
                    return{
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal
                    }
                    
                }



                console.log(state.get("cakeName"))
                if(state.get("cakeName").length>1){
                    let newQty = state.get(action.cakeName) + 1
                   return state.set(action.cakeName, newQty)
                } else {
                    return state.set("cakeName", action.cakeName).set("quantity",1);
                }
            }

            case ActionConstants.QUANTITY_DECREASED:
                {
                if(state.has(action.cakeName)){
                    let newQty = state.get(action.cakeName) - 1
                   return state.set(action.cakeName, newQty)
                } else {
                    return state.set(action.cakeName, action.quantity);
                }
                }
                default:
                return state;

    }
}

export default addToCartReducer
