import { useState } from "react";
function LikeButton() { const [likes, setLikes] = useState(0);
const handleLike = () => { setLikes(likes + 1); };
return ( <div className="flex min-h-[260px] w-full flex-col justify-center rounded-[28px] bg-[#f4f4f4] px-8 py-10 font-mono"> 
<p className="text-lg text-gray-800">❤️ Likes: {likes}</p>
  <button
    onClick={handleLike}
    className="mt-4 w-fit rounded-xl border border-gray-300 bg-white px-6 py-2 text-base text-gray-800 transition hover:bg-gray-100 active:scale-95"
  >
    [ Like ❤️ ]
  </button>
</div>
); }
export default LikeButton;