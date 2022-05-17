import React, {Fragment, useEffect, useState} from 'react'
import {Tab} from '@headlessui/react'
import moment from "moment";
import imageLink from "../../common/utils/imageLink";
import Rating from "../../common/SharedComponents/Rating";
import classNames from "../../common/utils/classNames";
import {Link, useNavigate, useParams} from "react-router-dom";
import ProjectCommentsList from "./components/ProjectCommentsList";
import ProjectDonationsList from "./components/ProjectDonationsList";
import useProjectsApi from "../../../services/hooks/useProjectsApi";
import {toast} from "react-toastify";
import Loading from "../../common/SharedComponents/Loading";
import DonateModal from "./components/DonateModal";
import moneyFormat from "../../common/utils/moneyFormat";
import ImageGallery from "react-image-gallery";
import ReportModal from "./components/ReportModal";
import useAuthSlice from "../../../services/hooks/useAuthSlice";
import DeleteModal from "./components/DeleteModal";


const ProjectView: React.FC<any> = (): JSX.Element => {
    const [donateOpen, setDonateOpen] = useState(false)
    const [reportOpen, setReportOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const {user} = useAuthSlice();
    const [imagesList, setImagesList] = useState<[{ original: string, thumbnail: string }] | []>([]);
    const {id} = useParams()
    const [project, setProject] = useState({} as any)
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const projectAPI = useProjectsApi();
    useEffect(() => {
        // @ts-ignore
        projectAPI.getProject(parseInt(id)).then(data => {
                setProject(data);
                loadSliderImages(data.images);
                setLoaded(true);
            }
        ).catch(() => {
            toast('Project Not Found', {type: 'error'});
            navigate("/projects/all")
        });
    }, [id])

    const loadSliderImages = (images: any) => {
        setImagesList([]);
        images.map((img: any) => {
            // @ts-ignore
            setImagesList(list => [...list, {
                original: imageLink(img.image_name),
                thumbnail: imageLink(img.image_name)
            }])
        })
    }

    function reported(message: string | null) {
        if (!message) {
            setReportOpen(false)
            return;
        }
        if (message.length < 10) return toast('Report Reason is too short', {type: 'error'});
        projectAPI.reportProject(project.id, message).then((res) => {
            console.log(res)
            toast('Project Reported', {type: 'info'});
        })
        setReportOpen(false)
    }

    function deleted() {
        projectAPI.removeProject(project.id).then((res) => {
            toast('Project Deleted', {type: 'info'});
        }).catch((error)=>{
            toast(error.response.data.message, {type: 'error'});
        })
        setDeleteOpen(false)
    }

    if (!loaded)
        return <Loading/>
    return (
        <div className="bg-white text-left">
            <ReportModal onClose={reported} isOpen={reportOpen}/>
            <DeleteModal onClose={()=>setDeleteOpen(false)} onConfirm={deleted} isOpen={deleteOpen}/>
            <div className="mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
                {/* Product */}
                <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product image */}
                    <div className="lg:row-end-1 lg:col-span-4">
                        <div className=" rounded-lg justify-center overflow-hidden">
                            <ImageGallery items={imagesList} showFullscreenButton={false} autoPlay={true}
                                          showPlayButton={false}/>

                        </div>
                    </div>

                    {/* Product details */}
                    <div
                        className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                        <div className="flex flex-col-reverse">
                            <div className="mt-4">
                                <div className="flex justify-between items-center">
                                    <h1 className=" font-extrabold tracking-tight text-gray-900 sm:text-3xl">{project.title}</h1>
                                    <svg onClick={() => setReportOpen(true)} xmlns="http://www.w3.org/2000/svg"
                                         className="h-8 w-8 cursor-pointer text-red-500 hover:text-red-700"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h2 id="information-heading" className="sr-only">
                                    Project
                                </h2>
                                <p className="text-sm text-gray-500 mt-2">
                                    Ends: {moment(project.end_date).format("DD MMM YYYY")}
                                </p>
                                <p>{project.details}</p>
                                <div className="mt-8 overflow-hidden">
                                    <dl className="-mx-8 -mt-8 flex flex-wrap">
                                        <div className="flex flex-col px-8 pt-8">
                                            <dt className="order-2 text-base font-medium text-gray-500">Raised</dt>
                                            <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">{moneyFormat(project.total_donations)}</dd>
                                        </div>
                                        <div className="flex flex-col px-8 pt-8">
                                            <dt className="order-2 text-base font-medium text-gray-500">Target</dt>
                                            <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">{moneyFormat(project.total_target)}</dd>
                                        </div>
                                        <div className="flex flex-col px-8 pt-8">
                                            <dt className="order-2 text-base font-medium text-gray-500">Progress</dt>
                                            <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">{Math.round((project.total_donations / project.total_target) * 100)}%</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div>
                                <h3 className="sr-only">Reviews</h3>
                                <Rating rate={project.average_ratings}></Rating>
                                <p className="sr-only">{project.average_ratings} out of 5 stars</p>
                            </div>
                        </div>

                        <p className="text-gray-500 mt-6">{project.description}</p>
                        <DonateModal onClose={() => setDonateOpen(false)} isOpen={donateOpen}
                                     project_id={project.id}></DonateModal>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            {!user && <h2>Please Login to Donate or Report</h2>}
                            {(user && user.id !== project.owner.id) &&
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setDonateOpen(true)}
                                        className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                    >
                                        Donate
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setReportOpen(true)}
                                        className="w-full bg-red-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-400 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                                    >
                                        Report
                                    </button>
                                </>
                            }

                            {(user && user.id === project.owner.id)&&<button
                                type="button"
                                onClick={()=>setDeleteOpen(true)}
                                className="w-full col-span-full bg-red-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-400 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                            >
                                Delete
                            </button>}
                        </div>

                        <div className="border-t border-gray-200 mt-10 pt-10">
                            <div className="mt-4 prose prose-sm text-gray-500">
                                {project.tags.map((tag: { id: number, name: string }) =>
                                    <Link to="/projects/tag/1" key={tag.id}
                                          className="no-underline inline-block bg-gray-200 hover:bg-gray-300  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #{tag.name}
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 mt-10 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">User</h3>
                            <div className="mt-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                                         src={imageLink(project.owner.profile_picture)} alt=""/>
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                        <h3>{project.owner.first_name + " " + project.owner.last_name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                        <Tab.Group as="div">
                            <div className="border-b border-gray-200">
                                <Tab.List className="-mb-px flex space-x-8">
                                    <Tab
                                        className={({selected}) =>
                                            classNames(
                                                selected
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                            )
                                        }
                                    >
                                        Comments
                                    </Tab>

                                    <Tab
                                        className={({selected}) =>
                                            classNames(
                                                selected
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                            )
                                        }
                                    >
                                        Donations
                                    </Tab>
                                </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                                <Tab.Panel className="-mb-10">
                                    <h3 className="sr-only">Comments</h3>
                                    <ProjectCommentsList project_id={project.id} comments={project.comments}/>

                                </Tab.Panel>

                                <Tab.Panel className="pt-10">
                                    <h3 className="sr-only">Donations</h3>
                                    <ProjectDonationsList donations={project.donations}/>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectView;
