// interface Article {
// title:string; 
// body:string;
// imageUrl:string;
// author:string;
// }


export default function CardImage({title, body, imageUrl, author}) {


    return (        
            <div>
                <div>{title}</div>
                <div>{body}</div>
                <div>{imageUrl}</div>
                <div>{author}</div>
            </div>
        
    );
}