export function printItem(text: string, callback: () => void): void {
  console.log(text);
  callback();
}


export function arrMutate(
    numbers: number[],
    mutate: (v: number) => number
): number[] {
    return numbers.map(mutate)
}

