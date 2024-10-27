import { useState } from "react";

import { TTab } from "./types";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Nav from "./components/nav/Nav";

export default function App() {
  const [tab, setTab] = useState<TTab>("home");

  return (
    <div className="relative h-screen overflow-auto mx-auto bg-primary flex flex-col border-x">
      <Header />
      <main className="p-4 flex-grow rounded-t-[0.5rem] bg-neutrals-white relative z-10">
        {tab === "home" ? <Products /> : null}
        {tab === "my-coupons" ? <ComingSoonPlaceholder /> : null}
        {tab === "me" ? <ComingSoonPlaceholder /> : null}
      </main>
      <Nav tab={tab} setTab={setTab} />
    </div>
  );
}
function ComingSoonPlaceholder() {
  return (
    <div className="h-full flex items-center justify-center">Coming soon</div>
  );
}
