function solution(wallpaper) {
    const lux = wallpaper.findIndex(el => el.includes("#"));
    const luy = Math.min(
        ...wallpaper.map((el) => el.indexOf("#") === -1 ? null : el.indexOf("#")).filter((el) => el !== null));
    const rdx = Math.max(...wallpaper.map((el,index) => el.includes("#") ? index + 1 : null));
    let rdy = 0;
    wallpaper.forEach(el => {
        const hashIndex = Math.max(...el.split("").map((str,index) => str === "#" ? index + 1 : 0));
        if(hashIndex > rdy) rdy = hashIndex;
    })
    return [lux,luy,rdx,rdy]    
}