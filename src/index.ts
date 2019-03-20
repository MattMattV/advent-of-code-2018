import * as fs from 'fs';
import * as path from 'path';

import chalk from "chalk";

import { DayOne } from "./day-01";
import { DayTwo } from "./day-02";

const dayOne = new DayOne();
const dayOneData = fs.readFileSync(path.resolve(`${__dirname}/../data/day1.txt`)).toString();

const dayTwo = new DayTwo();
const dayTwoData = fs.readFileSync(path.resolve(`${__dirname}/../data/day2.txt`)).toString();

console.log("Day 1 results :");
console.log(chalk`  part one : {green ${dayOne.partOne(dayOneData).toString()}}`);
console.log(chalk`  part two : {green ${dayOne.partTwo(dayOneData).toString()}}`);

console.log("Day 2 results :");
console.log(chalk`  part one : {green ${dayTwo.partOne(dayTwoData).toString()}}`);
console.log(chalk`  part two : {green ${dayTwo.partTwo(dayTwoData).toString()}}`);