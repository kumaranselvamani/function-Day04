/**  a.Print odd numbers in an array -  anonymous function ****************************************************/

let oddArr = [];
const printOddNumbers =  function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("odd numbers of an given array is "+oddArr);

/**  a.Print odd numbers in an array - IIFE ********************************************************************/

let oddArray = [];
(function(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddArray.push(numbers[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("odd numbers of an given array is "+oddArray);

/**  b.Convert all the strings to title caps in a string array - anonymous function ********************************************************************/


const titleCaps = function (arr) {
    return arr.map(function(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
}
const letters = ["hello world", "good morning", "have a nice day"];
const titledWords = titleCaps(letters);
console.log("Given strings converted inti tittle case => "+titledWords);

/**  b.Convert all the strings to title caps in a string array - IIFE ********************************************************************/

(function() {
    function title(arr) {
        return arr.map(function(str) {
            return str.split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        });
    }
    const words = ["hello world", "good morning", "have a nice day"];
    const titledWord = title(words);
    console.log("Given strings converted inti tittle case => "+titledWord);
})();


/**  c. sum of all numbers in an array - anonymous function ********************************************************************/

const numbers = [1, 2, 3, 4, 5];

const sum = function(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
};

const result = sum(numbers);
console.log("Sum of all numbers:", result);


/**  c. sum of all numbers in an array - IIFE ********************************************************************/

(function() {
    function sumArr(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    const num = [1, 2, 3, 4, 5];
    const sum = sumArr(num);
    console.log("Sum of all numbers:", sum);
})();


/**  d. Return all the prime numbers in an array - anonymous function ********************************************************************/

const numbersd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = numbersd.filter(function(numd) {
    if (numd <= 1) return false;
    if (numd === 2) return true;
    if (numd % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(numd); i += 2) {
        if (numd % i === 0) {
            return false;
        }
    }
    return true;
});

console.log("Prime numbers:", primes);



/**  d. Return all the prime numbers in an array - IIEF ********************************************************************/

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primesd = (function(arr) {
    return arr.filter(function(numberd) {
        if (numberd <= 1) return false;
        if (numberd === 2) return true;
        if (numberd % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(numberd); i += 2) {
            if (numberd % i === 0) {
                return false;
            }
        }
        return true;
    });
})(numbers1);

console.log("Prime numbers:", primesd);

/** e. Return all the palindromes in an array - anonymous function  ****************************************************/

const wordse = ["level", "hello", "radar", "world", "madam"];

const palindromese = wordse.filter(function(worde) {
    const len = worde.length;
    for (let i = 0; i < len / 2; i++) {
        if (worde[i] !== worde[len - 1 - i]) {
            return false;
        }
    }
    return true;
});

console.log("Palindromes:", palindromese);

/**  e. Return all the palindromes in an array - IIEF ********************************************************************/

const words = ["level", "hello", "radar", "world", "madam"];

const palindromes = (function(arr) {
    return arr.filter(function(word) {
        const len = word.length;
        for (let i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                return false;
            }
        }
        return true;
    });
})(words);

console.log("Palindromes:", palindromes);

/** f. Return median of two sorted arrays of the same size. - anonymous function  ****************************************************/

const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log("Median:", median);

/** f. Return median of two sorted arrays of the same size. - IIFE  ****************************************************/

const num1 = [1, 3, 5];
const num2 = [2, 4, 6];

const medianf = (function(num1, num2) {
    const mergedArray = [...num1, ...num2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
})(num1, num2);

console.log("Median:", medianf);


/** g. Remove duplicates from an array- anonymous function ************************************************/

const array = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(array);

console.log("Unique array:", uniqueArray);

/** g. Remove duplicates from an array- IIFE ***************************************************************/

const arrayg = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArrayg = (function(arr) {
    const unique = [];
    arr.forEach(function(item) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    });
    return unique;
})(array);

console.log("Unique array:", uniqueArrayg);

/** h. Rotate an array by k times- anonymous function **********************************************/


const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n; // To handle cases where k is greater than array length

    if (k === 0) {
        return arr; // No rotation needed
    }

    const rotatedPart = arr.slice(n - k);
    const remainingPart = arr.slice(0, n - k);

    return rotatedPart.concat(remainingPart);
};
const arrayh = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateArray(arrayh, rotations);
console.log("Rotated array:", rotatedArray);

/** h. Rotate an array by k times - IIFE **********************************************/

const arra = [1, 2, 3, 4, 5];
const rotationsh = 2;

const rotatedArrayh = (function(arr, k) {
    const n = arr.length;
    k = k % n; // To handle cases where k is greater than array length

    if (k === 0) {
        return arr; // No rotation needed
    }

    const rotatedPart = arr.slice(n - k);
    const remainingPart = arr.slice(0, n - k);

    return rotatedPart.concat(remainingPart);
})(arra, rotationsh);

console.log("Rotated array:", rotatedArrayh);
