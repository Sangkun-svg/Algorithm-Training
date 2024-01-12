function solution(today, terms, privacies) {
    const termsHash = new Map();
    const [today_years,today_months,today_days] = today.split(".").map(Number);
    for(const term of terms) {
        const [type, duration] = term.split(" ");
        termsHash.set(type, duration);
    };
    
    const formattedPrivacies = privacies.map(privacy => {
        const [register_date, type] = privacy.split(" ");
        let [years,months,days] = register_date.split(".").map(Number);
        let newMonths = months + Number(termsHash.get(type));
        let newDays = days - 1;
        if(newMonths > 12){
            years = years + Math.floor(newMonths / 12);
            newMonths = newMonths % 12
        }
        if(newDays === 0){
            newMonths -= 1;
            newDays += 28;
        }
        if(newMonths === 0){
            years -= 1;
            newMonths += 12;
        }

        return [years, newMonths, newDays]
    });
    return formattedPrivacies.map(([years,months,days],index) => {
        if(today_years > years) return index + 1;
        if(today_years >= years && today_months > months) return index + 1;
        if(today_years >= years && today_months >= months && today_days > days) return index + 1;
    }).filter(el => !isNaN(el));
}

