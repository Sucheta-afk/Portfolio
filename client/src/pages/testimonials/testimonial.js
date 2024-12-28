import React, { useState, useEffect } from "react";
import "./testimonial.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA77e5_ZSDEmy3pmKN3uSR9qPqlFCtflOg",
  authDomain: "portfolio-f279d.firebaseapp.com",
  projectId: "portfolio-f279d",
  storageBucket: "portfolio-f279d.firebasestorage.app",
  messagingSenderId: "615926763709",
  appId: "1:615926763709:web:275da69f799d48f691e7d4",
  measurementId: "G-KMT075KLWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Testimonials = () => {
  const [user, setUser] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from backend on page load
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        
        // Check if response is okay (status code 200)
        if (response.ok) {
          const data = await response.json();
          console.log("Testimonials fetched:", data);  // Check the fetched data
          setTestimonials(data);
        } else {
          console.error("Failed to fetch testimonials, status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Sign-In Function
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      setUser(loggedInUser);
      setFormVisible(true); // Show form after sign-in
    } catch (error) {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert(`Failed to sign in. Reason: ${error.message}`);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const designation = event.target.designation.value;
    const comments = event.target.comments.value;

    const testimonialData = {
      name,
      designation,
      comments,
    };

    try {
      // Send data to your backend API
      const response = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonialData),
      });

      if (response.ok) {
        alert("Testimonial submitted successfully!");

        // Hide form after submission
        setFormVisible(false);

        // Fetch new testimonials after submitting a new one
        const updatedTestimonials = await fetch("http://localhost:5000/api/testimonials");
        const data = await updatedTestimonials.json();
        setTestimonials(data);  // Update the testimonials state with the new list
      } else {
        alert("Failed to submit testimonial.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit testimonial.");
    }
  };

  return (
    <div className="container project" id="testimonial">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">TESTIMONIALS</h2>
      <hr />
      <p className="pb-3 text-center">Don't take my word for it, take theirs!</p>
  
      {/* Display testimonials */}
      <div className="testimonials-list">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p><strong>{testimonial.designation}</strong></p>
              <p>{testimonial.comments}</p>
            </div>
          ))
        ) : (
          <p>No testimonials available yet.</p>
        )}
      </div>
  
      {/* Show sign-in button or form */}
      {!user ? (
        <button
          id="add-testimonial"
          className="auth-button"
          type="button"
          onClick={handleSignIn}
        >
          Add Testimonial with Google
        </button>
      ) : (
        formVisible && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="designation"
                placeholder="Designation-Institution"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="comments"
                rows="5"
                placeholder="Comments"
                required
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit Testimonial
            </button>
            <br />
            <br />
          </form>
        )
      )}
    </div>
  );
};
export default Testimonials;
