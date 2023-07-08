export const exerciseOptions = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '1051f97f75mshfe38f26fe901d56p1070edjsnf6018a342e9f'
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {

    }
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}