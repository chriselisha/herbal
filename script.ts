import fs from 'fs';

const heroImagePath = './src/assets/images/hero_bottle_ingredients_1779006380635.png';
const herbsImagePath = './src/assets/images/herbs_close_up_1779006397446.png';

try {
  const heroBase64 = fs.readFileSync(heroImagePath).toString('base64');
  const herbsBase64 = fs.readFileSync(herbsImagePath).toString('base64');

  const output = `export const heroImage = 'data:image/png;base64,' + \`${heroBase64}\`;\nexport const herbsImage = 'data:image/png;base64,' + \`${herbsBase64}\`;\n`;

  fs.writeFileSync('./src/images.ts', output);
  console.log('Images converted to base64 successfully.');
} catch (e) {
  console.error(e);
}
