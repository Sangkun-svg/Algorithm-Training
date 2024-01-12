function solution(today, terms, privacies) {
    const result = [];
    const termsHash = {};
    const [today_years,today_months,today_days] = today.split(".").map(Number);
    const totalDay = today_years * 12 * 28 + today_months * 28 + today_days;
    
    for(const term of terms) {
        const [type, duration] = term.split(" ");
        termsHash[type] = Number(duration);
    };
    return privacies.map((privacy,idx) => {
        const [register_date, type] = privacy.split(" ");
        let [years,months,days] = register_date.split(".").map(Number);
        const privacyTotalDay = years * 12 * 28 + (months + termsHash[type]) * 28 + days;
        if(privacyTotalDay <= totalDay) return (idx + 1)
    }).filter(el => !!el);
}

