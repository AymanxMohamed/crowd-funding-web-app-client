import React, {useState} from 'react';
import imageLink from "../../../common/utils/imageLink";
import CommentForm from "./CommentForm";
import classNames from "../../../common/utils/classNames";
import ReportCommentModal from "./ReportCommentModal";


type Props = {
    comments: {}[],
    project_id: number
}
const ProjectCommentsList: React.FC<Props> = ({project_id,comments}): JSX.Element => {
    const [myComments,setMyComments] = useState(comments.reverse())
    const [reportCommentOpen, setReportComment] = useState(false)
    const [commentId, setCommentId] = useState(0)
    function addComment(comment:any){
        setMyComments([comment,...myComments])
    }
  return (
      <>
          <ReportCommentModal  onClose={()=>setReportComment(false) } isOpen={reportCommentOpen} comment_id={commentId}/>
        <div className="w-100 p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-left">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Comments</h5>
          </div>
          <div className="flow-root">
              <CommentForm project_id={project_id} commentAdded={addComment}/>
              {myComments.map((comment:any, index) => (
                  <div key={index} className="flex text-sm text-gray-500 space-x-4 w-full">
                      <div className="flex-none py-10">
                          <img src={imageLink(comment.author_picture,'user.png')} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                      </div>
                      <div className={classNames(index === 0 ? '' : 'border-t border-gray-200', 'py-10 w-full')}>
                          <h3 className="font-medium text-gray-900 text-xl">{comment.author_name}</h3>
                          <p><time dateTime={comment.datetime}>{comment.date}</time></p>
                          <p className="mt-4 prose prose-sm max-w-none text-gray-500 text-xl">
                              {comment.content}
                          </p>
                          <button onClick={()=>{
                              setCommentId(comment.id)
                              setReportComment(true)
                          }}>report</button>
                      </div>
                  </div>
              ))}
              </div>
        </div>

      </>
  );
};

export default ProjectCommentsList;
