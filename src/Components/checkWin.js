export default function checkWin(mark) {

    if (mark[0] === mark[1] && mark[1] === mark[2]) {
        return mark[0];
    }
    if (mark[3] === mark[4] && mark[4] === mark[5]) {
        return mark[3];
    }
    if (mark[6] === mark[7] && mark[7] === mark[8]) {
        return mark[6];
    }
    if (mark[0] === mark[3] && mark[3] === mark[6]) {
        return mark[0];
    }
    if (mark[1] === mark[4] && mark[4] === mark[7]) {
        return mark[1];
    }
    if (mark[2] === mark[5] && mark[5] === mark[8]) {
        return mark[2];
    }
    if (mark[0] === mark[4] && mark[4] === mark[8]) {
        return mark[0];
    }
    if (mark[2] === mark[4] && mark[4] === mark[6]) {
        return mark[2];
    }
    return -1;
}