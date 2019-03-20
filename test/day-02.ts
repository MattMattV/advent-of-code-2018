import test from 'ava';

import { DayTwo } from '../src/day-02';

const day = new DayTwo();

test("Day 2 part 1", t => {
    const input = `abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    aabcdd
    ababab`;

    t.is(12, day.partOne(input));
});

test("Day 2 part 2", t => {
    const input = `abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz`;

    t.is("fgij", day.partTwo(input));
});