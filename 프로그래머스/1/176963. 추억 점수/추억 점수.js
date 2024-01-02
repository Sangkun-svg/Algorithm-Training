function solution(name, yearning, photos) {
    const map = new Map();
    name.forEach((n,idx) => {
        map.set(n, yearning[idx]);
    })
    return photos.map(photo => {
        return photo.map(element => map.get(element) ? map.get(element) : 0)
            .reduce((a,b) => a + b);
    })
}