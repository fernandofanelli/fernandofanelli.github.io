import React from "react";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.auth}>
      <h1>Ingrese Medida</h1>
      <form>
        <FormInput
          className={classes.control}
          type="text"
          text="Medida del largo"
        />
        <div className={classes.actions}>
          <Button>{"Login"}</Button>
          <Button
            type="button"
            className={classes.toggle}
            onClick={() => console.log("presiono")}
          >
            {"Obtener Modulo"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Home;
