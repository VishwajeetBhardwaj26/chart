import classes from './Cardbar.module.css';
const Card=props=>{
    return <div className={classes.cardbar} >
        {props.children}
    </div>
};
export default Card;