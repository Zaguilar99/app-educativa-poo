const fs = require('fs');
const wwwroot = 'C:/inetpub/wwwroot';
const fileConfig = 'C:/inetpub/web.config';
const dist = './dist/prime-quality-control-frontend';
const path = require('path');
const execute = async () => {
  const filesDistx = await fs.readdirSync('./');
  console.log(filesDistx);

  const checkRoot = await fs.readdirSync(wwwroot);
  if (!checkRoot) {
    console.error('La ruta: C:/inetpub/wwwroot No Existe');
    return;
  }
  const filesDist = await fs.readdirSync(dist);
  const bathPromise = [];
  for (const archivo of filesDist) {
    const rutaOrigen = path.join(dist, archivo);
    const rutaDestino = path.join(wwwroot, archivo);
    bathPromise.push(fs.copyFileSync(rutaOrigen, rutaDestino));
  }
  await Promise.all([
    ...bathPromise,
    fs.copyFileSync(fileConfig, wwwroot + '/web.config'),
  ]);
};
execute();
