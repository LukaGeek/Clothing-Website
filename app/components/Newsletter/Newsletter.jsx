import classes from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.firstDiv}>
          <h1>Newsletter</h1>
          <span>
            Subscribe to our newsletter and get 20% off your first purchase
          </span>
        </div>
        <div className={classes.secondDiv}>
          <input type="email" placeholder="Your Email" />
          <button>subscribe</button>
        </div>
      </div>
    </div>
  );
}
