import React from "react";
import SearchHeader from "../../components/searchheader";
import { useEffect } from "react";
import project from "../../src/project";

export default function View({ summary, balance }) {
  return (
    <div>
      <SearchHeader />
      <h1></h1>
      {/* {summary?.map((sum) => {
        <div>{sum}</div>;
      })} */}
    </div>
  );
}

export async function getServerSideProps(context) {
  let slug = context.query.address;
  console.log(slug);

  const url = project(slug);

  const balance = await url.methods.getBalance().call();
  console.log(balance);
  //we can get the balance

  const summary = await url.methods.getSummary().call();


  return {
    props: {
      balance: balance,
    },
  };
}
