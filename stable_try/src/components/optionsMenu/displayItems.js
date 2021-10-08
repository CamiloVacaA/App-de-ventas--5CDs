
const DisplayItem = props => {
    
    return (
        <div onClick={props.method} className="menu-item"> 
           <p>{props.children}</p>
        </div>
    );
};
export default DisplayItem;
