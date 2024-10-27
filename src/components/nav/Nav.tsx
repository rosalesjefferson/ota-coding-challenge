import { Dispatch, SetStateAction } from "react";

import { Coupons, Home, User } from "../icons";
import { TTab } from "../../types";
import NavItem from "./NavItem";

type TProps = {
  tab: TTab;
  setTab: Dispatch<SetStateAction<TTab>>;
};

const Nav = ({ tab, setTab }: TProps) => {
  return (
    <nav className="bg-neutrals-white border-t flex justify-around p-2">
      <NavItem
        icon={<Home />}
        label="Home"
        active={tab === "home"}
        onClick={() => setTab("home")}
      />
      <NavItem
        icon={<Coupons />}
        label="My Coupons"
        active={tab === "my-coupons"}
        onClick={() => setTab("my-coupons")}
      />
      <NavItem
        icon={<User />}
        label="Me"
        active={tab === "me"}
        onClick={() => setTab("me")}
      />
    </nav>
  );
};

export default Nav;
