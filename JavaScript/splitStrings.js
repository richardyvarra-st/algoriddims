function solution(str){
  const matches = str.match(/.{1,2}/g);
  if (matches === null) {
	return [];
  }
  return matches.map(pair => pair.length === 1 ? pair + '_' : pair);
}