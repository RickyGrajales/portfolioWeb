import React, { useState } from "react";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([
    "Luis is a very quick learner and quickly grasps key concepts of Web development.",
    "Working with Luis has been an awesome experience.",
  ]);
  const [newRecommendation, setNewRecommendation] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAddRecommendation = () => {
    if (newRecommendation.trim()) {
      setRecommendations([...recommendations, newRecommendation]);
      setNewRecommendation("");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <section id="recommendations">
      <h2>Recommendations</h2>
      <div className="all_recommendations">
        {recommendations.map((rec, index) => (
          <div className="recommendation" key={index}>
            <span>&#8220;</span>
            {rec}
            <span>&#8221;</span>
          </div>
        ))}
      </div>
      <fieldset>
        <legend>Leave a Recommendation</legend>
        <textarea
          value={newRecommendation}
          onChange={(e) => setNewRecommendation(e.target.value)}
          placeholder="Your recommendation"
        />
        <button onClick={handleAddRecommendation}>Submit</button>
      </fieldset>
      {showPopup && (
        <div className="popup active">
          <p>Thank you for your recommendation!</p>
        </div>
      )}
    </section>
  );
};

export default Recommendations;
