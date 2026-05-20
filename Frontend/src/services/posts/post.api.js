import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/posts",
    withCredentials : true
})

export const createPostApiCall = async ({
    caption,
    post_image
}) => {

    const formData = new FormData()

    formData.append("caption", caption)

    formData.append("post_image", post_image)

    const response = await api.post(
        "/createPost",
        formData
    )

    return response.data
}

export const getPostsApiCall = async () => {

    const response = await api.get(
        "/getPost"
    )

    return response.data
}

export const getPostDetailsApiCall = async ({
    postId
}) => {

    const response = await api.get(
        `/getPostDetails/${postId}`
    )

    return response.data
}

export const deletePostApiCall = async ({
    postId
}) => {

    const response = await api.delete(
        `/delete/${postId}`
    )

    return response.data
}