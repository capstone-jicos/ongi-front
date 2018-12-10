export function isFormBlank(payload) {
  let keys = Object.keys(payload);

  for (let i = 0; i < keys.length; i++) {
    if (
      payload[keys[i]] === null ||
      payload[keys[i]] === undefined ||
      payload[keys[i]].length === 0
    ) {
      alert("모든 칸들을 입력/선택해주세요!");
      return keys[i];
    }
  }

  return false;
}

export function checkValid(input) {
  if (input === null) {
    return undefined;
  } else if (input.length === 0) {
    return false;
  } else {
    return undefined;
  }
}
