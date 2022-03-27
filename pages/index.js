import React from "react";
import ColorChart from "./component/colorChart";
import NoSSR from "./component/noSSR";

export default function Home() {
  return <div className="min-w-full min-h-screen"><NoSSR><ColorChart /></NoSSR></div>;
}
