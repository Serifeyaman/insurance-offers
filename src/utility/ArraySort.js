export const sortedArrayByPrice = (arr) => {
    //uzcuzdan pahalıya
    const sortedArr = [].concat(arr)
        .sort((a, b) => a.Cash > b.Cash ? 1 : -1)
    return sortedArr;
}