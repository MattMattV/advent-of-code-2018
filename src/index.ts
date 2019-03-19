import * as fs from 'fs';
import * as path from 'path';

import chalk from "chalk";

import { DayOne } from "./day-01";

const dayOne = new DayOne();
const dayOneData = fs.readFileSync(path.resolve(`${__dirname}/../data/day1.txt`)).toString();

console.log("Day 1 results :");
console.log(chalk`  part one : {green ${dayOne.partOne(dayOneData).toString()}}`);
console.log(chalk`  part one : {green ${dayOne.partTwo(dayOneData).toString()}}`);