import { statement, htmlStatement } from "../statement.mjs";

test("statement", () => {
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
  const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
Amount owed is $650.00
You earned 25 credits
`;
  expect(statement(invoice, plays)).toBe(expected);
});

test("htmlStatement", () => {
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
  const expected = `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
</table>
<p>Amount owed is <em>$650.00</em></p>
<p>You earned <em>25</em> credits</p>
`;
  expect(htmlStatement(invoice, plays)).toBe(expected);
});
