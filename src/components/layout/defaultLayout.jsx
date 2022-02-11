import { Fragment } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
        <div className="container">
          { children }
        </div>
      <Footer />
    </Fragment>
  );
}
