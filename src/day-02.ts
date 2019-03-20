import * as fs from 'fs';
import * as path from 'path';

export class DayTwo {


    public partOne(input: string): number {
        const words = this.transformString(input);

        let twoLetters = 0;
        let threeLetters = 0;

        for (const word of words) {
            // Map containing a letter as key and its number of occurrence as
            // value
            const map = new Map<string,number>();

            for (const letter of word.split("")) {
                const letterValue = map.get(letter);

                if (letterValue === undefined) {
                    map.set(letter, 1);
                } else if (letterValue !== undefined) {
                    map.set(letter, letterValue + 1)
                }
            }

            const lettersCounts = Array.from(map.values());

            if (lettersCounts.includes(2)) {
                twoLetters++;
            }

            if (lettersCounts.includes(3)) {
                threeLetters++;
            }
        }

        return twoLetters * threeLetters;
    }

    public partTwo(input: string): string {
        const words = this.transformString(input);

        for (const word of words) {
            for (const secondWord of words) {
                if (word === secondWord) {
                    continue;
                }

                const splittedWord       = word.split("");
                const splittedSecondWord = secondWord.split("");

                let sameLettersCounter = 0;
                let differentLetterIndex = -1;

                for (const [index, letter] of splittedWord.entries()) {
                    if (letter === splittedSecondWord[index]) {
                        sameLettersCounter++;
                    } else {
                        differentLetterIndex = index;
                    }
                }

                if (sameLettersCounter === splittedWord.length - 1) {
                    splittedWord.splice(differentLetterIndex, 1);
                    return splittedWord.join("");
                }
            }
        }

        return "";
    }

    private transformString(input: string) : Array<string> {
        return input
            .split(/\n/g)
            .map(value => value.trim());
    }
}