import React, {useState} from 'react';
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import {toast} from "react-toastify";
import useAuthSlice from "../../../../services/hooks/useAuthSlice";
import {Link} from "react-router-dom";

const CommentForm: React.FC<any> = ({project_id,commentAdded}): JSX.Element => {
  const [comment, setComment] = useState("")
  const projectsApi = useProjectsApi();
  const {user} = useAuthSlice();
  const handleSubmit = (event:any)=> {
    event.preventDefault()
    projectsApi.addComment(project_id,comment).then((response)=>{
      commentAdded(response.data)
      toast("Comment Added Successfully",{type:'success'})
    })
  }
  if(!user)
    return <h2>You Must <Link to="/auth/login">Login</Link> to Add a Comment</h2>
  return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows={4} value={comment} onChange={(e)=>setComment(e.target.value)}
                      className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write a comment..." required></textarea>
          </div>
          <div className="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
            <button type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              Post comment
            </button>
          </div>
        </div>
      </form>

  );
};

export default CommentForm;
