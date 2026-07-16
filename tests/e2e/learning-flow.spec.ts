import { expect, test } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const size of sizes) {
  test(`${size.name}: Trilhara learning path is accessible and persistent`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height });
    const errors: string[] = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text()));

    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    await expect(page).toHaveTitle("Trilhara | Aprender tem caminho");
    await expect(page.getByRole("link", { name: "Trilhara - início" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Aprender tem caminho." })).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Trilhara/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "Trilhara | Aprender tem caminho");
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/favicon.svg");
    await expect(page.getByText("SkillFlow", { exact: false })).toHaveCount(0);
    await expect(page.getByRole("list", { name: "Etapas do percurso" })).toBeVisible();
    await expect(page.getByRole("progressbar", { name: "Progresso do percurso" })).toHaveAttribute("aria-valuenow", "0");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    await expect(page.locator('a[href="#"]')).toHaveCount(0);

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();

    if (size.name === "mobile") {
      const menuButton = page.getByRole("button", { name: "Abrir menu" });
      await menuButton.click();
      await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("button", { name: "Abrir menu" })).toHaveAttribute("aria-expanded", "false");
    }

    await page.locator("#inicio").getByRole("button", { name: "Conhecer o percurso" }).click();
    await expect(page.getByRole("heading", { name: "Estrutura semântica com HTML" })).toBeVisible();
    await page.getByRole("button", { name: "Marcar etapa como concluída" }).click();
    await expect(page.getByRole("button", { name: "Etapa concluída" })).toBeVisible();
    await page.getByRole("button", { name: "Meu progresso" }).click();
    await expect(page.getByText("1 de 3 etapas")).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem("trilhara:demo-progress:v1"))).toBeTruthy();

    await page.reload();
    await page.getByRole("button", { name: "Ver meu progresso" }).click();
    await expect(page.getByText("1 de 3 etapas")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

    await page.getByText("Interfaces responsivas com CSS", { exact: true }).click();
    await page.getByRole("button", { name: "Marcar etapa como concluída" }).click();
    await page.getByRole("button", { name: "Meu progresso" }).click();
    await page.getByText("Interações previsíveis com JavaScript", { exact: true }).click();
    await page.getByRole("button", { name: "Marcar etapa como concluída" }).click();
    await page.getByRole("button", { name: "Meu progresso" }).click();
    await expect(page.getByRole("heading", { name: "Percurso concluído" })).toBeVisible();
    expect(errors).toEqual([]);
  });
}
