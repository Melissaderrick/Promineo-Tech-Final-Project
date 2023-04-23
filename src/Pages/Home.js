import "./Home.css";
import { useState } from "react";

function Home() {
  const [workExperienceList, setWorkExperienceList] = useState([    {      company: "ABC Company",      jobTitle: "Front-end Developer",      duration: "Jan 2021 - Present",    },    {      company: "XYZ Corporation",      jobTitle: "UI Designer",      duration: "Oct 2019 - Dec 2020",    },  ]);
  const [newWorkExperience, setNewWorkExperience] = useState({
    company: "",
    jobTitle: "",
    duration: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingIndex, setUpdatingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewWorkExperience((prevWorkExperience) => ({
      ...prevWorkExperience,
      [name]: value,
    }));
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceList((prevWorkExperienceList) => [      ...prevWorkExperienceList,      newWorkExperience,    ]);
    setNewWorkExperience({
      company: "",
      jobTitle: "",
      duration: "",
    });
  };

  const handleDeleteWorkExperience = (index) => {
    setWorkExperienceList((prevWorkExperienceList) =>
      prevWorkExperienceList.filter((_, i) => i !== index)
    );
  };

  const handleUpdateWorkExperience = (index) => {
    setIsUpdating(true);
    setUpdatingIndex(index);
    setNewWorkExperience(workExperienceList[index]);
  };

  const handleSaveWorkExperience = () => {
    const updatedWorkExperienceList = [...workExperienceList];
    updatedWorkExperienceList[updatingIndex] = newWorkExperience;
    setWorkExperienceList(updatedWorkExperienceList);
    setNewWorkExperience({
      company: "",
      jobTitle: "",
      duration: "",
    });
    setIsUpdating(false);
    setUpdatingIndex(null);
  };

  const handleCancelUpdate = () => {
    setIsUpdating(false);
    setUpdatingIndex(null);
    setNewWorkExperience({
      company: "",
      jobTitle: "",
      duration: "",
    });
  };

  return (
    <div className="App">
      <h1>Work Experience</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workExperienceList.map((workExperience, index) => (
            <tr key={index}>
            <td>{workExperience.company}</td>
            <td>{workExperience.jobTitle}</td>
            <td>{workExperience.duration}</td>
            <td>
            <button onClick={() => handleUpdateWorkExperience(index)}>
            Edit
            </button>
            <button onClick={() => handleDeleteWorkExperience(index)}>
            Delete
            </button>
            </td>
            </tr>
            ))}
            </tbody>
            </table>
            <h2>{isUpdating ? "Update Experience" : "Add Experience"}</h2>
            <form>
            <label>
            Company:
            <input
                     type="text"
                     name="company"
                     value={newWorkExperience.company}
                     onChange={handleInputChange}
                   />
            </label>
            <label>
            Job Title:
            <input
                     type="text"
                     name="jobTitle"
                     value={newWorkExperience.jobTitle}
                     onChange={handleInputChange}
                     />
                     </label>
                     <label>
                     Duration:
                     <input
                                       type="text"
                                       name="duration"
                                       value={newWorkExperience.duration}
                                       onChange={handleInputChange}
                                     />
                     </label>
                     {isUpdating ? (
                     <div>
                     <button type="button" onClick={handleSaveWorkExperience}>
                     Save
                     </button>
                     <button type="button" onClick={handleCancelUpdate}>
                     Cancel
                     </button>
                     </div>
                     ) : (
                     <button type="button" onClick={handleAddWorkExperience}>
                     Add
                     </button>
                     )}
                     </form>
                     </div>
                     );
                     }
                     
export default Home;
