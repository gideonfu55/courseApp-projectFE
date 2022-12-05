import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { addCourseValidation } from "../Validations/CourseValidation";

const addSuccess = () => {
  toast('✅ Your course has been added successfully!', {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
};

const AddCourse: React.FC = () => {

  const [title, setTitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [summary, setSummary] = useState('')
  // const [setImage] = useState()
  const [price, setPrice] = useState('')

  const [validationError, setValidationError] = useState({})
  const [errorMessages, setErrorMessages] = useState([])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(e.target.value)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    let formData = {
      title: title,
      authorName: authorName,
      summary: summary,
      price: price
    }

    const validateForm = await addCourseValidation
      .validate(formData, {abortEarly: false,})
      .then((responseData) => {
        setErrorMessages([])
        addSuccess()
      })
      .catch((err) => {
        console.log(err.errors)
        console.log(err.validationError)
        setValidationError(err.value)
        setErrorMessages(err.errors)
      })
  }

  return (
    <div className="addCourse">
      <section className="courseAddNav">
        {/* <nav>
          <ul className="courseAddNavBar">
            <li>Add Course</li>
            <li>Manage Courses</li>
          </ul>
        </nav> */}
      </section>

      <form className="addCourseForm" onSubmit={handleSubmit}>
        <h3>Add a Course</h3>

        <section className="CourseTitle">
          <div className="addTitleHeader">          
            <h6>Course Title</h6>
            {errorMessages.length === 0
            ? null
            : errorMessages.map((e: string) => {
              if (e.includes('title')) {
                return (
                  <div className="errorMessage">
                    <h6>{e}</h6>
                  </div>
                )
              }
            })}
          </div>
          <input
            id="addCourseTitle"
            type="text"
            placeholder="Enter a course title (at least 5 characters)"
            onChange={handleTitleChange}
            value={title}
            required
          />
        </section>

        <section className="author">
          <div className="addTitleHeader">          
            <h6>Author</h6>
            {errorMessages.length === 0
            ? null
            : errorMessages.map((e: string) => {
              if (e.includes('name')) {
                return (
                  <div className="errorMessage">
                    <h6>{e}</h6>
                  </div>
                )
              }
            })}
          </div>
          <input 
            id="addCourseAuthor"
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={authorName}
            required
          />
        </section>

        <section className="summary">
          <div className="addTitleHeader">          
            <h6>Summary</h6>
            {errorMessages.length === 0
            ? null
            : errorMessages.map((e: string) => {
              if (e.includes('summary')) {
                return (
                  <div className="errorMessage">
                    <h6>{e}</h6>
                  </div>
                )
              }
            })}
          </div>
          <input 
            id="addSummary"
            type="text"
            placeholder="Provide a summary of your course (at least 20 characters)"
            onChange={handleTextChange}
            value={summary}
            required 
          />
        </section>

        <section className="courseImage">
          <h6>Course Image (optional)</h6>
          <label>Select a file:</label>
          <input 
            id="addCourseImage"
            type="file"
            name="myfile"
          />
        </section>

        <section className="price">
          <div className="addTitleHeader">          
            <h6>Price</h6>
            {errorMessages.length === 0
            ? null
            : errorMessages.map((e: string) => {
              if (e.includes('price')) {
                return (
                  <div className="errorMessage">
                    <h6>{e}</h6>
                  </div>
                )
              }
            })}
          </div>
          <input 
            id="addPrice"
            type="text"
            placeholder="S$"
            onChange={handlePriceChange}
            value={price}
            required
          />
        </section>

        <section className="submission">
          <button id="addBtn">Add</button>
          <button id="cancelBtn">Cancel</button>
        </section>
      </form>
      <ToastContainer
        style={{fontSize: 13}}
      />
    </div>
  )
}

export default AddCourse