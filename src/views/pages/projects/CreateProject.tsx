import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

import { DateRange } from 'react-date-range';
import Multiselect from 'multiselect-react-dropdown';

import useProjectsApi from '../../../services/hooks/useProjectsApi';
import { useAppSelector } from '../../../app/hooks';

const CreateProject: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.auth.user);

  const [activeStep, setActiveStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const projectsApi = useProjectsApi();

  useEffect(() => {
    projectsApi.getCategories().then((categories) => {
      setCategories(categories);
    });
    projectsApi.getTags().then((tags) => {
      setTags(tags);
    });
  }, []);

  const stepsTitles = ["Basic Data", "Date & Target", "Tags & Photos"];

  const onDateRangeSelected = (date: any) => {
    setSelectionRange({
      startDate: date.selection.startDate,
      endDate: date.selection.endDate,
      key: 'selection',
    })
  }

  const onTagsSelectionChange = (selectedList: any, removedItem: any) => {
    setSelectedTags(selectedList);
  }

  const moveToNextStep = (event: any) => {
    event.preventDefault();
    if (validateCurrentStep()) {
      if (activeStep < stepsTitles.length - 1)
        setActiveStep(activeStep + 1);
    }
  }

  const moveToPreviousStep = (event: any) => {
    event.preventDefault();
    if (validateCurrentStep()) {
      if (activeStep > 0)
        setActiveStep(activeStep - 1);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateCurrentStep()) {
      projectsApi
        .postProject(new FormData(event.target))
        .then((data) => {
          if (data) {
            if (data.success === true) {
              navigate("/my-projects/" + data.createdProject.id);
            } else if (data.success === false) {
              console.log("Errors", data.errors);
              toast.error("Data is not valid!");
              setFormErrors(data.errors);
            }
          }
        });
    }
  }

  const validateCurrentStep = () => {
    // TODO
    return true;
  }

  return (
    <section>
      <div>
        <div className="mb-2 text-2xl font-bold text-center text-gray-800 lg:text-2xl md:mb-6">
          Create a new project
        </div>

        <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
          Please fill in the details below to create a new project.
        </p>
      </div>

      {/* [START] Steps indicators */}
      <ul className="stepper" data-mdb-stepper="stepper">
        {stepsTitles.map((stepTitle, index) => (
          <li key={"stepli" + index}
            onClick={() => { setActiveStep(index) }}
            className={"stepper-step " + (activeStep === index ? "stepper-active" : "")}>
            <div className="stepper-head">
              <span className="stepper-head-icon" style={{ minWidth: 30 }}>{index + 1}</span>
              <span className="stepper-head-text">{stepTitle}</span>
            </div>
          </li>
        ))}
      </ul>
      {/* [END] Steps indicators */}

      <div className="text-gray-600">
        <div className="container flex flex-col flex-wrap px-5 mx-auto">

          <div className="flex flex-col w-full text-center">
            <div className="py-4 bg-white">
              <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
                {/* form - start */}
                <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto" encType="multipart/form-data">
                  <div>
                    <input type="text" name="owner" value={user?.id} hidden readOnly />
                    <input type="text" name="start_date" value={selectionRange.startDate.toLocaleDateString('en-CA')} hidden readOnly />
                    <input type="text" name="end_date" value={selectionRange.endDate.toLocaleDateString('en-CA')} hidden readOnly />

                    {/* [START] Step 1 */}
                    <div hidden={activeStep !== 0}>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="title" className="inline-flex mb-2 text-sm text-gray-800">
                          Project Title
                        </label>
                        <input
                          name="title"
                          type="text"
                          placeholder="Project title"
                          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                        />
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="detialsInput" className="inline-flex mb-2 text-sm text-gray-800">
                          Project Description
                        </label>
                        <textarea
                          id="detialsInput"
                          name="details"
                          placeholder="Project description and details"
                          className="w-full px-3 py-2 text-gray-800 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                        />
                      </div>

                      <div className="flex flex-col mb-2">
                        <label htmlFor="company" className="inline-flex mb-2 text-sm text-gray-800">
                          Project Category
                        </label>
                        <select name="category" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                          <option disabled>Select a category</option>
                          {categories.map((category: any, index) =>
                            <option key={`cat-no-${index}`} value={category.id}>{category.name}</option>
                          )}
                        </select>
                      </div>
                    </div>
                    {/* [END] Step 1 */}

                    {/* [START] Step 2 */}
                    <div hidden={activeStep !== 1}>
                      <div className="md:w-1/2 flex flex-col mb-4 mx-auto">
                        <label htmlFor="targetInput" className="inline-flex mb-2 text-sm text-gray-800">
                          Target
                        </label>
                        <input
                          id="targetInput"
                          type="number"
                          name="total_target"
                          className="w-full px-3 py-2 text-gray-800 rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                        />
                      </div>

                      <div className="md:w-1/2 flex flex-col mb-4 mx-auto">
                        <label className="inline-flex mb-2 text-sm text-gray-800">
                          Start Data &amp; End Date
                        </label>
                        <div>
                          <DateRange
                            ranges={[selectionRange]}
                            onChange={onDateRangeSelected}
                          />
                        </div>
                      </div>
                    </div>
                    {/* [END] Step 2 */}

                    {/* [START] Step 3 */}
                    <div hidden={activeStep !== 2}>
                      <div className="md:w-1/2 flex flex-col mb-4 mx-auto">
                        <label className="inline-flex mb-2 text-sm text-gray-800">
                          Project Tags
                        </label>
                        <Multiselect
                          options={tags}
                          selectedValues={selectedTags}
                          onSelect={onTagsSelectionChange}
                          onRemove={onTagsSelectionChange}
                          displayValue="name"
                        />
                      </div>

                      <div className="md:w-1/2 flex flex-col mb-4 mx-auto">
                        <label className="inline-flex mb-2 text-sm text-gray-800">
                          Upload Images
                        </label>
                        <div className="flex justify-center">
                          <div className="mb-3 w-96">
                            <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">Choose Project Images</label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              type="file" id="formFileMultiple" multiple />
                          </div>
                        </div>

                        {/* <!-- Custom scripts --> */}
                        <script type="text/javascript">
                          const checkbox = document.getElementById("flexCheckIndeterminate");
                          checkbox.indeterminate = true;
                        </script>
                      </div>
                    </div>
                    {/* [END] Step 3 */}

                  </div>

                  <hr className="my-3" />

                  <div className="flex items-center justify-between">
                    <button onClick={moveToPreviousStep} className="inline-flex items-center px-6 py-2 text-sm text-gray-800 rounded-lg shadow outline-none gap-x-1 hover:bg-gray-100">
                      <i className="fa fa-arrow-left"></i>
                      Back
                    </button>
                    {activeStep !== stepsTitles.length - 1 &&
                      <button onClick={moveToNextStep} className="px-6 py-2 text-sm text-white bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 ring-indigo-300">
                        Next
                      </button>
                    }
                    {activeStep === stepsTitles.length - 1 &&
                      <button type="submit" className="px-6 py-2 text-sm text-white bg-green-500 rounded-lg outline-none hover:bg-indigo-600 ring-indigo-300">
                        Create
                      </button>
                    }
                  </div>
                </form>
                {/* form - end */}
              </div>
            </div>
          </div>
        </div>
      </div >

    </section >
  );
};

export default CreateProject;
