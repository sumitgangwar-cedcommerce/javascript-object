function employee(p , t , a){
    this.position = p,
    this.type = t,
    this.isAvailable = a,    
    this.showDetails = ()=>{
      return [this.position , this.type , this.isAvailable]
    }
}

function foodItem(a,b,c){
    this.id = a,
    this.name = b,
    this.price = c
}


  
const add_obj = (event)=>{
    event.preventDefault()
    emp = new employee(event.target.position.value, event.target.type.value, event.target.isAvailable.value)

    const chkr = ()=>{
        let t = emp.showDetails()
        return( {
            Position : t[0],
            Type : t[1],
            'Accept Order' : t[2]==="True" ? 'Yes' : 'No'
        })
    }

    document.getElementById('res').innerHTML  = "<h1>The emp object is: </h1><p>" + JSON.stringify(chkr())+ "</p>"
    document.getElementById('key').innerHTML = "<h1>Keys are: </h1><p>" + JSON.stringify(Object.keys(emp))+ "</p>"
    document.getElementById('value').innerHTML = "<h1>Values are: </h1><p>" + JSON.stringify(Object.values(emp))+ "</p>"
    document.getElementById('pair').innerHTML = "<h1>Entries are: </h1><p>" + JSON.stringify(Object.entries(emp))+ "</p>"

    food = new foodItem(2 , "Banana" , 60)
    mergeObj = {...emp , ...food}
    document.getElementById('merge').innerHTML = "<h1>Food Object Merge With emp Object: </h1><p>" + JSON.stringify(mergeObj) + "</p>"


    //Freeze the emp object
    Object.freeze(emp)
}
