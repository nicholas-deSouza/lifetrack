import { useState } from "react";
import apiClient from "../Services/apiClient";
import './form.css'


export default function ExerciseForm({ user, addExercise }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
      name: "",
      category: "",
      duration: "",
      intensity: "",
    });
  
    
    console.log(user, "in form")

    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      const { data, error } = await apiClient.createCard({
        name: form.name,
        category: form.category,
        duration: form.duration,
        intensity: form.intensity,
      });
      console.log(data, "data")
      console.log(error, "error")

      if (error) setError(error);
      if (data) {
        addExercise(data.exercise);
        // set to a blank form
        setForm({ name: "", category: "", duration: "", intensity: "" });
      }
      setIsLoading(false);
    };
  
    const renderForm = () => {
      // if (!user?.email) {
      //   return <NotAllowed />;
      // }
      return (
        <div className="form">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name of Exercise"
              value={form.name}
              onChange={handleOnInputChange}
            />
          </div>
  
          <div className="input-field">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Exercise Category"
              value={form.category}
              onChange={handleOnInputChange}
            />
          </div>
  
          <div className="input-field">
            <label htmlFor="duration">Intensity</label>
            <input
              type="text"
              name="intensity"
              placeholder="Intensity"
              value={form.intensity}
              onChange={handleOnInputChange}
            />
          </div>
  
          <div className="input-field">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={form.duration}
              onChange={handleOnInputChange}
            />
          </div>
  
          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      );
    };
  
    return (
      <div className="name">
        <div className="card">
          <h2>Add Exercise</h2>
  
          {Boolean(error) && <span className="error">{error}</span>}
  
          {renderForm()}
        </div>
      </div>
    );
  }