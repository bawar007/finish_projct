import React from "react";
import bemCssModules from "bem-css-modules";

import { default as AsideMenuStyles } from "./AsideMenu.module.scss";
import { useContext } from "react";

import UserMenu from "./subcomponents/UserMenu/UserMenu";
import AdminMenu from "./subcomponents/AdminMenu/AdminMenu";

import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = 1;

const AsideMenu = () => {
  const { user } = useContext(StoreContext);
  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null;

  return (
    <section className={style()}>
      <div className={style("nav-wrapper")}>
        <UserMenu isUserLogged={Boolean(user)} />
        {adminMenuComponent}
      </div>
    </section>
  );
};

export default AsideMenu;
