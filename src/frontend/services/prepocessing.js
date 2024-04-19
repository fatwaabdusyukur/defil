import { defaultDictionary, Stemmer } from "ts-sastrawi";
import { stopwords, slangwords, formalwords } from "./prepocessing-dict.js";

class Prepocessing {
    removeSymbol(text) {
        const regex = /@\S+|https?:\S+|http?:\S|[^A-Za-z0-9]+/g;
        return text.replace(regex, " ").trim();
    }

    removeStopWord(text){
        const stopword = stopwords();
        const words = text.split(/\s+/);
        const cleanwords = words.filter((word) => !stopword.includes(word));
        return cleanwords.join(" ");
    }

    removeSlangWord(text) {
        const slangword = slangwords();
        const formalword = formalwords();
        let words = text.toLowerCase().split(/\s+/);

        words = words.map(word => {
            if (word.endsWith('2')) {
                const wordBefore = word.substring(0, word.length - 1);
                word = `${wordBefore} ${wordBefore}`;
            }
            return word;
        });

        const result = words.map(word => {
            slangword.forEach((slang, index) => {
                if (word === slang) {
                    word = formalword[index];
                }
            });
            return word;
        })

        return result.join(" ");
    }

    changeStemWord(text){
        const dictionary = defaultDictionary();
        const stemmer = new Stemmer(dictionary);
        return text.split(" ").map((word) => stemmer.stem(word)).join(" ");
    }

    prep(text){
        text = this.removeSlangWord(text);
        text = this.removeStopWord(text);
        text = this.changeStemWord(text);
        text = this.removeSymbol(text);
        return text;
    }
}

export const prep = (text) => {
    const Prep = new Prepocessing;
    return Prep.prep(text);
}