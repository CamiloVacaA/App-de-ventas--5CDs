
const DisplayItem = props => {
    
    return (
        <a href="#" onClick={props.method} className="menu-item"> 
           <p>{props.children}</p>
        </a>
    );
};
export default DisplayItem;
