function solution(num_list, n) {
    return Array.from({length : num_list.length / n}, (_) => num_list.splice(0,n));
}