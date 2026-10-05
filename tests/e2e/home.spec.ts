import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Create Next App");
  await expect(page.getByText("To get started, edit the")).toBeVisible();
});