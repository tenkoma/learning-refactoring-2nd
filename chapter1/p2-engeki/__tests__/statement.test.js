import {statement} from "../statement.mjs";

test('statement1', () => {
  const plays = {"hamlet": {"name": "Hamlet", "type": "tragedy"}}
  const invoice = {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      }
    ]
  };
  const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
Amount owed is $650.00
You earned 25 credits
`;
  expect(statement(invoice, plays)).toBe(expected);
});

test('statement2', () => {
  const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
  };
  const invoice = {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  };
  const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
  expect(statement(invoice, plays)).toBe(expected);
});

