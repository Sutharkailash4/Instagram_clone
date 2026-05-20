import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/story",
    withCredentials : true
})

export const createStoryApiCall = async ({
    story_image
}) => {

    const formData = new FormData()

    formData.append("story_image", story_image)

    const response = await api.post(
        "/create",
        formData
    )

    return response.data
}

export const getStoriesApiCall = async () => {

    const response = await api.get(
        "/get"
    )

    return response.data
}

export const deleteStoryApiCall = async ({
    storyId
}) => {

    const response = await api.delete(
        `/delete/${storyId}`
    )

    return response.data
}