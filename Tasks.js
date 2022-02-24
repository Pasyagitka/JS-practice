function longestSequence(string) {
    let array = string.split('');
    let maxSequenceLength = 1
    let maxSequenceStartIndex = 0
    for (let i = array.length-1, sequenceLength = 0; i > 0; i--) {
        sequenceLength++
        if (array[i] == array[i-1]) continue
        
        if (sequenceLength > maxSequenceLength) {
            maxSequenceLength = sequenceLength
            maxSequenceStartIndex = i
        }
        sequenceLength = 0  
    }
    return array.join('').substr(maxSequenceStartIndex, maxSequenceLength)
}
console.log('longestSequence', longestSequence(''))
console.log('longestSequence', longestSequence('boat'))
console.log('longestSequence', longestSequence('bbooooat'))


function lastWordLength(string) {
    let words = string.replace(/\./g, '').trim().replace(/\s{1,}/g, ' ').split(' ')     //removed ., replaced 1+ spaces
    return(words[words.length-1].length)
}
console.log('lastWordLength', lastWordLength('Hello World'))
console.log('lastWordLength', lastWordLength('bbooo    ferg  g g oaterfgefef       m lll  .k        '))


function symmetricDifference(arr1, arr2) {
    let array = arr1.concat(arr2)
    array.sort() 
    let unique = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array [i+1] || array[i] == array [i-1]) continue
        unique.push(array[i])
    }
    return unique
}

function symmetricDifferenceNew(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let arr1Filtered = arr1.filter(i => !set2.has(i));
    let arr2Filtered = arr2.filter(i => !set1.has(i));
    return arr1Filtered.concat(arr2Filtered)
}

console.log('symmetricDifference', symmetricDifferenceNew([1, 2, 4], [1, 2, 3]))
console.log('symmetricDifference', symmetricDifferenceNew([1, 2, 3], [4, 5, 6]))
console.log('symmetricDifference', symmetricDifferenceNew([8, 5, 9, 7, 0, 5, 77, 88], [3, 66, 9, 88, 5]))