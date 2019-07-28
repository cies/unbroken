import React from "react";
import { graphql } from "gatsby";
import Layout from "./index";
import { addLocaleData } from "react-intl";

import messages from "../data/messages/pt";
import pt from "react-intl/locale-data/pt";
import "intl/locale-data/jsonp/pt";

addLocaleData(pt);

export default (props: any) => (
  <Layout {...props} i18nMessages={messages} lang="pt" />
);
