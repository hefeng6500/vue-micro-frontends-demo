function joinPath(path, prefix) {
  return (prefix + path).replace(/\/\//, "/");
}

function combinePath(prefix, moduleList) {
  const moduleListMap = moduleList.forEach((item) => joinPath(item.path, prefix));
  return moduleListMap;
}

export default function loadModules({
  Vue,
  router,
  moduleList,
  prefix,
  masterTemplate
}) {
  console.log(Vue);
  console.log(masterTemplate);
  if (prefix) {
    combinePath(prefix, moduleList);
  }
  router.addRoutes(moduleList);
}
