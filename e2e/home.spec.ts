import test, { expect } from "@playwright/test";

test('首页可以访问并显示站点名', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
        consoleErrors.push(msg.text());
    });

    const response = await page.goto('/');
    expect(response?.ok()).toBeTruthy()
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('itsxzh');
    expect(consoleErrors).toEqual([]);
});