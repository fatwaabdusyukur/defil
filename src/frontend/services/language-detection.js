import { bahasa, latin } from "./language-dict";
import { prep } from "./prepocessing";
import { franc } from "franc";

const indonesia = new Set(bahasa());
const latinDict = latin();

export function detectIndonesianLang(text){
    let result = { status: false, msg: "" };
    const cleanText = prep(text);

    if (latinDict.includes(franc(cleanText))) {
        const words = cleanText.split(/\W+/);
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