const testName: string ="checkout with saved card";
let passedcount:number = 0;
const isSmoke:boolean = true;
passedcount = passedcount + 1;
const durationMS  = 1250;

console.log(`${testName} | passed=${passedcount} | smoke=${isSmoke} | ${durationMS}ms`);