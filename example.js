// filter certain condition of string
const string = 'https://vivian.org';
const filterAddress = (string) => {
    if(string.includes('https')) {
        console.log('It is a https address!')
    } else {
        console.log('It is not a https address')
    }
}

// filter certain starting condition
const getUserProductSearchStatus = str => str.startsWith('0910') && str.length === 10;
