import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "Which technical skills do you want to offer or swap?",
    options: ["JavaScript", "TypeScript", "Java", "C", "Python", "C++", "Docker", "SQL"],
    multiple: true,
  },
  {
    id: 2,
    question: "How many years of experience do you have?",
    options: ["<1", "1-3", "3-5", "5-10", "10+"],
  },
  {
    id: 3,
    question: "What is your preferred learning style?",
    options: ["Hands-on", "Reading", "Watching videos", "Pair programming", "Any"],
  },
  {
    id: 4,
    question: "How many hours per week can you commit?",
    options: ["<5", "5-10", "10-20", "20-40", "40+"],
  },
  {
    id: 5,
    question: "Preferred method of communication?",
    options: ["Email", "Phone", "Chat", "Video Call", "Any"],
  },
];

const Chip = ({ label, onDelete }) => (
  <span className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-300">
    {label}
    <button
      type="button"
      onClick={onDelete}
      className="ml-2 text-gray-400 hover:text-red-500 font-bold focus:outline-none cursor-pointer"
    >
      ×
    </button>
  </span>
);

const SurveyPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [primarySkills, setPrimarySkills] = useState([]);
  const [customSkill, setCustomSkill] = useState("");

  useEffect(() => {
    setAnswers((ans) => {
      const newAns = [...ans];
      newAns[0] = primarySkills;
      return newAns;
    });
  }, [primarySkills]);

  const handlePrimarySkillAdd = (skill) => {
    if (!primarySkills.includes(skill)) {
      setPrimarySkills([...primarySkills, skill]);
    }
  };

  const handlePrimarySkillDelete = (skill) => {
    setPrimarySkills(primarySkills.filter((s) => s !== skill));
  };

  const handleNext = () => setCurrent((c) => c + 1);
  const handlePrev = () => setCurrent((c) => c - 1);

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Survey submitted!\n" + JSON.stringify(answers, null, 2));
  };

  const handleCustomSkillAdd = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !primarySkills.includes(trimmed)) {
      setPrimarySkills([...primarySkills, trimmed]);
      setCustomSkill("");
    }
  };

  const q = questions[current];

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-gray-900 rounded-lg shadow-lg text-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">User Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="font-semibold block mb-3 text-white">{q.question}</label>
          <div className="mt-3">
            {q.multiple ? (
              <>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="border border-gray-700 rounded-md p-2 w-64 mr-2 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter custom skill"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleCustomSkillAdd();
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="px-3 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-600 disabled:opacity-50"
                    onClick={handleCustomSkillAdd}
                    disabled={!customSkill.trim()}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-4">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`mr-2 mb-2 px-4 py-2 rounded-full border transition-colors
                        ${
                          primarySkills.includes(opt)
                            ? "bg-indigo-600 text-white border-indigo-500"
                            : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-indigo-900"
                        }`}
                      onClick={() => handlePrimarySkillAdd(opt)}
                      disabled={primarySkills.includes(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap">
                  {primarySkills.map((skill) => (
                    <Chip key={skill} label={skill} onDelete={() => handlePrimarySkillDelete(skill)} />
                  ))}
                </div>
              </>
            ) : (
              q.options.map((opt) => (
                <label key={opt} className="mr-6 inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    checked={answers[current] === opt}
                    onChange={() => handleChange(opt)}
                    className="form-radio text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-300">{opt}</span>
                </label>
              ))
            )}
          </div>
        </div>
        <div>
          {current > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-5 py-2 rounded bg-gray-700 text-gray-300 mr-4 hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Previous
            </button>
          )}
          {current < questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={
                (current === 0 && primarySkills.length === 0) ||
                (current !== 0 && !answers[current])
              }
              className={`px-5 py-2 rounded text-white transition-colors
                ${((current === 0 && primarySkills.length === 0) || (current !== 0 && !answers[current]))
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-indigo-700 hover:bg-indigo-600 cursor-pointer"
                }
              `}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={
                (current === 0 && primarySkills.length === 0) ||
                (current !== 0 && !answers[current])
              }
              className={`px-5 py-2 rounded text-white transition-colors
                ${((current === 0 && primarySkills.length === 0) || (current !== 0 && !answers[current]))
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-indigo-700 hover:bg-indigo-600 cursor-pointer"
                }
              `}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SurveyPage;
