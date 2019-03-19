export class DayOne {

    public partOne(input: string): number {
        return this.transformString(input)
            .reduce((accumulator, value) => {
                return accumulator + value
            });
    }

    public partTwo(input: string): number {
        const operations = this.transformString(input);

        const sums = Array.from([0]);

        let lastSum = 0;

        while (true) {
            for (const x of operations) {
                lastSum = sums[sums.length - 1] + x

                if (sums.includes(lastSum)) {
                    return lastSum;
                }

                sums.push(lastSum);
            }
        }
    }

    private transformString(input: string) : Array<number> {
        return input.replace(/\n/g, ",")
            .split(",")
            .map(value => value.trim())
            .map(value => parseInt(value, 10))
    }
}