import React, { useState } from "react";
import Timer from "../components/Timer";

const TestForm = () => {
  const [currentChapter, setCurrentChapter] = useState("Physics");

  // Chapter-specific questions
  const questions = {
    Physics: [
      {
        id: 1,
        text: "A car travels a distance of 180 kilometers in 4 hours on a highway. Calculate the average speed of the car, and explain how speed differs from velocity with a practical example.",
      },
      {
        id: 2,
        text: "Explain Newton's Third Law of Motion with at least two examples from everyday life. How does it help us understand the functioning of rocket propulsion?",
      },
      {
        id: 3,
        text: "If a person pushes a box weighing 25 kg with a force of 200 N on a rough surface, calculate the acceleration of the box given that the coefficient of friction is 0.3.",
      },
      {
        id: 4,
        text: "Describe the energy transformations that occur when a roller coaster moves from the highest point to the lowest. Discuss how friction affects this motion.",
      },
    ],
    Chemistry: [
      {
        id: 1,
        text: "Water is often referred to as a 'universal solvent.' Explain why water has this property, and provide three examples of its role in chemical reactions.",
      },
      {
        id: 2,
        text: "Describe the process of electrolysis of water, including the chemical reactions at the anode and cathode. Why is this process important in industrial applications?",
      },
      {
        id: 3,
        text: "What are isotopes? Explain their significance with examples of isotopes used in medicine and their benefits in diagnostic processes.",
      },
      {
        id: 4,
        text: "Discuss the differences between ionic, covalent, and metallic bonds. Provide examples and describe their properties in terms of conductivity and melting points.",
      },
    ],
    Biology: [
      {
        id: 1,
        text: "Explain the process of photosynthesis in plants, including the role of chlorophyll, light energy, and carbon dioxide. Why is this process essential for life on Earth?",
      },
      {
        id: 2,
        text: "Describe the structure of the human heart and the mechanism of blood circulation. Include details about oxygenated and deoxygenated blood.",
      },
      {
        id: 3,
        text: "Discuss the differences between mitosis and meiosis. How are these processes essential for growth and reproduction?",
      },
      {
        id: 4,
        text: "What are the main types of microorganisms, and how do they impact human health? Provide examples of both beneficial and harmful microorganisms.",
      },
    ],
    Math: [
      {
        id: 1,
        text: "A company’s revenue increases by 10% every year. If the current revenue is $1,000,000, calculate the revenue at the end of the next three years using compound interest formula.",
      },
      {
        id: 2,
        text: "Solve the quadratic equation 3x² - 5x + 2 = 0 using the factorization method. Explain how the discriminant helps in determining the nature of roots.",
      },
      {
        id: 3,
        text: "Explain the Pythagorean Theorem with a real-life example. If a ladder is leaning against a wall, calculate the height reached by the ladder given its length and distance from the wall.",
      },
      {
        id: 4,
        text: "A farmer has a rectangular field of 60m × 40m. He wants to create a circular pond inside the field. Calculate the maximum area of the pond he can create and the remaining area of the field.",
      },
    ],
  };

  // Handler to set the chapter
  const handleChapterClick = (chapter) => {
    setCurrentChapter(chapter);
  };

  return (
    <div className="px-10 bg-[#E3EFFF]">
      <form>
        <h1 className="text-3xl font-semibold text-center pt-8">
          Attempt Questions by Chapter
        </h1>

        <div className="flex justify-between gap-8 pt-10">
          {/* Chapter Buttons */}
          <div>
            {["Physics", "Chemistry", "Biology", "Math"].map((chapter) => (
              <button
                key={chapter}
                type="button"
                onClick={() => handleChapterClick(chapter)}
                className={`bg-white p-6 text-xl font-semibold rounded-lg hover:border-[3px] border-[#765adb] text-[#765adb] mx-2 ${
                  currentChapter === chapter ? "border-[#2EA0D7]" : ""
                }`}
              >
                {chapter}
              </button>
            ))}
          </div>

          {/* Timer */}
          <div className="border-[3px] border-[#765adb] h-14 rounded-2xl p-3">
            <Timer initialTime={1800} /> {/* Start with 30 minutes */}
          </div>
        </div>

        <h1 className="text-3xl font-semibold my-6">
          Questions for {currentChapter}
        </h1>

        {/* Questions Section */}
        <div className="grid grid-cols-2 gap-16">
          {questions[currentChapter].map((question) => (
            <div key={question.id} className="text-xl flex flex-col w-full">
              <p className="w-full">
                <span className="font-bold">{question.id}.</span>{" "}
                {question.text}
              </p>
              <textarea
                className="w-full mt-4 border-[2px] border-[#765adb] outline-none px-4"
                placeholder="Answer Your Question"
              ></textarea>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="flex items-center mx-4 gap-2 text-2xl text-white font-semibold my-8 w-1/3 justify-center border-[2px] border-[#2EA0D7] bg-[#2EA0D7] py-2 px-4 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
