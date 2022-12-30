import React from "react";
import { Description } from "/src/components/ui/description/description";
import { Specifications } from "/src/components/ui/specifications/specifications";
import { Internals } from "/src/components/ui/internals/internals";

export function Tabs({ item, activeTab }) {
  const tabs = [
    { content: <Description item={item} /> },
    { content: <Specifications item={item} /> },
    { content: <Internals item={item} /> }
  ];
  return <>{tabs[activeTab].content}</>;
}
