import test from 'ava';

import { DayOne } from '../src/day-01';

const day = new DayOne();

test("Day 1 part 1", t => {
    t.is(3, day.partOne("+1, +1, +1"));
    t.is(0, day.partOne("+1, +1, -2"));
    t.is(-6, day.partOne("-1, -2, -3"));
});

test("Day 1 part 2", t => {
    t.is(0, day.partTwo("+1, -1"));
    t.is(10, day.partTwo("+3, +3, +4, -2, -4"));
    t.is(5, day.partTwo("-6, +3, +8, +5, -6"));
    t.is(14, day.partTwo("+7, +7, -2, -7, -4"));
});