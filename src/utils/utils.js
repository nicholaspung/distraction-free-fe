function compareObjects(prev, curr) {
  const old = {};
  prev.forEach((k) => {
    if (!old[k.data.id]) {
      old[k.data.id] = true;
    }
  });
  return curr.map((k) => {
    const item = { ...k };
    if (old[item.data.id]) {
      item.old = true;
    }
    return item;
  });
}

export default {
  compareObjects,
};
