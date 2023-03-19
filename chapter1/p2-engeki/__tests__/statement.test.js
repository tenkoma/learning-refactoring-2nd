import { statement, amountFor } from "../statement.mjs";

test('BigCo: hamlet', ()=> {
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

test('BigCo: all', ()=> {
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

test.each([
    {
        play: {"name": "Hamlet", "type": "tragedy"},
        performance: {"playID": "hamlet", "audience": 55},
        expected: 65000
    },
    {
        play: {"name": "As You Like It", "type": "comedy"},
        performance: {"playID": "as-like", "audience": 35},
        expected: 58000
    },
    {
        play: {"name": "Othello", "type": "tragedy"},
        performance: {"playID": "othello", "audience": 40},
        expected: 50000
    },
])('amountFor($play, $performance), ', async ({play, performance, expected}) => {
    expect(amountFor(play, performance)).toBe(expected);
});
