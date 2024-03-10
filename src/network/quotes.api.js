const API_KEY = 'CT0kxWxNue0s+73wjbFhdA==ye3XVaO4mOT4IHH7'

export const fetchQuotesAPI = (category) => {
    let url = 'https://api.api-ninjas.com/v1/quotes'
    if (category) url = `${url}?category=${category}`

    return {
        url: url,
        data: {
            method: 'GET',
            headers: { 'X-Api-Key': API_KEY },
            contentType: 'application/json'
        }
    }
}
