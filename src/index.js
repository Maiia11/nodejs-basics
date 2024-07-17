const message = 'Hello Node';

console.log(message);


import fs from 'fs/promises';

// Записуємо дані у файл 'output.txt'
(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();

(async () => {
  const data = 'Це дані, які ми додаємо до файлу.';
  try {
    await fs.appendFile('output.txt', data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();

// Отримуємо список файлів і каталогів у поточному каталозі
(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();
(async () => {
  const path = 'file.txt';
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();
