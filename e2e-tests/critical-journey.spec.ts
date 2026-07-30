import { test, expect } from "@playwright/test";

test.describe("Critical User Journey - Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the landing page and show main components", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Spotless Cleanliness/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Explore Services/i })).toBeVisible();
  });

  test("should switch language to Spanish and back to English", async ({ page }) => {
    // Check initial English content
    await expect(page.getByRole("heading", { name: /Spotless Cleanliness/i })).toBeVisible();
    
    // Switch to Spanish using aria-label
    await page.getByLabel("Toggle language").click();
    
    // Check Spanish content
    await expect(page.getByRole("heading", { name: /Limpieza Impecable/i })).toBeVisible();
    
    // Switch back to English
    await page.getByLabel("Toggle language").click();
    
    // Check English content again
    await expect(page.getByRole("heading", { name: /Spotless Cleanliness/i })).toBeVisible();
  });

  test("should navigate to Q&A section and submit a question", async ({ page }) => {
    // Click "Ask a Question" in Hero
    await page.getByRole("button", { name: /Ask Q&A/i }).click();
    
    // Wait for Q&A section to be in view
    await expect(page.getByRole("heading", { name: "Frequently Asked Questions", exact: true })).toBeInViewport();

    // Fill the form
    const testName = "Test User";
    const testQuestion = "Is this a test question for Playwright?";
    
    await page.getByPlaceholder("e.g. Alex M.").fill(testName);
    await page.getByPlaceholder("Ask about our services, products, or scheduling...").fill(testQuestion);
    
    // Wait for the button to be enabled (Turnstile is using test key)
    await expect(page.getByRole("button", { name: /Post Question/i })).toBeEnabled({ timeout: 10000 });

    // Submit the form
    await page.getByRole("button", { name: /Post Question/i }).click();

    // Verify success message (toast)
    await expect(page.getByText(/Question submitted!/i)).toBeVisible();

    // Verify the question appears in the list
    await expect(page.getByText(testQuestion)).toBeVisible();
  });

  test("should handle special HTML/XSS characters in question input safely", async ({ page }) => {
    await page.getByRole("button", { name: /Ask Q&A/i }).click();
    
    const xssPayload = "<script>alert('xss')</script> How are pet safe products tested?";
    
    await page.getByPlaceholder("e.g. Alex M.").fill("Security Tester");
    await page.getByPlaceholder("Ask about our services, products, or scheduling...").fill(xssPayload);
    
    await expect(page.getByRole("button", { name: /Post Question/i })).toBeEnabled({ timeout: 10000 });
    await page.getByRole("button", { name: /Post Question/i }).click();

    await expect(page.getByText(/Question submitted!/i)).toBeVisible();
    await expect(page.getByText(xssPayload)).toBeVisible();
  });

  test("should navigate to services section", async ({ page }) => {
    await page.getByRole("button", { name: /Explore Services/i }).click();
    await expect(page.getByRole("heading", { name: "Our Services", exact: true })).toBeInViewport();
  });
});