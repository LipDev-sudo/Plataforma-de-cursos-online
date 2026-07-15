import { expect, test } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const size of sizes) {
  test(`${size.name}: lesson progress flow is usable and persistent`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height });
    const errors: string[] = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text()));

    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page).toHaveTitle("SkillFlow | Plataforma de Cursos Demo");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    await expect(page.locator('a[href="#"]')).toHaveCount(0);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();

    await page.getByRole("button", { name: "Iniciar aula demo" }).click();
    await expect(page.getByRole("heading", { name: "Estrutura de uma página HTML" })).toBeVisible();
    await page.getByRole("button", { name: "Marcar como concluída" }).click();
    await expect(page.getByRole("button", { name: "Aula concluída" })).toBeVisible();
    await page.getByRole("button", { name: "Área do aluno" }).click();
    await expect(page.getByText("1 de 3 aulas")).toBeVisible();

    await page.reload();
    await page.getByRole("button", { name: "Abrir painel do aluno" }).click();
    await expect(page.getByText("1 de 3 aulas")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

    await page.getByText("Estilos responsivos com CSS", { exact: true }).click();
    await page.getByRole("button", { name: "Marcar como concluída" }).click();
    await page.getByRole("button", { name: "Área do aluno" }).click();
    await page.getByText("Interação com JavaScript", { exact: true }).click();
    await page.getByRole("button", { name: "Marcar como concluída" }).click();
    await page.getByRole("button", { name: "Área do aluno" }).click();
    await expect(page.getByRole("heading", { name: "Curso concluído" })).toBeVisible();
    expect(errors).toEqual([]);
  });
}
