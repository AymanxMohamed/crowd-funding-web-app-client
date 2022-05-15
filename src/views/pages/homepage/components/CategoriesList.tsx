import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import {useEffect, useState} from "react";
import imageLink from "../../../common/utils/imageLink";
import {Link} from "react-router-dom";

export default function CategoriesList() {
    const [categories,setCategories] = useState([] as any)
    const projectsApi = useProjectsApi();
    useEffect(()=>{
        projectsApi.getCategories().then((data)=>setCategories(data))
    },[])
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
                <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Categories</h2>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                            <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                {categories.map((category:any) => (
                                    <Link
                                        key={category.name}
                                        to={"/projects/category/"+ category.id+"/"+category.name}
                                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                    >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={imageLink(category.image)} alt="" className="w-full h-full object-center object-cover" />
                    </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
