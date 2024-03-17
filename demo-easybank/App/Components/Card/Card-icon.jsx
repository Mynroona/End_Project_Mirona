
export default function CardIcon({title, body, imageUrl, author}) {


    return (        
            <div>
                <div>{title}</div>
                <div>{body}</div>
                <div>{imageUrl}</div>
                <div>{author}</div>
            </div>
        
    );
}