package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.Review;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
class AddReviewUseCaseTest {
    @MockBean
    QuestionRepository questionRepository;

    @Mock
    UpdateQuestionUseCase updateQuestionUseCase;

    @SpyBean
    AddReviewUseCase addReviewUseCase;

    @Test
    @DisplayName("Add satisfaction review")
    void setAddReviewTest(){
        List<String> listParameter = new ArrayList<>();
        var questionDTO = new QuestionDTO("hhhhh","hhhhh1111","Que lenguaje de programacion te gusta?","Desarrollo",
                "TECNOLOGIA Y DESARROLLO",1,2, Arrays.asList("x1","x2"),  "hollman@gmail.com ");

        var question = new Question();
        question.setId("hhhhh");
        question.setUserId("hhhhh1111");
        question.setQuestion("Que lenguaje de programacion te gusta?");
        question.setType("Desarrollo");
        question.setCategory("TECNOLOGIA Y DESARROLLO");
        question.setNumberOfReviews(1);
        question.setSumOfReviewScores(2);
        question.setUserReviews(List.of("x1","x2"));
        question.setUserMail("santiago@gmail.com");

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));
        Mockito.when(updateQuestionUseCase.apply(questionDTO)).thenReturn(Mono.just(questionDTO));
        Mockito.when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var review = new Review();
        review.setUserId("hhhhh1111");
        review.setScore("3");
        review.setQuestionId("1234drt");

        var resultQuestionDTO = addReviewUseCase.addReview(review);
        System.out.println(resultQuestionDTO);
        assert resultQuestionDTO != null;
        Assertions.assertEquals(resultQuestionDTO.block().getId(), question.getId());
        Assertions.assertEquals(resultQuestionDTO.block().getCategory(), question.getCategory());
        Assertions.assertEquals(resultQuestionDTO.block().getQuestion(), question.getQuestion());


    }
}