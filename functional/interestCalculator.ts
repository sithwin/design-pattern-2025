// functional/interestCalculator.ts

/**
 * Retries a function with exponential backoff
 * @param fn Function to retry
 * @param maxRetries Maximum number of retries
 * @param delayMs Delay between retries in milliseconds
 * @returns Promise that resolves with the function's result or rejects after max retries
 */
const retry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number,
  delayMs: number,
  currentAttempt = 1
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (currentAttempt >= maxRetries) {
      throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return retry(fn, maxRetries, delayMs, currentAttempt + 1);
  }
};

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

const deposit = (balance: number, amount: number): number => {
  if (amount <= 0) {
    throw new Error("Deposit amount must be positive");
  }
  return balance + amount;
};

const withdraw = (balance: number, amount: number): number => {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be positive");
  }
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }
  return balance - amount;
};

const calculateFinalBalance = (
  operations: Array<{ type: "deposit" | "withdraw"; amount: number }>,
  if type == "opening" 
    initialBalance = amount
): number => {
  return operations.reduce((balance, op) => {
    try {
      return op.type === "deposit"
        ? deposit(balance, op.amount)
        : withdraw(balance, op.amount);
    } catch (error) {
      console.error(`Operation failed: ${error.message}`);
      return balance;
    }
  }, initialBalance);
};

// Example usage of calculateFinalBalance
const exampleOperations: Array<{
  type: "deposit" | "withdraw" | "opening";
  amount: number;
}> = [
  { type: "opening", amount: 1000 },
  { type: "deposit", amount: 500 },
  { type: "withdraw", amount: 200 },
  { type: "deposit", amount: 1000 },
  { type: "withdraw", amount: 300 },
];

// Basic usage
const finalBalance = calculateFinalBalance(exampleOperations);
console.log(`Final balance: $${finalBalance}`); // Final balance: $2000

// With custom initial balance
const customBalance = calculateFinalBalance(exampleOperations, 2000);
console.log(`Custom initial balance result: $${customBalance}`); // Custom initial balance result: $3000

// Example with error handling
const riskyOperations: Array<{
  type: "deposit" | "withdraw" | "opening";
  amount: number;
}> = [
  { type: "deposit", amount: 500 },
  { type: "withdraw", amount: 2000 }, // This will fail due to insufficient funds
  { type: "deposit", amount: 1000 },
];

const safeBalance = calculateFinalBalance(riskyOperations);
console.log(`Safe balance after failed operation: $${safeBalance}`); // Safe balance after failed operation: $1300

export { calculateMonthlyInterest, retry, calculateFinalBalance };
