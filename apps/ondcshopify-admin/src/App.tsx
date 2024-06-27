import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OndcItemList } from "./ondcItem/OndcItemList";
import { OndcItemCreate } from "./ondcItem/OndcItemCreate";
import { OndcItemEdit } from "./ondcItem/OndcItemEdit";
import { OndcItemShow } from "./ondcItem/OndcItemShow";
import { ShopifyItemList } from "./shopifyItem/ShopifyItemList";
import { ShopifyItemCreate } from "./shopifyItem/ShopifyItemCreate";
import { ShopifyItemEdit } from "./shopifyItem/ShopifyItemEdit";
import { ShopifyItemShow } from "./shopifyItem/ShopifyItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ONDCSHOPIFY"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OndcItem"
          list={OndcItemList}
          edit={OndcItemEdit}
          create={OndcItemCreate}
          show={OndcItemShow}
        />
        <Resource
          name="ShopifyItem"
          list={ShopifyItemList}
          edit={ShopifyItemEdit}
          create={ShopifyItemCreate}
          show={ShopifyItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
