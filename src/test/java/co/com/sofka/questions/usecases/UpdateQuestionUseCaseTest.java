package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.Objects;

import static org.mockito.Mockito.when;

@SpringBootTest
class UpdateQuestionUseCaseTest {

    @SpyBean
    private UpdateQuestionUseCase updateQuestionUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void updateQuestionTest(){

        var questionDTO = new QuestionDTO("11111","1111aaa","Realizas test?","TECNOLOGIA",
                "Programacion",1,2, Arrays.asList("x1", "x2"),  "pruebashollman@gmail.com");

        var question = new Question();
        question.setId("11111");
        question.setUserId("1111aaa");
        question.setQuestion("Realizas test?");
        question.setType("TECNOLOGIA");
        question.setCategory("Programacion");
        question.setNumberOfReviews(1);
        question.setSumOfReviewScores(2);
        question.setUserReviews(Arrays.asList("x1","x2"));
        question.setUserMail("pruebashollman@gmail.com");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = updateQuestionUseCase.apply(questionDTO);

        Assertions.assertEquals(Objects.requireNonNull(result.block()).getId(),"11111");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getUserId(),"1111aaa");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getQuestion(),"Realizas test?");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getType(),"TECNOLOGIA");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getCategory(),"Programacion");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getUserMail(),"pruebashollman@gmail.com");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getNumberOfReviews(),1);
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getSumOfReviewScores(),2);

    }


}