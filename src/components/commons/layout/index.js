import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
