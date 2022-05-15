import React, {useState} from 'react';
import imageLink from "../../../common/utils/imageLink";
import CommentForm from "./CommentForm";
import classNames from "../../../common/utils/classNames";
import moment from "moment";
import {toast} from "react-toastify";
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import ReportModal from "./ReportModal";


type Props = {
    comments: {}[],
    project_id: number
}
const ProjectCommentsList: React.FC<Props> = ({project_id,comments}): JSX.Element => {
    const [myComments,setMyComments] = useState(comments.reverse())
    const [reportCommentOpen, setReportComment] = useState(false)
    const [commentId, setCommentId] = useState(0)
    const projectsApi = useProjectsApi();
    function addComment(comment:any){
        setMyComments([comment,...myComments])
    }
    function handleReport(id:any){
        setCommentId(id)
        setReportComment(true)
    }
    function reported(message:string|null){
        if(!message) {
            setReportComment(false)
            return;
        }
        if(message.length < 10) return toast('Report Reason is too short',{type:'error'});
        projectsApi.reportComment(commentId,message).then((res)=>{
            console.log(res)
            toast('Comment Reported',{type:'info'});
        })
        setReportComment(false)
    }
  return (
      <>
          <ReportModal  onClose={reported} isOpen={reportCommentOpen}/>
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
                          <div className="flex justify-between">
                              <h3 className="font-medium text-gray-900 text-xl">{comment.author_name}</h3>
                              <svg onClick={()=>{handleReport(comment.id)}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-700" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                              </svg>
                          </div>
                          <p><time dateTime={comment.created_at}>{moment(comment.created_at).format('dddd, MMMM Do YYYY hh:mm a')}</time></p>
                          <p className="mt-4 prose prose-sm max-w-none text-gray-500 text-xl">
                              {comment.content}
                          </p>
                      </div>


                  </div>
              ))}
              </div>
        </div>

      </>
  );
};

export default ProjectCommentsList;
