import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Post() {
    const { id } = useParams();
    console.log(id);

    
    return (
        <div>
            Post page  {id}
        </div>
    );
}

export default Post;