## 🧩 **“Understanding Unit Testing — The Foundation of Quality Code”**

>  your team should clearly understand **what unit testing is**, **why we do it**, and **how to write effective, meaningful tests** (with stubs, mocks, edge cases, and naming best practices).

---


## 🧱 **1️⃣ What is Unit Testing (Explain Simply)**

🎙️ **Talking Point:**

> Unit testing means testing **each smallest unit** of code (like a function or method) **individually and in isolation** to ensure it behaves as expected.

📘 **Explain with Real-Life Analogy:**

> Just like a car company tests _each part_ (brakes, headlights, engine) before assembling the car —
> in coding, we test _each function_ before integrating it with others.

💡 Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

✅ Unit test checks:

```ts
test("add() should return correct sum for positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

---

## 🧠 **2️⃣ Why Unit Testing is Important**

| Benefit          | Description                                  |
| ---------------- | -------------------------------------------- |
| 🧱 Reliability   | Catches bugs early before production         |
| ⚡ Confidence    | Safe to refactor code later                  |
| 🧪 Documentation | Tests show how your code should behave       |
| 🚦 Automation    | Easy to run all tests automatically in CI/CD |
| 🧭 Quality       | Forces cleaner, modular design               |

---

## 🧩 **3️⃣ Key Concepts to Explain (Show One by One)**

### 🧠 a. **Unit**

The smallest testable part (e.g., function or method).

### ⚙️ b. **Test Case**

A single scenario to verify.

```ts
test("should throw error when input is empty", () => { ... });
```

### 🔍 c. **Assertion**

Compares actual output with expected output.

```ts
expect(add(2, 3)).toBe(5);
```

### 🧩 d. **Test Runner**

Tool that runs all tests → (Jest, Mocha, PyTest, etc.)

### 🧱 e. **Isolation**

Each test runs independently — no DB, no network.

---

## 🎭 **4️⃣ Explaining Test Doubles (Real-World Style)**

🧠 **Concept:** When our function depends on external systems (like DB or API), we use _fake versions_ to isolate testing.

| Type      | What it Does          | Example                             |
| --------- | --------------------- | ----------------------------------- |
| **Dummy** | Placeholder           | Passing `null` or fake value        |
| **Stub**  | Returns fake data     | Fake DB returning mock user         |
| **Mock**  | Tracks behavior       | Check if email API was called       |
| **Spy**   | Watches real function | Record how many times it was called |

---

### 💻 Example: Real Demo (TypeScript + Jest)

```ts
// userService.ts
import { getUserFromDB, sendEmail } from "./services";

export function registerUser(email: string) {
  const user = getUserFromDB(email);
  if (user) throw new Error("User already exists");
  sendEmail(email, "Welcome!");
  return "Registration successful!";
}
```

#### 🧪 Test with Stubs and Mocks

```ts
import * as services from "../src/services";
import { registerUser } from "../src/userService";

test("should register new user when not found", () => {
  jest.spyOn(services, "getUserFromDB").mockReturnValue(null); // Stub
  jest.spyOn(services, "sendEmail").mockImplementation(() => {}); // Mock

  const result = registerUser("new@user.com");
  expect(result).toBe("Registration successful!");
});

test("should throw error when user exists", () => {
  jest
    .spyOn(services, "getUserFromDB")
    .mockReturnValue({ email: "old@user.com" });
  expect(() => registerUser("old@user.com")).toThrow("User already exists");
});
```

💡 Explain to your team:

> We are **faking dependencies** so we only test our business logic.

---

## 🧩 **5️⃣ Key Testing Topics to Cover**

| Concept                      | Description                 | Example                              |
| ---------------------------- | --------------------------- | ------------------------------------ |
| **Code Coverage**            | % of code tested            | `npx jest --coverage`                |
| **Edge Cases**               | Extreme/rare inputs         | `divide(10, 0)` throws error         |
| **Avoid Side Effects**       | Don’t call DBs or APIs      | Use mocks instead                    |
| **Use Stubs & Mocks Wisely** | Mock only external systems  | Don’t mock your own logic            |
| **Descriptive Messages**     | Write meaningful test names | “should throw when dividing by zero” |
| **Clear Naming**             | Self-explaining test titles | “should return 0 for empty array”    |

---

## 📋 **6️⃣ KT Demo Structure (To Present)**

🧑‍🏫 **Step 1:** Show a simple function
🧑‍💻 **Step 2:** Write one basic test
🧱 **Step 3:** Add edge case tests
🎭 **Step 4:** Replace real DB/API with mocks
📊 **Step 5:** Run coverage and show 100% output
🧠 **Step 6:** Discuss naming and isolation rules

---

## 🧩 **7️⃣ Best Practices Summary**

| Rule                              | Explanation                             |
| --------------------------------- | --------------------------------------- |
| 🧱 Test one function per test     | Don’t combine multiple features         |
| 🧪 Use `describe()` blocks        | Group related tests                     |
| 🧍‍♂️ Use “should…” names            | Clear and consistent                    |
| 🧠 Test positive + negative cases | Success + error paths                   |
| 🔁 Reset mocks                    | `afterEach(() => jest.clearAllMocks())` |
| ⚡ Automate tests                 | Add to CI pipeline                      |
| 🚫 Don’t test libraries           | Test your own logic only                |

---

## 🧭 **8️⃣ Real-Life Analogy to Tell Team**

> Think of unit testing like checking a **light switch** before wiring it to the house.
> You test just the switch’s ON/OFF behavior (unit test) before connecting to full wiring (integration test).

---

## 🎓 **9️⃣ Hands-On Task for Team**

Ask every developer to:

1. Write 3 functions (e.g., calculator, login, email validator)
2. Write 3–5 tests each:

   - 2 normal
   - 1 edge case
   - 1 error case
   - 1 mock/stub version

3. Run `npm test -- --coverage`
4. Share coverage screenshot on Teams

---

## 🧾 **10️⃣ KT Summary Slide (You Can Present or Share)**

| Topic                    | Example                                 | Takeaway               |
| ------------------------ | --------------------------------------- | ---------------------- |
| **What is Unit Testing** | Test one function in isolation          | Catch bugs early       |
| **Edge Cases**           | `divide(10, 0)`                         | Test limits            |
| **Stubs & Mocks**        | Fake DB or API                          | Isolate logic          |
| **Avoid Side Effects**   | Don’t hit real DB                       | Faster, reliable tests |
| **Naming**               | `should return 0 for empty array`       | Clarity                |
| **Descriptive Messages** | “should throw error when invalid input” | Self-documenting       |
| **Coverage**             | 80–90% target                           | Quality indicator      |

---

### 🧠 Closing Line for KT

> “Unit tests are not just to catch bugs — they’re to prove our code behaves exactly as we expect, every time, even months later.”

---
