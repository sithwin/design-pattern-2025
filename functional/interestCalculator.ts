// functional/interestCalculator.ts
type DailyBalance = number;

const DAILY_THRESHOLD = 5000;
const LOW_RATE = 0.02;
const HIGH_RATE = 0.04;

// Pure function to calculate daily interest
const calculateDailyInterest = (balance: DailyBalance): number => {
  const baseAmount = Math.min(balance, DAILY_THRESHOLD);
  const excessAmount = Math.max(balance - DAILY_THRESHOLD, 0);
  const totalInterest = baseAmount * LOW_RATE + excessAmount * HIGH_RATE;
  console.log(`Daily interest for balance ${balance}: ${totalInterest}`);
  return totalInterest;
};

// Pure function to calculate total monthly interest
const calculateMonthlyInterest = (dailyBalances: DailyBalance[]): number => {
  return dailyBalances
    .map(calculateDailyInterest)
    .reduce((total, dailyInterest) => total + dailyInterest, 0);
};

// Example usage
const exampleBalances: DailyBalance[] = [
  4500, // Day 1: 4500 * 2% = 90
  7000, // Day 2: 5000 * 2% + 2000 * 4% = 100 + 80 = 180 -> 7000 + 180 ->
  4800, // Day 3: 4800 * 2% = 96
  5200, // Day 4: 5000 * 2% + 200 * 4% = 100 + 8 = 108
  // ... rest of the month's balances
];

const monthlyInterest = calculateMonthlyInterest(exampleBalances);
console.log(`Total monthly interest: $${monthlyInterest.toFixed(2)}`);

export { calculateMonthlyInterest };
