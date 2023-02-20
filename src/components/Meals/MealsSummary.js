import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your favorite Tee, Delivered to thee</h2>
      <p>
        Choose your favorite T-shirt from our broad selection of available
        branded Tees and enjoy the comfort.
      </p>
      <p>
        All T-shirts are made with high-quality fabric, delivered to your
        doorsteps just-in-time in the lowest of costs!
      </p>
    </section>
  );
};

export default MealsSummary;
