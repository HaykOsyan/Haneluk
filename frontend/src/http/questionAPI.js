import { $host, $authHost } from ".";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', {'name': category})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data.categories
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}

export const createDifficulty = async (difficulty) => {
    const {data} = await $authHost.post('api/difficulty',{'name': difficulty})
    return data
}

export const fetchDifficulties = async () => {
    const {data} = await $host.get('api/difficulty')
    return data
}

export const fetchOneDifficulty = async (id) => {
    const {data} = await $host.get('api/difficulty/' + id)
    return data
}

export const deleteDifficulty = async (id) => {
    const {data} = await $authHost.delete('api/difficulty/' + id)
    return data
}

export const fetchQuestions = async () => {
    const {data} = await $host.get('api/question')
    return data
}

export const fetchOneQuestion = async (id) => {
    const {data} = await $host.get('api/question/' + id)
    return data
}

export const createQuestion = async (title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3, categoryId, difficultyId) => {
    const {data} = await $authHost.post('api/question',{'title': title, 'answere':answere,'wrongAnswere1': wrongAnswere1, 'wrongAnswere2': wrongAnswere2,'wrongAnswere3' : wrongAnswere3, 'categoryId' : categoryId, 'difficultyId' :difficultyId})
    return data
}

export const updateQuestion = async (oneQuestion) => {
    const {data} = await $authHost.put('api/question/' + oneQuestion.id,{
        'title': oneQuestion.title,
        'answere':oneQuestion.answere,
        'wrongAnswere1': oneQuestion.wrongAnswere1,
        'wrongAnswere2': oneQuestion.wrongAnswere2,
        'wrongAnswere3' : oneQuestion.wrongAnswere3,
        'categoryId' : oneQuestion.categoryId,
        'difficultyId' :oneQuestion.difficultyId
    })
    return data
}

export const deleteQuestion = async (id) => {
    const {data} = await $authHost.delete('api/question/' + id)
    return data
}