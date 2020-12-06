
const findThirdMax = function(arr) {
    let f_m = null;
    let s_m = null;
    let t_m = null;

    for (d of arr) {

        if (d === f_m || d === s_m || d === t_m) {
            continue;
        }

        if (d > f_m || f_m === null) {
            t_m = s_m;
            s_m = f_m;
            f_m = d;
        } else if (d > s_m || s_m === null){
            t_m = s_m;
            s_m = d;
        } else if (d > t_m || t_m === null){
            t_m = d;
        }

    }

    return t_m !== null ? t_m : f_m;
}