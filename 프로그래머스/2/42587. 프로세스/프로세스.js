function solution(priorities, location, result = []) {
    const queue = priorities.map((v, idx) => {
        return {idx, priority: v};
    });
    while (queue.length > 0) {
        const currentProcess = queue.shift();
        const isHighestPriority = queue.every(val => val.priority <= currentProcess.priority);
        if (isHighestPriority) {
            result.push(currentProcess);
        } else {
            queue.push(currentProcess);
        }
    }
    return result.findIndex(({idx}) => idx === location) + 1;
}
