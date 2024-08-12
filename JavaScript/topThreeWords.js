function topThreeWords(text) {
    text = text.toLowerCase();
    let words = text.match(/[a-z]+[a-z']*/g);

    if(!words){
        return [];
    }

    let frequencyMap = {};

    words.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });

    let sortedWords = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    return sortedWords.slice(0, 3);
}