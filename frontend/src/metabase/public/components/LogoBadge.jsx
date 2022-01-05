import React from "react";
import LogoIcon from "metabase/components/LogoIcon";
import ExternalLink from "metabase/components/ExternalLink";

import { t, jt } from "ttag";

type Props = {
  dark: boolean,
};

const LogoBadge = ({ dark }: Props) => (
  <ExternalLink
    href="https://earningschart.org/"
    target="_blank"
    className="h4 flex text-bold align-center no-decoration"
  >
    <span className="text-small">
      <span className="ml1 md-ml2 text-medium">{jt` ${(
        <span className={dark ? "text-white" : "text-brand"}>{t` `}</span>
      )}`}</span>
    </span>
  </ExternalLink>
);

export default LogoBadge;
