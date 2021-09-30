//import queryString from 'query-string';
import { get, update, getAllKeys } from "../utils/storage";
import { merge, omit } from "lodash";
import data from "../data/cours.json";

export const getFlashcardQuestions = (flashcard) => {
  const courses = data.find((course) => course.flashcard === flashcard);

  const filteredQuestions = courses.questions.map((item) =>
    omit(item, "status"),
  );
  return get(flashcard)
    .then((res) =>
      res.map((item, index) => merge(item, filteredQuestions[index])),
    )
    .then((res) => res);
};

export const getAllFlashcards = () => getAllKeys().then((res) => res);

export const updateFlashcards = (flashcard, updatedQuestions) =>
  update(
    flashcard,
    updatedQuestions.map((item) => omit(item, ["question", "answer"])),
  );

export const getFlashcardPourcentage = (res) =>
  get(res)
    .then((result) => {
      return {
        key: res,
        positifPourcentage: result.filter(
          (itemFlashcard) => itemFlashcard.status === 1,
        ).length,
        negatifPourcentage: result.filter(
          (itemFlashcard) => itemFlashcard.status === -1,
        ).length,
        length: result.length,
      };
    })
    .then((res) => res);
