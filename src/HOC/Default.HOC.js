import React from "react";
import {Route} from "react-router-dom";

//import
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({element, ...rest}) => {
  const Element = element;

  return (
    <>
    <Route
    {...rest}
    element={(props) =>(
    <DefaultLayout>
      <Element {...props} />
    </DefaultLayout>
    )}
    />
    </>
  );
};

export default DefaultHOC;
