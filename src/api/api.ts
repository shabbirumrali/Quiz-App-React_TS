export enum Difficulty { EASY="easy", MEDIUM="medium", HARD="hard" }
 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7070e854dfmsha33f4dcfafa5a04p16eae9jsnc5befb3a6e7e',
		'X-RapidAPI-Host': 'ases-quiz-api1.p.rapidapi.com'
	}
};

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = 'https://ases-quiz-api1.p.rapidapi.com/questions/random/20'
    const data = await (await fetch(endpoint, options)).json()
}