export function validateCpf(cpf: string | null | undefined): boolean {
    if (cpf === null || cpf === undefined) return false;
    const cleanCpf = cpf.replace(/\D/g, "");
    if (cleanCpf.length !== 11) return false;
    if (allDigitsAreEqual(cleanCpf)) return false;
    const digit1 = calculateDigit(cleanCpf, 10);
    const digit2 = calculateDigit(cleanCpf, 11);
    const actualDigit1 = parseInt(cleanCpf.substring(9, 10));
    const actualDigit2 = parseInt(cleanCpf.substring(10, 11));
    return digit1 === actualDigit1 && digit2 === actualDigit2;
}

function allDigitsAreEqual(cpf: string): boolean {
    return cpf.split("").every(c => c === cpf[0]);
}

function calculateDigit(cpf: string, factor: number): number {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1) {
            total += parseInt(digit) * factor--;
        }
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}