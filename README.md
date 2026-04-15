# 🧪 Playwright E-commerce Test Automation

This project contains an end-to-end automation test using **Playwright** for an e-commerce website.

---

## 🚀 Project Overview

This test automates a complete user journey on the demo webshop:

1. Open homepage
2. Navigate to login page
3. Perform user login
4. Search and select a product
5. Add product to cart
6. Capture screenshots at each step

---

## 🛠️ Tech Stack

* **Playwright** (Test Automation Framework)
* **TypeScript**
* **Node.js**

---

## 📂 Project Structure

```
project/
│
├── tests/
│   └── example.spec.ts
│
├── screenshots/
│   └── (Auto-generated screenshots)
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test

```bash
npx playwright test tests/example.spec.ts
```

### Run in headed mode (UI visible)

```bash
npx playwright test --headed
```

---

## 📸 Screenshots

* Screenshots are captured automatically at each step
* Stored inside the `screenshots/` folder
* File names include timestamps for uniqueness

---

## ✨ Key Features

* ✅ End-to-end automation flow
* ✅ UI element highlighting (Blue border effect)
* ✅ Screenshot capture at every step
* ✅ Role-based selectors (recommended Playwright practice)
* ✅ Clean and readable test structure

---

## 🎯 Test Scenario Covered

* Login functionality
* Product selection
* Add to cart functionality

---

## ⚠️ Notes

* Ensure valid login credentials are used
* Internet connection required for test execution
* Avoid using excessive `waitForTimeout` in real projects (use smart waits instead)

---

## 📌 Best Practices (Recommended Improvements)

* Replace static waits with:

  ```ts
  await expect(locator).toBeVisible();
  ```
* Use Page Object Model (POM) for scalability
* Store credentials in environment variables
* Add assertions after each step

---

## 👨‍💻 Author

Mehul

---

## 📄 License

This project is for learning and testing purposes.
