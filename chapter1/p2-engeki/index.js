import fs from 'fs';
import { statement } from './statement.mjs'

const plays = JSON.parse(fs.readFileSync('./plays.json'));
const invoices = JSON.parse(fs.readFileSync('./invoices.json'));
for (let invoice of invoices) {
    console.log(statement(invoice, plays));
}
