
function Profiles(props) {
  
    return(
    
        <div className="card">
        <img src={props.cardObj.img} className="card-img-top" ></img>
        <div className="card-body h-100">
          <h5 className="card-title">{props.cardObj.title}</h5>
          <p className="card-text"> {props.cardObj.text}</p>
        </div>
        <i className="fa-brands fa-quora"></i>
      </div>
    )
 }
  
   


export default Profiles