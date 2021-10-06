import Image from 'next/image'
import ActionBar from "./action-bar";

const NewsItem = ({ newsItem }) => {
  return <div className="flex-1 bg-gray-800 text-white rounded-lg">
    <h2 className="font-bold">{newsItem.group}</h2>
    <p>{newsItem.userName}</p>
    <p>{newsItem.postedDate}</p>
    <p>{newsItem.body}</p>
    
    {newsItem.image && <div><Image src={`/${newsItem.image}`}
      width="240"
      height="240"
      alt="Picture of the author" />
    </div>}

    <ActionBar />
 
    <h3 className="text-lg my-5">Comments</h3>

    <div className="flex flex-col gap-2">
      {(newsItem.comments || []).map((comment, i) =>
        <p key={i} className="flex-1 bg-gray-700 w-8/12 rounded-lg">{comment}</p>
      )}
    </div>
  </div>;
};

export default NewsItem;