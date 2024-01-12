function solution(names) {
    return names.map((name,idx) => idx * 5 < names.length ? names[idx * 5] : null).filter(el => !!el);
}