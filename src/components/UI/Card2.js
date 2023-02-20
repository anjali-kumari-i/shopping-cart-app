import classes from './Card2.module.css';

const Card2 = props => {
  return <p className={classes.card}>{props.children}</p>
};

export default Card2;