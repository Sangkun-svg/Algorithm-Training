def solution(datas, ext, val_ext, sort_by):
    answer = []
    extIndex = {"code": 0, "date": 1, "maximum": 2, "remain": 3};
    for data in datas:
        if data[extIndex[ext]] < val_ext:
            answer.append(data)
    return sorted(answer, key=lambda answer: answer[extIndex[sort_by]])
