import { bahasa, latin } from "./language-dict";
import { franc } from "franc";

const indonesia = new Set(bahasa());
const latinDict = latin();

export function detectIndonesianLang(text){
    let result = { status: false, msg: "" };

    if (latinDict.includes(franc(text))) {
        const words = text.toLowerCase().split(/\W+/);
        let countWord = 0;
        words.forEach(word => {
            if (indonesia.has(word)) countWord++;
        });

        const percentage = (countWord / words.length) * 100;

        if (percentage > 90) result.status = true;
        else if (percentage > 50) result.status = true;
        else {
            result.status = false;
            result.msg = "Kalimat ini kemungkinan besar bukan dalam Bahasa Indonesia";
        }
    } else {
        result.status = false;
        result.msg = "Kalimat ini tidak ditulis dalam huruf latin";
    }

    return result;
}