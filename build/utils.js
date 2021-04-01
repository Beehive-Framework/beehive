import path from 'path';

export function wrapperEnv(envConf) {
  const ret = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

export function getRootPath(...dir) {
  return path.resolve(process.cwd(), ...dir);
}
