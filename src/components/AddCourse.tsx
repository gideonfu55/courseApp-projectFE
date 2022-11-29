
const AddCourse = () => {
  return (
    <div className="addCourse">
      <section className="courseAddNav">
        <nav>
          <ul className="courseAddNavBar">
            <li>Add Course</li>
            <li>Manage Courses</li>
          </ul>
        </nav>
      </section>

      <form className="addCourseForm">
        <h3>Add a Course</h3>
        <section className="CourseTitle">
          <h6>Course Title</h6>
          <input id="addCourseTitle" typeof="text" required></input>
        </section>

        <section className="author">
          <h6>Author</h6>
          <input id="addCourseAuthor" typeof="text" required></input>
        </section>

        <section className="summary">
          <h6>Summary</h6>
          <input id="addSummary" typeof="text" required></input>
        </section>

        <section className="courseImage">
          <h6>Course Image</h6>
          <label>Select a file:</label>
          <input id="addCourseImage" type="file" name="myfile"></input>
        </section>

        <section className="price">
          <h6>Price</h6>
          <input id="addPrice" typeof="text" required></input>
        </section>

        <section className="submission">
          <button id="addBtn">Add</button>
          <button id="cancelBtn">Cancel</button>
        </section>
      </form>
    </div>
  )
}

export default AddCourse