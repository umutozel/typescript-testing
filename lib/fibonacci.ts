export function fibonacci(index: number) {
    if (index <= 0) {
        throw new Error("Index must be a positive number")
    }
    if (!Number.isInteger(index)) {
        throw new Error("Index must be an integer")
    }

    let [a, b] = [1, 1]
    for (let i = 3; i <= index; i++) {
        [a, b] = [b, a + b]
    }

    return b
}
