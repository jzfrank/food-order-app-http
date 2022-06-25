import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Our food is delicious, cheap, and cooked with heart.</p>
      <p>
        We don't even charge. They are literally free. Order how much you want!
      </p>
      <p>The only problem is: We cannot deliver.</p>
      <p>Sorry for any inconvenience that might bring.</p>
    </section>
  );
};

export default MealsSummary;
