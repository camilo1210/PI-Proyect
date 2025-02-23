/* eslint-disable no-unused-vars */
import { create } from "zustand";

const useQuizStore = create((set)=> ({
    quiz :{
        correctAnswers :0 ,
        incorrectAnswers: 0,
        percentageQuizCompleted:0,
    },

    incrementQuizProgress :() => set((state)=>{
        const newPercentaga = Math.min(
            state.quiz.percentageQuizCompleted  + 25, 100
        );
        return{
            quiz:{...state.quiz,percentageQuizCompleted : newPercentaga},
        };
    }),

    clearQuiz :() =>
        set({
            quiz:{
                correctAnswers :0 ,
                incorrectAnswers: 0,
                percentageQuizCompleted:0,
            },

        }),
}))

