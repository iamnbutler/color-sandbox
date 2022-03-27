import React from "react";
import ColorChart from "./component/colorChart";
import NoSSR from "./component/noSSR";

export default function Home() {
  return (
    <>
      <main className="p-4">
        <h1>ZDS Base Colors</h1>
        <div className="min-w-full min-h-screen">
          <NoSSR>
            <ColorChart />
          </NoSSR>
        </div>
      </main>
    </>
  );
}
