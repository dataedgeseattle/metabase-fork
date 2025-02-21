import React from "react";

import { Route } from "metabase/hoc/Title";
import { IndexRedirect } from "react-router";
import { t } from "ttag";
import ToolsApp from "./containers/ToolsApp";
import ErrorOverview from "./containers/ErrorOverview";

const getRoutes = (store: any) => (
  <Route path="tools" title={t`Tools`} component={ToolsApp}>
    <IndexRedirect to="errors" />
    <Route
      path="errors"
      title={t`Erroring Questions`}
      component={ErrorOverview}
    />
  </Route>
);

export default getRoutes;
