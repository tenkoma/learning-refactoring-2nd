import { createStatementData } from "../createStatementData.mjs";

test("createStatementData", () => {
  const plays = { hamlet: { name: "Hamlet", type: "tragedy" } };
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
    ],
  };
  const expected = {
    customer: "BigCo",
    performances: [
      {
        amount: 65000,
        audience: 55,
        play: {
          name: "Hamlet",
          type: "tragedy",
        },
        playID: "hamlet",
        volumeCredits: 25,
      },
    ],
    totalAmount: 65000,
    totalVolumeCredits: 25,
  };
  expect(createStatementData(invoice, plays)).toEqual(expected);
});

test("createStatementData2", () => {
  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  };
  const expected = {
    customer: "BigCo",
    performances: [
      {
        amount: 65000,
        audience: 55,
        play: {
          name: "Hamlet",
          type: "tragedy",
        },
        playID: "hamlet",
        volumeCredits: 25,
      },
      {
        amount: 58000,
        audience: 35,
        play: {
          name: "As You Like It",
          type: "comedy",
        },
        playID: "as-like",
        volumeCredits: 12,
      },
      {
        amount: 50000,
        audience: 40,
        play: {
          name: "Othello",
          type: "tragedy",
        },
        playID: "othello",
        volumeCredits: 10,
      },
    ],
    totalAmount: 173000,
    totalVolumeCredits: 47,
  };
  expect(createStatementData(invoice, plays)).toEqual(expected);
});
