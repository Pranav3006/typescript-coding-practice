function formatDuration(ms:number):string {
    const seconds = Math.floor(ms/1000);
    const rest = ms % 1000;

    return `${seconds}s ${rest}ms`; 
}

console.log(formatDuration(1250));
// formatDuration("1250");           // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
