import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/comments",
    withCredentials : true
})

export const createCommentApiCall = async ({
    postId,
    comment
}) => {

    const response = await api.post(
        `/create/${postId}`,
        {
            comment
        }
    )

    return response.data
}

export const getCommentsApiCall = async ({
    postId
}) => {

    const response = await api.get(
        `/get/${postId}`
    )

    return response.data
}

export const deleteCommentApiCall = async ({
    commentId
}) => {

    const response = await api.delete(
        `/delete/${commentId}`
    )

    return response.data
}