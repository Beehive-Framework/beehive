import { resolve } from 'path';

function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}

export function createAlias(alias) {
  return alias.map((item) => {
    const [alia, src] = item;
    return {
      find: new RegExp(alia),
      replacement: pathResolve(src) + '/',
    };
  });
}
