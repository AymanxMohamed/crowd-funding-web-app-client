import React, {useState} from 'react';
import Moment from 'moment';
import imageLink from "../../../common/utils/imageLink";
import CommentForm from "./CommentForm";


type Props = {
    comments: {}[],
    project_id: number
}
const ProjectCommentsList: React.FC<Props> = ({project_id,comments}): JSX.Element => {
    const [myComments,setMyComments] = useState(comments.reverse())
    function addComment(comment:any){
        setMyComments([comment,...myComments])
    }
  return (
      <>
        <div className="w-100 p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-left">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Comments</h5>
          </div>
          <div className="flow-root">
              <CommentForm project_id={project_id} commentAdded={addComment}/>
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {myComments.map((comment:any,index)=>
                  <li className="py-3 sm:py-4" key={index}>
                      <article>
                          <div className="flex items-center mb-4 space-x-4">
                              <img className="w-10 h-10 rounded-full" src={imageLink(comment.author_picture)}
                                   alt=""/>
                                  <div className="space-y-1 font-medium dark:text-white">
                                      <p>{comment.author_name} </p>
                                      <p className="block text-sm text-gray-500 dark:text-gray-400">{Moment(comment.created_at).format('d MMM YYYY')} </p>
                                  </div>
                          </div>

                          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{comment.content}</p>

                      </article>

                  </li>
              )}

            </ul>
          </div>
        </div>

      </>
  );
};

export default ProjectCommentsList;
