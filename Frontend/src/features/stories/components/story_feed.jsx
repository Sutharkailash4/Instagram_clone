import React from "react";

import useStories from "../hooks/useStories";

const Story_Feed = () => {

    const {
        stories,
        loading
    } = useStories()

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="story-feed-container">

            {
                stories.map((story)=>(
                    <div
                        key={story._id}
                        className="story-card"
                    >

                        <img
                            src={story.story_image}
                            alt="story"
                            width={100}
                        />

                        <h4>
                            {story.user?.username}
                        </h4>

                    </div>
                ))
            }

        </div>
    )
}

export default Story_Feed